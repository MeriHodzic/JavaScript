//STRINGOVI SU IMMUTABLE VREDNOSTI

const recenica = "Danas je bio 'suncan' dan";
const recenica2 = 'Danas je bio "suncan" dan';

const recenica3 = 'Danas je bio "suncan" dan';
console.log(recenica3);

const recenica4 = "sta ako zelimo  da se nadje u tekstu?";
console.log(recenica4);

const recenica5 = "sta ako zelimo  da se nadje u tekstu?";

//postoje 3 metode za ekstraktovanje dela stringa:
//slice(start,end)
//start se ukljucuje,end se ne ukljucuje

const isecak = recenica4.slice(0, 3);
console.log(isecak);
console.log(recenica4.slice(8, recenica4.length)); //do kraja
console.log(recenica4.slice(8, recenica4.length)); // do kraja

console.log(recenica4.slice(-7));
//slice metoda prihvata negativne indekse

//substring(start,end)start se ukljucuje,end se ne ukljucuje
//substring metoda ne prihvata negativne indekse

console.log(recenica4.substring(0, 3));

//substr(start,length)
//drugi argument predstavlja duzinu isecka.
console.log(recenica4.substr(4, 10));
const rec = "rec";
console.log(rec.toUpperCase());
console.log(rec);
//concat() metoda za spajanje stringova

const ime = "Demir";
const prezime = "Miraljemovic";
console.log(ime + " " + prezime);

const imeIprezime = ime.concat(" ", prezime);
console.log(imeIprezime);

//trim() kosacica - brise razmake na krajevima
const email = " dzenan_kosuta@hotmail.com  "
console.log(email)
console.log(email.length)
console.log(email.trim())
console.log(email.trim().length)
