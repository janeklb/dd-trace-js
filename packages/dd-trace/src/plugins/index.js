'use strict'

module.exports = {
  get '@cucumber/cucumber' () { return require('../../../datadog-plugin-cucumber/src') },
  get '@elastic/elasticsearch' () { return require('../../../datadog-plugin-elasticsearch/src') },
  get '@elastic/transport' () { return require('../../../datadog-plugin-elasticsearch/src') },
  get '@google-cloud/pubsub' () { return require('../../../datadog-plugin-google-cloud-pubsub/src') },
  get '@grpc/grpc-js' () { return require('../../../datadog-plugin-grpc/src') },
  get '@hapi/hapi' () { return require('../../../datadog-plugin-hapi/src') },
  get '@jest/core' () { return require('../../../datadog-plugin-jest/src') },
  get '@koa/router' () { return require('../../../datadog-plugin-koa/src') },
  get '@node-redis/client' () { return require('../../../datadog-plugin-redis/src') },
  get '@opensearch-project/opensearch' () { return require('../../../datadog-plugin-opensearch/src') },
  get '@redis/client' () { return require('../../../datadog-plugin-redis/src') },
  get 'amqp10' () { return require('../../../datadog-plugin-amqp10/src') },
  get 'amqplib' () { return require('../../../datadog-plugin-amqplib/src') },
  get 'aws-sdk' () { return require('../../../datadog-plugin-aws-sdk/src') },
  get 'bunyan' () { return require('../../../datadog-plugin-bunyan/src') },
  get 'cassandra-driver' () { return require('../../../datadog-plugin-cassandra-driver/src') },
  get 'connect' () { return require('../../../datadog-plugin-connect/src') },
  get 'couchbase' () { return require('../../../datadog-plugin-couchbase/src') },
  get 'cypress' () { return require('../../../datadog-plugin-cypress/src') },
  get 'dns' () { return require('../../../datadog-plugin-dns/src') },
  get 'elasticsearch' () { return require('../../../datadog-plugin-elasticsearch/src') },
  get 'express' () { return require('../../../datadog-plugin-express/src') },
  get 'fastify' () { return require('../../../datadog-plugin-fastify/src') },
  get 'find-my-way' () { return require('../../../datadog-plugin-find-my-way/src') },
  get 'fs' () { return require('../../../datadog-plugin-fs/src') },
  get 'graphql' () { return require('../../../datadog-plugin-graphql/src') },
  get 'grpc' () { return require('../../../datadog-plugin-grpc/src') },
  get 'hapi' () { return require('../../../datadog-plugin-hapi/src') },
  get 'http' () { return require('../../../datadog-plugin-http/src') },
  get 'http2' () { return require('../../../datadog-plugin-http2/src') },
  get 'https' () { return require('../../../datadog-plugin-http/src') },
  get 'ioredis' () { return require('../../../datadog-plugin-ioredis/src') },
  get 'jest-circus' () { return require('../../../datadog-plugin-jest/src') },
  get 'jest-config' () { return require('../../../datadog-plugin-jest/src') },
  get 'jest-environment-node' () { return require('../../../datadog-plugin-jest/src') },
  get 'jest-environment-jsdom' () { return require('../../../datadog-plugin-jest/src') },
  get 'jest-jasmine2' () { return require('../../../datadog-plugin-jest/src') },
  get 'koa' () { return require('../../../datadog-plugin-koa/src') },
  get 'koa-router' () { return require('../../../datadog-plugin-koa/src') },
  get 'kafkajs' () { return require('../../../datadog-plugin-kafkajs/src') },
  get 'mariadb' () { return require('../../../datadog-plugin-mariadb/src') },
  get 'memcached' () { return require('../../../datadog-plugin-memcached/src') },
  get 'microgateway-core' () { return require('../../../datadog-plugin-microgateway-core/src') },
  get 'mocha' () { return require('../../../datadog-plugin-mocha/src') },
  get 'mocha-each' () { return require('../../../datadog-plugin-mocha/src') },
  get 'moleculer' () { return require('../../../datadog-plugin-moleculer/src') },
  get 'mongodb' () { return require('../../../datadog-plugin-mongodb-core/src') },
  get 'mongodb-core' () { return require('../../../datadog-plugin-mongodb-core/src') },
  get 'mysql' () { return require('../../../datadog-plugin-mysql/src') },
  get 'mysql2' () { return require('../../../datadog-plugin-mysql2/src') },
  get 'net' () { return require('../../../datadog-plugin-net/src') },
  get 'next' () { return require('../../../datadog-plugin-next/src') },
  get 'oracledb' () { return require('../../../datadog-plugin-oracledb/src') },
  get 'paperplane' () { return require('../../../datadog-plugin-paperplane/src') },
  get 'pg' () { return require('../../../datadog-plugin-pg/src') },
  get 'pino' () { return require('../../../datadog-plugin-pino/src') },
  get 'pino-pretty' () { return require('../../../datadog-plugin-pino/src') },
  get 'redis' () { return require('../../../datadog-plugin-redis/src') },
  get 'restify' () { return require('../../../datadog-plugin-restify/src') },
  get 'rhea' () { return require('../../../datadog-plugin-rhea/src') },
  get 'router' () { return require('../../../datadog-plugin-router/src') },
  get 'sharedb' () { return require('../../../datadog-plugin-sharedb/src') },
  get 'tedious' () { return require('../../../datadog-plugin-tedious/src') },
  get 'winston' () { return require('../../../datadog-plugin-winston/src') }
}
