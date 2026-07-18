function calculateTax(income) {
  if (typeof income !== 'number' || isNaN(income) || income < 0) {
    return null;
  }

  let tax = 0;

  if (income <= 10000) {
    tax = income * 0.05;
  } else if (income <= 40000) {
    tax = 10000 * 0.05 + (income - 10000) * 0.10;
  } else if (income <= 80000) {
    tax = 10000 * 0.05 + 30000 * 0.10 + (income - 40000) * 0.15;
  } else {
    tax = 10000 * 0.05 + 30000 * 0.10 + 40000 * 0.15 + (income - 80000) * 0.20;
  }

  return parseFloat(tax.toFixed(2));
}

// Support both browser (global) and Node/Jasmine (module.exports) usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = calculateTax;
} else {
  window.calculateTax = calculateTax;
}
