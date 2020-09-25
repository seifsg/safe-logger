const logger = require('../dist/index').LoggerClass;
const log = require('../dist/index').default;

test('should be initiated of LoggerClass', () => {
  expect(log).toBeInstanceOf(logger);
});

test('should be console logging functions', () => {
  expect(log.i('should be console logging functions').name).toEqual(
    'bound ' + console.info.name,
  );
  expect(log.w('should be console logging functions').name).toEqual(
    'bound ' + console.warn.name,
  );
  expect(log.e('should be console logging functions').name).toEqual(
    'bound ' + console.error.name,
  );
});

test('should be able to go silent once in prod', () => {
  log.goSilent();
  expect(typeof log.i('should be silent')()).toEqual('undefined');
  expect(typeof log.e('should be silent')()).toEqual('undefined');
  expect(typeof log.w('should be silent')()).toEqual('undefined');
});

test('should be able to go loud once turned back on', () => {
  log.goLoud();
  expect(log.i('should be console logging functions').name).toEqual(
    'bound ' + console.info.name,
  );
  expect(log.w('should be console logging functions').name).toEqual(
    'bound ' + console.warn.name,
  );
  expect(log.e('should be console logging functions').name).toEqual(
    'bound ' + console.error.name,
  );
});
