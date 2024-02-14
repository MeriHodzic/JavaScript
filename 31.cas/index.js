//array methods and es6
//sort,some,find,findIndex,join,concat,every

//sort
const arr = ["m", "n", "z", "f"];
const arr2 = [2, 3, 5, 6, 7, 22, 31, 7];
// arr.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (b > a) {
//     return -1;
//   }
//   return 0;
// });
arr2.sort((a, b) => a - b);
console.log(arr2);

const mockData = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    address: "123 Main St, Cityville",
  },
  {
    name: "Alice",
    surname: "Smith",
    age: 30,
    address: "456 Oak St, Townsville",
  },
  {
    name: "Bob",
    surname: "Johnson",
    age: 22,
    address: "789 Pine St, Villagetown",
  },
  {
    name: "Eva",
    surname: "Brown",
    age: 28,
    address: "101 Elm St, Hamletsville",
  },
];

mockData.sort((a, b) => a.age - b.age);
console.log(mockData);

mockData.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (b.name > a.name) {
    return -1;
  }
  return 0;
});
console.log(mockData);

//
const arr3 = [1, 6, 3, 4, 5, 7, "a", "b"];
const arr31 = arr3
  .filter((item) => {
    if (typeof item === "number") {
      return true;
    }
    return false;
  })
  .sort();
const arr32 = arr3
  .filter((item) => {
    if (typeof item === "string") {
      return true;
    }
    return false;
  })
  .sort();
console.log(arr31);
console.log(arr32);

//array.join, string.split
const str = "Hocu ovo da bude kebab case";
const arr5 = str.split("");
const str2 = arr5.join("-");
console.log(str2);

//Napravite funkciju koja uzima neku recenicu i pravi od nje kebab case

// function makeKebabCase(string) {
//   return string.join("-");

// }

// makeKebabCase("Hocu ovo da bude kebab case");

// const str3 = "Hocu ovo da bude kebab case";

// console.log(str3)

//find, findIndex

const arr6 = [1, 2, 3, 4, 5, 6];
const found = arr6.find((value) => {
  if (value === 3) return value;
});
console.log(found);

const found2 = arr6.findIndex((value) => {
  if (value === 3) return true;
});
console.log(found2);

//nadjite objekat u kome je ime jednako Eva

const mockData = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    address: "123 Main St, Cityville",
  },
  {
    name: "Alice",
    surname: "Smith",
    age: 30,
    address: "456 Oak St, Townsville",
  },
  {
    name: "Bob",
    surname: "Johnson",
    age: 22,
    address: "789 Pine St, Villagetown",
  },
  {
    name: "Eva",
    surname: "Brown",
    age: 28,
    address: "101 Elm St, Hamletsville",
  },
];
// const found3 = mockData.find((item) => {
//   if (item.name === "Eva") return true;
// });
// console.log(found3);

const found4 = mockData.findIndex((item) => {
  if (item.surname === "Smith") return true;
});
console.log(found4);

//every,some

const arr7 = [1, 3, 5, 7, 9, 2];
const check = arr7.every((value) => {
  if (value % 2 === 0) {
    return false;
  }
  return true;
});
console.log(check);

//some
const check2 = arr7.some((value) => {
  if (value % 2 === 0) {
    return true;
  }
  return false;
});

//proverite da li arr8 ima bar jedan element koji je string
const arr8 = ["1", 2, 3, 5, "6"];
const check3 = arr8.some((value) => {
  if (typeof value === "string") {
    return true;
  }
  return false;
});
console.log(check3);

const check4 = arr8.every((value) => {
  if (typeof value === "number") {
    return true;
  }
  return false;
});
console.log(check4);

//proveriti da li bar jedan korisnik iz mockdata stariji od 40 godina

const check5 = mockData.some((value) => {
  if (value.age > 40) {
    return true;
  }
  return false;
});

console.log(check5);
