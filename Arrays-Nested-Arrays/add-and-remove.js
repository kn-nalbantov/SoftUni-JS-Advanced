function addRemove(input) {
  let currentNum = 1;
  let result = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] == 'add') {
      result.push(currentNum);
    } else {
      result.pop();
    }
    currentNum++;
  }
  
  if (result.length == 0) {
    console.log('Empty');
  } else {
    console.log(result.join('\n'));
  }
}

