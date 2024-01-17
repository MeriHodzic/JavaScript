// Domaci zadaci:
// 1.	Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. za string 'Pera ima devojku' i N=6, dobija se 'Pera i'. Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.

// 2.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.`

const izdvojitiNznakova = (str, N) => {
  if (N >= str.length) {
    return str;
  } else {
    return str.substr(0, N);
  }
};
let string = "Pera ima devojku";
let rezultat = izdvojitiNznakova(string, 60);
console.log(rezultat);

const izdvojitiNznakovaDesneStrane = (str, N) => {
  if (N >= str.length) {
    return str;
  } else {
    return str.slice(-N);
  }
};
let stringDrugi = "Pera ima devojku";
let rezultatDrugi = izdvojitiNznakovaDesneStrane(string, 5);
console.log(rezultatDrugi);
