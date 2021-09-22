function validityChecker(x1, y1, x2, y2) {
  let d1 = 0;
  let d2 = 0;
  let d3 = 0;

  if (x1 == 0) {
    d1 = y1;
  } else if (y1 == 0) {
    d1 = x1;
  } else {
    d1 = Math.sqrt(x1 * x1 + y1 * y1);
  }

  if (x2 == 0) {
    d2 = y2;
  } else if (y2 == 0) {
    d2 = x2;
  } else {
    d2 = Math.sqrt(x2 * x2 + y2 * y2);
  }

  if (x1 == x2) {
    d3 = Math.abs(y2 - y1);
  } else if (y1 == y2) {
    d3 = Math.abs(x1 - x2);
  } else {
    d3 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  console.log(`{${x1}, ${y1}} to {0, 0} is ${d1 % 1 == 0 ? 'valid' : 'invalid'}`);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${d2 % 1 == 0 ? 'valid' : 'invalid'}`);
  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${d3 % 1 == 0 ? 'valid' : 'invalid'}`);
}

