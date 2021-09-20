function rotateArr(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    let temp = arr.pop();
    arr.unshift(temp);
  }
  console.log(arr.join(' '));
}

