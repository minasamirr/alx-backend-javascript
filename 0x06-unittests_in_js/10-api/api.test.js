describe('Available payments', () => {
  it('GET /available_payments returns correct payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  });
});

describe('Login', () => {
  it('POST /login returns correct welcome message', (done) => {
    request.post('http://localhost:7865/login', {
      json: { userName: 'Betty' }
  }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
