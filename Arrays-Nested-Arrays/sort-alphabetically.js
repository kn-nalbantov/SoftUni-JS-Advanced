function sortAlphabetically(input) {
  let num = 1;
  input.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < input.length; i++) {
    console.log(`${num}.${input[i]}`);
    num++;
  }
}

