function sortNumbers(numbers) {
  let itterations = numbers.length / 2;
  let numbers2 = numbers.slice();
  let result = [];

  numbers.sort((a, b) => a - b);
  numbers2.sort((a, b) => b - a);

  for (let i = 0; i < itterations; i++) {
    result.push(numbers.shift());
    result.push(numbers2.shift());
  }

  if (Math.floor(itterations) !== itterations) { //if odd number of elements in array
    result.pop();
  }

  return result;
}

