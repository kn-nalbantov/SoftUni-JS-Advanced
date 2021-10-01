function getFibonator() {
  let n1 = 0;
  let n2 = 1;

  function updateFib() {
    let nextNum = n1 + n2;
    n2 = n1;
    n1 = nextNum;
    return nextNum;
  }

  return updateFib;
}
