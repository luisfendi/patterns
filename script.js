class BMW {
  constructor(model, propA, propB) {
    this.model = model;
    this.propA = propA;
    this.propB = propB;
  }
}

class BMWfactory {
  create(model) {
    switch (model) {
      case 'X1':
        return new BMW(model, 1, 2)
        break;
      case 'X2':
        return new BMW(model, 3, 4)
        break;
      case 'X3':
        return new BMW(model, 4, 5)
        break;
    }
  }
}

const factory = new BMWfactory;
const x1 = factory.create('X1');
const x2 = factory.create('X2');
console.log(x1)
console.log(x2)