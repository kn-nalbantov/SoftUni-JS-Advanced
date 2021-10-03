function argementInfo(...args) {
  const types = {};

  for (let arg of args) {
    if (types.hasOwnProperty(typeof arg)) {
      types[typeof arg] += 1;
    } else {
      types[typeof arg] = 1;
    }
    console.log(`${typeof arg}: ${arg}`);
  }

  let sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);
  sorted.forEach((element) => {
    console.log(`${element[0]} = ${element[1]}`);
  });
}
