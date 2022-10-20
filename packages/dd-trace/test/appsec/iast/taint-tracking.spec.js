'use strict'

const { expect } = require('chai')
const Module = require('module')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const iastContextFunctions = require('../../../src/appsec/iast/iast-context')

describe('IAST TaintTracking', () => {
  let tainTracking
  const taintedUtils = {
    createTransaction: id => id,
    removeTransaction: id => id,
    concat: (id, res, op1, op2) => id
  }
  
  const datadogCore = {
    storage: {
      getStore: () => store
    }
  }

  const store = {}
  
  const shimmer = {
    wrap: (target, name, wrapper) => {},
    unwrap: (target, name) => {}
  }

  beforeEach(() => {
    tainTracking = proxyquire('../../../src/appsec/iast/taint-tracking', {
      '@datadog/native-iast-taint-tracking': sinon.spy(taintedUtils),
      '../../../../datadog-core': datadogCore,
      '../../../../datadog-shimmer': sinon.spy(shimmer)
    })
  })

  afterEach(sinon.restore)

  describe('createTransaction', () => {

    it('Given not null id and not null iastContext should call TaintedUtils.createTransaction and set IAST_TRANSACTION_ID in iastContext', () => {
      const iastContext = {}
      const transactionId = 'id'
      tainTracking.createTransaction(transactionId, iastContext)
      expect(taintedUtils.createTransaction).to.be.calledOnce
      expect(iastContext[tainTracking.IAST_TRANSACTION_ID]).to.be.equal(transactionId)
    })

    it('Given null id and not null iastContext should not call TaintedUtils.createTransaction', () => {
      const iastContext = {}
      const transactionId = null
      tainTracking.createTransaction(transactionId, iastContext)
      expect(taintedUtils.createTransaction).not.to.be.called
      expect(iastContext[tainTracking.IAST_TRANSACTION_ID]).to.be.undefined
    })

    it('Given not null id and null iastContext should not call TaintedUtils.createTransaction', () => {
      const iastContext = null
      const transactionId = 'id'
      tainTracking.createTransaction(transactionId, iastContext)
      expect(taintedUtils.createTransaction).not.to.be.called
      expect(iastContext).to.be.null
    })
  })

  describe('removeTransaction', () => {
    it('Given not null iastContext with defined IAST_TRANSACTION_ID should call TaintedUtils.removeTransaction', () => {
      const iastContext = {
        [tainTracking.IAST_TRANSACTION_ID]: 'id'
      }
      tainTracking.removeTransaction(iastContext)
      expect(taintedUtils.removeTransaction).to.be.calledWithExactly(iastContext[tainTracking.IAST_TRANSACTION_ID])
    })

    it('Given iastContext with undefined IAST_TRANSACTION_ID should not call TaintedUtils.removeTransaction', () => {
      const iastContext = {}
      tainTracking.removeTransaction(iastContext)
      expect(taintedUtils.removeTransaction).not.to.be.called
    })

    it('Given null iastContext should call not TaintedUtils.removeTransaction', () => {
      const iastContext = null
      tainTracking.removeTransaction(iastContext)
      expect(taintedUtils.removeTransaction).not.to.be.called
    })
  })

  describe('enableTaintTracking', () => {

    beforeEach(() => {
      iastContextFunctions.saveIastContext(store, {}, {[tainTracking.IAST_TRANSACTION_ID]: 'id'})
    })

    it('Should set a not dummy global._ddiast object', () => {
      tainTracking.enableTaintTracking(true)
      
      // taintedUtils is declared in global scope
      expect(global._ddiast).not.to.be.undefined
      expect(global._ddiast.plusOperator).not.to.be.undefined

      // taintedUtils methods are called
      global._ddiast.plusOperator('helloworld', 'hello', 'world')
      expect(taintedUtils.concat).to.be.called

      // Module.prototype._compile wrap is setted
      expect(shimmer.wrap).to.be.calledWith(Module.prototype, '_compile')
    })

    it('Should set dummy global._ddiast object', () => {
      tainTracking.enableTaintTracking(false)

      // dummy taintedUtils is declared in global scope
      expect(global._ddiast).not.to.be.undefined
      expect(global._ddiast.plusOperator).not.to.be.undefined

      // taintedUtils methods are not called
      global._ddiast.plusOperator('helloworld', 'hello', 'world')
      expect(taintedUtils.concat).not.to.be.called

      // remove Module.prototype._compile wrap
      expect(shimmer.unwrap).to.be.calledWith(Module.prototype, '_compile')
    })
  })
})
