const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spy.restore();
  });

  it('should log "The total is: 120" for 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(spy, 'The total is: 120');
    sinon.assert.calledOnce(spy);
  });

  it('should log "The total is: 20" for 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(spy, 'The total is: 20');
    sinon.assert.calledOnce(spy);
  });
});
