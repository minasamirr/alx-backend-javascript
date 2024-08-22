const request = require('request');
const { expect } = require('chai');
const app = require('./api');
const http = require('http');

describe('Index page', () => {
  it('GET / returns correct message', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('GET /cart/12 returns correct message', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('GET /cart/hello returns 404', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.include('Cannot GET /cart/hello');
      done();
    });
  });
});
