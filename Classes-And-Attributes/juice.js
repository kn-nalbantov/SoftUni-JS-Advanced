function juiceBottling(input) {
  const inOrderOfProduction = {};
  class Juice {
    constructor(flavor, qty) {
      this.flavor = flavor;
      this.qty = qty;
      this.bottles = 0;
    }

    addQty(qty) {
      this.qty += qty;
    }

    produceBottle() {
      if (this.qty >= 1000) {
        let numOfBottles = Math.floor(this.qty / 1000);
        this.bottles += numOfBottles;
        this.qty -= numOfBottles * 1000;
        if (inOrderOfProduction.hasOwnProperty(this.flavor)) {
          inOrderOfProduction[this.flavor] += numOfBottles;
        } else {
          inOrderOfProduction[this.flavor] = numOfBottles;
        }
      }
    }
  }

  const juiceCollection = [];
  for (let line of input) {
    const [flavor, qty] = line.split(' => ');
    let hasFlavor = false;
    for (let j of juiceCollection) {
      if (j.flavor == flavor) {
        j.addQty(Number(qty));
        j.produceBottle();
        hasFlavor = true;
      }
    }
    if (!hasFlavor) {
      let juice = new Juice(flavor, Number(qty));
      juiceCollection.push(juice);
      juice.produceBottle();
    }
  }

  for (let j in inOrderOfProduction) {
      console.log(`${j} => ${inOrderOfProduction[j]}`);
  }

}
