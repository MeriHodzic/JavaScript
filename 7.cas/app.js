//ZA INTERAKCIJU SA KORISNIKOM KORISTIMO PROMPT METODU.

const fullName = prompt("Unesite vase ime i prezime");
console.log(fullName);

const age = prompt("Unesite broj godina");
console.log(age);

//Vrednost dobijena preko prompt metode je uvek tipa string
//taj string se moze prevesti u tip number na nekoliko nacina:

//1. Number(age)
const brojGodina = Number(age);
console.log(brojGodina);
console.log(typeof brojGodina);

// 2. +age
const brojGodina2 = +age;
console.log(brojGodina2);
console.log(typeof brojGodina2);

const visina = prompt("Unesite vasu visinu");
console.log(visina);

//isNaN()
//je metoda koja proverava da li je neka vrednost nekorektan broj (NaN)

console.log(isNaN("55")); //false
console.log(isNaN("5ewe5")); //true

if (brojGodina3 < 12) {
  console.log("vi ste decijeg doba");
} else if (brojGodina3 >= 12 && brojGodina3 < 18) {
  console.log("vi ste maloletni");
}

//1.
const broj = Number(promt("Unesite neki broj"));
if (broj < 0) {
  console.log("Broj je negativan");
} else if (broj === 0) {
  console.log("Broj je jednak nuli");
} else {
  console.log("Broj je pozitivan");
}
