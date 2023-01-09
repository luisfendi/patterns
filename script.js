class IteratorClass {
  constructor(data) {
    this.index = -1;
    this.data = data;
    this.done = false;
    this.checkDataType(data);
  }

  checkDataType(data) {
    if (Array.isArray(data)) {
      this.collectionLength = this.data.length - 1;
      this.collection = this.data;
      this.type = 'array';
    } else if (!Array.isArray(data) && typeof data == 'object') {
      this.collectionLength = Object.keys(this.data).length - 1;
      this.collection = Object.values(this.data);
      this.type = 'object';
    } else {
      throw new Error(`${this.constructor.name} получил data которую не может итерировать - ${typeof data}`)
    }
  }

  next() {
    if (this.index < this.collectionLength) {
      this.index++;
      return {
        key: Object.keys(this.data)[this.index],
        value: this.collection[this.index],
        done: false,
        index: this.index,
        type: this.type
      }
    } else {
      this.done = true;
      return {
        done: true,
        msg: 'достигнут конец коллекции',
        index: this.index,
        type: this.type
      };
    }
  }

  prev() {
    if (this.done) {
      this.done = false;
      this.index = this.collectionLength + 1;
    }
    this.index--;
    if (this.index > -1) {
      return {
        key: Object.keys(this.data)[this.index],
        value: this.collection[this.index],
        done: false,
        index: this.index,
        type: this.type
      };
    } else {
      this.index = -1;
      return {
        done: this.done,
        msg: 'достигнуто начало коллекции',
        index: this.index,
        type: this.type
      };
    }
  }
}

const arr = new IteratorClass([1,2,3,4,5,6]);
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())
console.log(arr.next())