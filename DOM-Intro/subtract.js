function subtract() {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const result = document.getElementById('result');

    let sum = Number(firstNumber.value) - Number(secondNumber.value);
    result.textContent = sum;
  }