//Zadatak:fudbalski teren
//fudbalski teren dimenzija dxs treba ograditi pravougaonom ogradom tako da je rastojanje stranica ograde
//tako da je rastojanje stranica ograde
//od linije terena r.Napisi program koji odredjuje duzinu ograde.
//Ulaz:u tri reda standardnog ulaza nalaze se tri cela broja:
// d - duzina terena u metrima (90 < d < 120)
// s - sirina terena u metrima (45 < s < 90)
// r - rastojanje ograde od terena u metrima (2 < r < 10)

const d = +prompt("Unesite duzinu terena u metrima:");
const s = +prompt("Unesite sirinu terena u metrima:");
const r = +prompt("Unesite rastojanje ograde:");

obimTerena = 2 * d + 2 * s;
obimOgrade = obimTerena + 8 * r;
