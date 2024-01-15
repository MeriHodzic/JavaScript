//Funkcija je blok koda koji mozemo iznova koristiti,koji pokrece set instrukcija
//koristimo ga kako bi jedan
//jos jedan razlog zbog kojeg se koriste funkcije jeste to kako bismo mogli da kreiramo varijable,koje su function-scoped,a da te iste varijable nisu dostupne unutar global-scopa
const a = 1;
console.log(a);
function printHelloWorld() {
  console.log("Hello World");
}
printHelloWorld();

//deklaracija funkcije
function printHelloWorld1() {
  console.log("Ovo je deklaracija funkcija");
}
printHelloWorld1();

//expression funkcije
const printHelloWorld2 = function () {
  console.log("Ovo je expression funkcija");
};
printHelloWorld2();

//Arrow function
const printHelloWorld3 = () => {
  console.log("Ovo je arrov funkcija");
};
printHelloWorld3();
//Arrow funkcija se uglavnom koristi za ispisivanje manje ili jednog seta instrukcija
//Ako imamo kod koji se moze u jednoj liniji koda, za takav kod najvise koristimo Arrow funkcije

//Takodje,funkcije mogu prihvatati argumente
//broj argumenata moze biti razlicit,u odnosu na to koliko nam istih treba da bismo upotpunili nasu funkciju

//postoje 3 fraze,koje su sastavni deo funkcije a to su:
//1.parametar
//2.argument
//3.Return

console.log("Cao Merjem");
console.log("Cao Mirza");
console.log("Cao Mirjana");
console.log("Cao Marija");

//parametre unutar funkcije postavljamo u obicnim zagradama

function pozdrav(ime) {
  console.log("Cao " + ime);
}
pozdrav("Harise");

function brojac(broj1, broj2) {
  console.log(broj1, broj2);
}
brojac(6, 8);

//Return vraca vrednost koja se formirala unutar jedne funkcije
const nekiReturn = function (broj1, broj2) {
 let rezultat =  broj1 + broj2;
 return rezultat
};
console.log(nekiReturn)

