class Hex {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return '0x' + this.value.toString(16).toUpperCase();
  }

  plus(number) {
    if (number.value) {
      number = this.value + number.value;
    } else if (typeof number == 'number') {
      number = this.value + number;
    }
    return new Hex(number);
  }

  minus(number) {
    if (number.value) {
      number =  this.value - number.value;
    } else if (typeof number == 'number') {
      number = this.value - number;
    }
    return new Hex(number);
  }

  parse(string) {
    return parseInt(string, 16);
  }
}