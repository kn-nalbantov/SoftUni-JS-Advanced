class ChristmasDinner {
  constructor(budget) {
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = {};
  }

  get budget() {
    return this._budget;
  }

  set budget(value) {
    if (value < 0) {
      throw new Error('The budget cannot be a negative number');
    } else {
      this._budget = value;
    }
  }

  shopping(productArr) {
    let [product, price] = productArr;
    if (price <= this.budget) {
      this.products.push(product);
      this.budget -= Number(price);
      return `You have successfully bought ${product}!`;
    } else {
      throw new Error('Not enough money to buy this product');
    }
  }

  recipes(recipeObj) {
    let { recipeName, productsList } = recipeObj;
    let includesIngredients = true;

    for (let p of productsList) {
      if (!this.products.includes(p)) {
        includesIngredients = false;
      }
    }

    if (includesIngredients) {
      let recipe = {
        recipeName,
        productsList,
      };
      this.dishes.push(recipe);
      return `${recipeName} has been successfully cooked!`;
    } else {
      throw new Error('We do not have this product');
    }
  }

  inviteGuests(name, dish) {
    let dishExists = false;
    for (let d of this.dishes) {
      if (d.recipeName == dish) {
        dishExists = true;
      }
    }
    if (dishExists) {
      if (this.guests.hasOwnProperty(name)) {
        throw new Error('This guest has already been invited');
      } else {
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
      }
    } else {
      throw new Error('We do not have this dish');
    }
  }

  showAttendance() {
    let result = '';
    for (let guest in this.guests) {
      let dish = this.guests[guest];
      let products = [];
      for (let d of this.dishes) {
        if (d.recipeName == dish) {
            products = d.productsList;
        }
      }
      result += `${guest} will eat ${dish}, which consists of ${products.join(', ')}\n`;
    }
    return result.trim();
  }

}