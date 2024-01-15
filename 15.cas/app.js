//prebrojati koliko se puta u unetom stringu pojavljuje slovo "M"(i veliko i malo).
//npr.za string 'Mama ima momu',dobija se rezultat 5.

// const recenice = "Mama voli Memu"
// let brSl = 0
// for(let i = 0; i <= recenica.length -1; i++){
// if(recenica[i] === "m" || recenica[i] === "M")}{

// }

//zadatak. prebrojati koliko ima znakova koji su cifre u unetom stringu

const recenica = prompt("Unesite recenicu:");
let brCf = 0;
for (let i = 0; i < recenica.length; i++) {
  //   switch (recenica[i]) {
  //     case "0":
  //     case "1":
  //     case "2":
  //     case "3":
  //     case "4":
  //     case "5":
  //     case "6":
  //     case "7":
  //     case "8":
  //     case "9":
  //       brCf++;
  //       break;
  if (isNaN(recenica[i])) {
    brCf++;
  }
}
console.log(brCf);

//Napraviti novu recenicu koja ce imati isti tekst,ali bez razmaka.
const recenica2 = "Ovo sve da bude jedna rec?";

let recenica3 = "";
for (let i = 0; i < recenica2.length; i++) {
  if (recenica2[i] === " ") continue;
  else recenica3 += recenica3[i];
}
console.log(recenica3);

//Napraviti novu recenicu gde ce umesto slova"a" pisati "t" , dok ako se posle a nalazi slovo n pisace d umesto a
const originalnaRecenica = "Danas je lep dan";
let novaRecenica = ""
for(let i = 0; i < originalnaRecenica.length; i++){
    if(originalnaRecenica[i] === 'a' && originalnaRecenica(i+1) === 'n'){
        novaRecenica += "d"
    }else if (originalnaRecenica[i] = "a")
}


