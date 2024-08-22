const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call calculateNumber with SUM, 100, 20 and log the correct message', function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    sinon.assert.calledWith(spy, 'The total is: 10');

    stub.restore();
    spy.restore();
  });
});
