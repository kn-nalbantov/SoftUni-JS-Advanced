function solution() {
  const recipies = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  const ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  function restock(item, qty) {
    ingredients[item] += Number(qty);
    return 'Success';
  }

  function prepare(item, qty) {
    const remainingIng = {};

    for (let ing in recipies[item]) {
      const remaining = ingredients[ing] - recipies[item][ing] * Number(qty);
      if (remaining < 0) {
        return `Error: not enough ${ing} in stock`;
      } else {
        remainingIng[ing] = remaining;
      }
    }

    Object.assign(ingredients, remainingIng);
    return 'Success';
  }

  function report() {
    return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
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

// let manager = solution();
