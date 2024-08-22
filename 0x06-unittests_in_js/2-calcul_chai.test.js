const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  it('should return 6 for SUM with inputs 1.4 and 4.5', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return -4 for SUBTRACT with inputs 1.4 and 4.5', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return 0.2 for DIVIDE with inputs 1.4 and 4.5', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" for DIVIDE with input 0 as the second argument', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
