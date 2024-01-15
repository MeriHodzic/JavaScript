const recenica = "Danas pocinjemo rad sa stringovima";
const rec = "Demir";
console.log(recenica);
//Pomocu indeksa pristupamo nekom karakteru stringa.
//indeksiranje ide od 0.

console.log(recenica[0]);
console.log(recenica[4]);

console.log(recenica[34]);

//Koristimo length metodu za izracunavanje duzine stringa:
const duzinaRecenice = recenica.length;
console.log(duzinaRecenice);
console.log(recenica[duzinaRecenice - 1]);

for (let i = 0; i < rec.length; i++) {
  console.log(rec[i]);
}

//Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog.
//dok ako je neki karakter = "a" neka se ispise broj 5.
//a u slucaju da je karakter jednak "s" neka se ne ispise nista.
const recenica2 = prompt("Unesite recenicu:");
for (let i = 0; i < recenica2.length; i++) {
  if (recenica2[i] === "a") {
    console.log(5);
  } else if (recenica2[i] === "s") {
    continue;
  } else {
    console.log(recenica2[i]);
  }
}

//Metoda toLowerCase() pretvara ceo string u mala slova:
console.log("NEKI STRING ZA PRETVARANJE U MALA SLOVA.".toLowerCase());

//Metoda toUpperCase() pretvara ceo string u velika slova:
console.log("neki string za pretvaranje u velika slova".toUpperCase());

const recenica3 = "e ko ovo uradi on je mnogo dobar";
let recenica4 = "";
//Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom

for (let i = 0; i < recenica3.length; i++) {
  if (i === 0) {
    recenica4 += recenica3[i].toUpperCase();
  } else if (recenica3[i - 1] === " ") {
    recenica4 += recenica3[i].toUpperCase();
  } else {
    recenica4 += recenica3[i];
  }
}
console.log(recenica4.)



