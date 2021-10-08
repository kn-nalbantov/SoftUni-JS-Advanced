class List {
  constructor() {
    this.nums = [];
    this.size = 0;
  }

  add(num) {
    this.nums.push(num);
    this.size++;
    this.nums.sort((a, b) => a - b);
  }

  remove(index) {
    if (index < 0 || index > this.nums.length) {
      throw new RangeError('Invalid index');
    }
    this.size--;
    this.nums.splice(index, 1);
  }

  get(index) {
    if (index < 0 || index > this.nums.length) {
      throw new RangeError('Invalid index');
    }
    return this.nums[index];
  }
}

let myList = new List();

for (let i = 0; i < 5; i++) {
  myList.add(i);
}

myList.remove(0);
console.log(myList.size);
