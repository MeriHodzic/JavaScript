//Ekstraktovanje karaktera mozemo odraditi na 3 razlicita nacina:

//1. charAt(position)
//2.charCodeAt(position)
//3.pristupanje pomocu[]

console.log(1);

const recenica = "Jos max 10 dana";
console.log(recenica.charAt(5));
console.log(recenica.charCodeAt(5));
console.log(recenica[5]);
//ako karakter sa odredjenom pozicijom ne postoji charAt vraca prazan string "", dok string[*] vraca undefined
//Postoji nekoliko search metoda u JavaScriotu:
//indexOf()metoda vraca index (poziciju) poslatog ARGUMENTA.
console.log(recenica.indexOf("max"));
//Ako trazena vrednost ne postoji pozicija koju dobijamo iznosi -1.
console.log(recenica.indexOf("skola"));

//indexOf metoda prihvata drugi argument.On predstavlja startnu poziciju za trazenje odredjene vrednosti.
console.log(recenica.indexOf("max", 7));
console.log(recenica.indexOf("a", 7));

//lastindexOf()metoda vraca poslednju poziciju poslatog argumenta.
console.log(recenica.lastIndexOf("a"));

//search() metoda vraca index (poziciju) poslatog argumenta.
console.log(recenica.search("max"));
console.log(recenica.search("1"));
//drugi argument kod search metode nema smisla.
console.log(recenica.indexOf("max", 7));
