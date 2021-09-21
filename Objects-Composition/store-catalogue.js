function storeCatalogue(input) {
  let catalogue = [];
  let result = {};

  for (let line of input) {
    let entry = [];
    let [product, price] = line.split(' : ');
    price = Number(price);

    entry.push(product, price);
    catalogue.push(entry);
  }

  let sorted = catalogue.sort((a, b) => a[0].localeCompare(b[0]));

  for (let item of sorted) {
    if (!result.hasOwnProperty(item[0][0])) {
      result[item[0][0]] = [];
    }
    result[item[0][0]].push(item[0], item[1]);
  }

  let result2 = Object.entries(result);

  for (let line of result2) {
    console.log(line[0]);
    for (let i = 0; i < line[1].length; i += 2) {
      console.log(line[1][i] + ': ' + line[1][i+1]);
    }
  }
}
