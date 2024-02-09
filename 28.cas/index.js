// niz2.push("Ovo je string");
// niz2.pop();
// niz2.unshift("Ovo je kraj");
// niz2.shift();

//iterating arrays
// for(let i = 0; i < niz2.length; i++)
// const niz3 ={1, false, null, undefined, "", {}}

// for(let i = 0; i < niz3.length; i++){
//     const element = niz3[i]
//     console.log(element)
// }
// function isStringInArray(niz) {
//   for (let i = 0; i < niz.length; i++) {
//     if (typeof niz[i] === "string") {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(inStringInArray(niz2));
// console.log(inStringInArray(niz3));

// function isUndefinedInArray(niz) {
//   for (let i = 0; i < niz.length; i++) {
//     if (typeof niz[i] === "undefined") {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(isUndefinedInArray(niz3));

//matrix
// const nuliNiz = {
//     [1,2,3],
//      [4,5,6],
//       [7,8,9],
// }
// console.log(nuliNiz(1)(1))

// const multiNiz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(multiNiz[1][1]);
// console.log(multiNiz[0][0]);
// console.log(multiNiz[1][1]);
// for (let i = 0; i < multiNiz.length; i++) {
//   for (let j = 0; j < multiNiz[i].length; j++) {
//     console.log(multiNiz[i][j]);
//   }
// }

// function isStringInMatrix(matrix){}
// console.log(isStringInMatrix(muliNiz))


//arrays an objects
const users = [
    { name:"Suad", surname:"Suljovic"}
    { name:"Vahid", surname:"Konicanin"}
    { name:"Saladin", surname:"Hodzic"}
]
console.log(users[2].surname)

function findInArray(niz, property, valueOfProperty){
for(let i = 0; i < niz.length; i++)
const element = niz[i]
if(typeof niz[i] === "")
}
findInArray(users, "surname", "Suljovic")