document.getElementById('calculateBtn').addEventListener('click', function () {
  const incomeInput = document.getElementById('income').value;
  const income = parseFloat(incomeInput);
  const resultDiv = document.getElementById('result');

  const tax = calculateTax(income);

  if (tax === null) {
    resultDiv.textContent = 'Please enter a valid, non-negative income.';
    resultDiv.style.color = '#e74c3c';
  } else {
    resultDiv.textContent = 'Estimated Tax: $' + tax.toFixed(2);
    resultDiv.style.color = '#1f2a44';
  }
});
