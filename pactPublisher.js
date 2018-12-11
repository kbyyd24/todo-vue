let publisher = require('@pact-foundation/pact-node');
let path = require('path');

let opts = {
  pactFilesOrDirs: [path.resolve(process.cwd(), 'pacts/contracts')],
  pactBroker: 'http://ali-vm.gaoyuexiang.cn',
  pactBrokerUsername: process.env.PACT_USERNAME,
  pactBrokerPassword: process.env.PACT_PASSWORD,
  consumerVersion: '0.0.1'
};

publisher.publishPacts(opts);