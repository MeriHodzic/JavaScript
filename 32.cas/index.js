//class
//class synthetic sugar syntax, ess6
//prototype class syntax
//OOP and OOP 4 pilar: inheritance,

//class
class Auto {
  type;
  name;
  yearOFManufacture;
  price;
  constructor(type, name, yearOFManufacture, price) {
    this.type = type;
    this.name = name;
    this.yearOFManufacture = yearOFManufacture;
    this.price = price;
  }
  getPrice() {
    return "The price is ${this.price}euros";
  }
  priceInCents() {
    return "The price is ${this.price * 100}cents";
  }
  calculatePDV() {
    return "The price is ${this.price * 0,2}";
  }
}

const a1 = new Auto("BMW", "C1", 2012, 35000);
const a2 = new Auto("Mercedes", "B1", 2022, 25000);
const a3 = new Auto("Audi", "A1", 2014, 85000);
console.log(a1.calculatePDV());

//prototype class
function Auto2(name, price) {
  this.name = name;
  this.price = price;
}

Auto2.prototype.getPrice = function () {
  return this.price;
};
const b1 = new Auto2("BMW", 12000);
console.log(b1.getPrice());
console.log(b1);

//custom array method
Array.prototype.MyMap = function (callback) {
  const result = [];
  this.forEach((value, index, array) => {
    result.push(callback(value, index, array));
  });
  return result;
};
const arr = [1, 2, 3, 4].myMap((value) => {
  return value * 2;
});
console.log(arr);

//inheritance

class Mamel {
  name;
}
class Human extends Mamel {}
console.log(new Mamel(), new Human());

//implement myFilter on Array prototype
Array.prototype.MyFilter = function (callback) {
  const result = [];
  this.forEach((value, index, array) => {
    if (callback(value, index, array)) {
      result.push(value);
    }
  });
  return result;
};
const arr1 = [1, 2, 3, 4].MyFilter((n) => n % 2 == 0);
console.log(arr1);

// implement myReduce on array Prototype
// Array.prototype.MyReduce = function (callback, initValue) {
//   let result = initValue ? initValue;
//   this.forEach((value, index, array) => {
//     callback(result, value, index, array);
//   });
//   return result;
// };
