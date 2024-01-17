//domaci

// 1.Sva velika slova u stringu treba svesti na mala slova. npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'.Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.

const toLower = (recenica) => recenica.toLowerCase();
console.log(toLower("KOmniNACija VELIkih i MALIH slova"));

//2.
function lastIndex(str) {
  lastIndex = str.lastIndexOf(" ");

  return lastIndex;
}
console.log(lastIndex("Pera ima devojku"));

//3.

const duzinaPrveReci = (str) => str.indexOf(" ");
console.log(duzinaPrveReci("Danas smo bas tihi"));

//4.
const firstAndLast = (A) => {
    let B = ""
const firstword = A.slice(0, A.indexOF(" "));
const lastWord = A.slice(A.lastIndexOf(" "));
B+=  `${firstWord} ${lastWord};
return B;
};
console.log(firstAndLast("Svuda podji, kuci dodji"))