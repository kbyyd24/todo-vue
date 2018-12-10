import { resolve } from 'path';
import { Pact } from '@pact-foundation/pact';

global.port = 8080;
global.provider = new Pact({
  port: global.port,
  log: resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
  dir: resolve(process.cwd(), 'pacts'),
  spec: 2,
  cors: true,
  pactfileWriteMode: 'update',
  consumer: 'todo app vue consumer',
  provider: 'todo app provider'
});