function lowestPrice(input) {
  let catalogue = {};

  for (let line of input) {
    let [town, product, price] = line.split(' | ');
    price = Number(price);

    if (!catalogue[product]) {
      catalogue[product] = {};
    }

    catalogue[product][town] = price;
  }

  for (let product in catalogue) {
    let sorted = Object.entries(catalogue[product]).sort((a, b) => a[1] - b[1]);
    console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
  }
}
