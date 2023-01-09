class BMW_1_Series {}

class BMW_M_Series {
  
}



function bmwFamilyfactory() {
  return new BMW_1_Series()
}
function bmwSportFactory() {
  return new BMW_M_Series()
}

// Abstract Factory
function bmwProducer(type) {
  switch (type) {
    case 'sport': return bmwSportFactory;
    case 'family': return bmwFamilyfactory;
    default: return null;
  }
}

const sport = bmwProducer('sport');
const family = bmwProducer('family');

console.log(sport())
console.log(family())