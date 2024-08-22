// 8-api/api.test.js

const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Ensure the server is running

describe('Index page', () => {
  it('Correct status code?', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  // Add more tests if necessary
});
