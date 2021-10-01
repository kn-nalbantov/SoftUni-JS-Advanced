function add(num) {
  let sum = num;

  function addNum(num2) {
    sum += num2;
    return addNum;
  }

  addNum.toString = () => {
    return sum;
  };

  return addNum;
}
