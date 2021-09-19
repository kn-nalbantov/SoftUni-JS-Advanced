function gcd(a, b) {
  while (b != 0) {
    let temp;
    temp = b;
    b = a % b;
    a = temp;
  }
  console.log(a);
}