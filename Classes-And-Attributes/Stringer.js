class Stringer {
  constructor(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  increase(length) {
    this.innerLength += length;
  }

  decrease(length) {
    this.innerLength -= length;
    if (this.innerLength <= 0) {
      this.innerLength = 0;
    }
  }

  toString() {
    return this.innerLength < this.innerString.length
      ? this.innerString.substring(0, this.innerLength).concat('...')
      : this.innerString.substring(0, this.innerLength);
  }
}