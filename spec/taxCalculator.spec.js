const calculateTax = require('../taxCalculator.js');

describe('calculateTax', function () {

  it('should return 0 tax for income of 0', function () {
    expect(calculateTax(0)).toBe(0);
  });

  it('should calculate correct tax within the first bracket (<=10000)', function () {
    expect(calculateTax(5000)).toBe(250);
  });

  it('should calculate correct tax within the second bracket (10001-40000)', function () {
    expect(calculateTax(20000)).toBe(1500);
  });

  it('should calculate correct tax within the third bracket (40001-80000)', function () {
    expect(calculateTax(60000)).toBe(6500);
  });

  it('should calculate correct tax above the fourth bracket (>80000)', function () {
    expect(calculateTax(100000)).toBe(13500);
  });

  it('should return null for negative income', function () {
    expect(calculateTax(-500)).toBeNull();
  });

  it('should return null for non-numeric input', function () {
    expect(calculateTax('abc')).toBeNull();
  });

});
