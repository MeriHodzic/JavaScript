//Ispisati brojeve od 1 do 10 u konzoli jedan ispod drugog:
//1.nacin
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//2.nacin
//Za iteraciju kroz neki objekat (niz,karaktere stringa,...)
//u JavaScriptu koristimo petju.
//Postoje 3 petlje u JS

//1. for petlja:
//for (statment1; statment2; statment3) {
//kod koji se izvrsava u svakoj iteraciji}
//statment1 - izvrsava se samo na pocetku i predstavlja definisanje iteratora.

//statment2 - Granicu do koje ce se petlja izvrsavati

//statment3 - Promena vrednosti iteratora koja se desava nakon svake iteracije.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
