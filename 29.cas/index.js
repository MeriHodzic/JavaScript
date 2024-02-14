//array function,es6
//map,filter

//Es6 or ECMAScript
//let,const,arrow function,array methods: map,filter,reduce,...
const arr = [1, 2, 3, 4, 5, 6];

const arr2 = arr.map((value, index, array) => {
  console.log(value, index, array);
  return "This is number $(value),with index $(index)";
});
console.llog(arr2);
//da napravite novi array sa elemntima arraya arr: arr element * 2

const arr3 = arr.map((value) => {
  return value * 2;
});
console.log(arr3);

const arr4 = arr.map((value) => {
  if (value % 2 == 0) {
    return undefined;
  } else {
    return value;
  }
});
console.log(arr4);

const arr5 = arr.map((value) => {
  if (value % 2 !== 0) {
    return value * value;
  } else {
    return value;
  }
});
console.log(arr5);

const arr6 = "This is an array created from a string".split();
console.log(arr6);

const arr7 = arr6.map((value) => value.toUpperCase);
console.log(arr7);

const arr8 = arr.filter((value) => {
  if (value % 2 == 0) {
    return true;
  }
  return false;
});
console.log(arr8);

const arr9 = arr6.filter((value) => {
  return !value.includes("a");
});
console.log(arr9);

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

const userNames = mockData.map((value) => {
  return value.name;
});
console.log(userNames);

const userNamesSurname = mockData.map((value) => {
  return value.name + " " + value.surname;
});
console.log(userNamesSurname);

const userAge = mockData.map((value) => {
  return value.age > 24;
});
console.log(userAge);

const user = mockData.filter((value) => {
 switch(value.name[0].toLowerCase){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        return true;
        break;
    default
    return false;
}
});
console.log(user);


