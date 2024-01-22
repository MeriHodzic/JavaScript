var x;
x = 15;

let y;
y = 10;

const z = 5;

w = 20;
console.log(w);

//Hoisting predstavlja izvlacenje deklaracija na vrhu skripte kako bi one mogle koristiti.

prom = 5;
var prom;
// let prom;
// const prom
console.log(prom);

//Kasnije deklarisanje neke promenljive je moguce preko var keyword, dok preko let i const nije dozvoljeno.

const zbirCifara = (broj) => {
  const strBroj = broj.toString();
  let brojac = 0;
  for (let i = 0; i < strBroj.length; i++) {
    brojac += +strBroj[i];
  }
  return brojac;
};
console.log(zbirCifara(234));

function second(A, Z) {
  const B = A.replace(Z, "");
  return B;
}
console.log(second("Madagaskar", /a/g));
