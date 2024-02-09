//Racunanje realnih brojeva nije uvek tacno u JavaScriptu.

const x = 0.3;
const y = 0.4;
console.log(x + y);

console.log(5 + 5);
console.log(5 + "5");
console.log(5 - "5");
console.log(5 / "5");
console.log(5 / "5a");

//Infinity (-Infinity) je JavaScript vrednost koja je veca od najveceg broja u JS (koja je manja od najmanjeg broja), odnosno beskonacnost

console.log(5 / 0);
console.log(-5 / 0);

//Hexadecimalni brojevi u JS se interpretiraju sa prefiksom 0x

const br = 0xff;
const br2 = 0xab;
console.log(br);
console.log(br2);
// const white (255, 255, 255)
// const white = #ffffff
// console.log(white);
//Brojeve mozemo definisati i preko new keyword
let z = new Number(0.3);
console.log(z);

const protectEmail = (email) => {
  const _index = email.indexOf("_");
  const dotIndex = email.indexOf(".");
  const cutStartIndex = _index === -1 ? dotIndex : _index;
  const etIndex = email.indexOf("@");
  const cut = email.slice(cutStartIndex, etIndex);
  newEmail = email.replace(cut, "...");
  return newEmail;
};

console.log(5 + 5);
console.log(5 + "5");
console.log(5 - "5");
console.log(5 / "5");
console.log(5 / "5a");
