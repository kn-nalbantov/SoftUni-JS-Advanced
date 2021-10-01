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

  for (let type in types) {
    console.log(`${type} = ${types[type]}`);
  }
}

// argementInfo({ name: 'bob' }, 399, 499);
