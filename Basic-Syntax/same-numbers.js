function sameNumbers(num) {
  num = num.toString();
  let firstNum = num[0];
  let isSame = true;
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
    if (num[i] != firstNum) {
      isSame = false;
    }
  }

  if (isSame) {
    console.log('true');
  } else {
    console.log('false');
  }
  console.log(sum);
}

