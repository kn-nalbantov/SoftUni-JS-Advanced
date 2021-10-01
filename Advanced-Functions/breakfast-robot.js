function solution() { //UNFINISHED
  const recipies = {
    apple: { carb: 2 },
    lemonade: { carb: 10, flavour: 20}
  };

  const ingredients = {
    protein: 0,
    carb: 0,
    fat: 0,
    flavour: 0,
  };

  function restock(item, qty) {
    ingredients[item] += Number(qty);
    return 'Success';
  }

  function prepare(item, qty) {
    //TODO
    return {
      item,
      qty,
    };
  }

  function report() {
    return `protein=${ingredients.protein} carbohydrate=${ingredients.carb} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
  }

  function control(str) {
    const [commannd, item, qty] = str.split(' ');

    switch (commannd) {
      case 'restock':
        return restock(item, qty);
      case 'prepare':
        return prepare(item, qty);
      case 'report':
        return report();
    }
  }

  return control;
}

let manager = solution();

console.log('----');
console.log(manager('report'));
console.log('----');

console.log(manager('restock fat 50'));
console.log(manager('report'));

console.log(manager('prepare lemonade 4'));
