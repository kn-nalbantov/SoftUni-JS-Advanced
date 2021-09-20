function extractSequence(arr) {
  let currentHighest = arr[0];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= currentHighest) {
      currentHighest = arr[i];
      result.push(currentHighest);
    }
  }
  return result;
}
