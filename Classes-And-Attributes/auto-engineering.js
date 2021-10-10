function carRegister(input) {
  const carCollection = {};

  for (let line of input) {
    let [brand, model, qty] = line.split(' | ');
    qty = Number(qty);

    if (carCollection.hasOwnProperty(brand)) {
      let modelExists = false;
      for (let c of carCollection[brand]) {
        if (c.hasOwnProperty(model)) {
          c[model] += qty;
          modelExists = true;
        }
      }
      if (!modelExists) {
        let car = {};
        car[model] = qty;
        carCollection[brand].push(car);
      }
    } else {
      carCollection[brand] = [];
      let car = {};
      car[model] = qty;
      carCollection[brand].push(car);
    }
  }

  let result = '';
  for (let c in carCollection) {
    result += `${c}\n`;
    for (let stuff of carCollection[c]) {
      for (let deeperStuff in stuff) {
        result += `###${deeperStuff} -> ${stuff[deeperStuff]}\n`;
      }
    }
  }
  console.log(result);
}
