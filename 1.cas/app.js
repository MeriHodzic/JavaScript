naslov = document.getElementById("naslov");
naslov.innerHTML = "naslov ispisan preko JavaScripta";
naslov.style = "color:red; font-size:22px";

//  TIPOVI PODATAKA //
// DA BISMO ZNALI TIP PROMENLJIVE U JavaScriptu KORISTIMO TYPEOF OPERATOR.
// TIPOVI PODATAKA U JS SE DELE U DVE GRUPE:
// 1. PRIMITIVNI TIPOVI PODATAKA(VREDNOSNI)
//2. NEPRIMITIVNI TIPOVI PODATAKA(REFERENTNI )
//1.1.Stringovi - Niz karaktera koji je zapisan pod navodnicima.Obicnim ili duplim.
console.log("Ovo je nas prvi string");
console.log(typeof "Ovo je nas prvi string");

//1.2. number - predstavlja broj i on moze biti zapisan sa ili bez decimalnog zapisa.

console.log(25);
console.log(typeof 25);

//1.3 BigInt - Brojevi koji prelaze granice obicnih brojeva.
console.log(BigInt(12345654321));
console.log(typeof BigInt(12345654321));

//1.4. BOOLEAN - TRUE ILI FALSE -logicki entitet koji ima dve vrednosti true i false

console.log(true);
console.log(typeof true);

//1.5. Undefined - Promenljiva koja je definisana,ali joj nije dodeljena vrednost undefined i tip takodje undifined

var a;
console.log(a);
console.log(typeof a);

console.log(undefined);
console.log(typeof undefined);

//1.6 Null - Predstavlja nekorektnu vrednost ili vrednost koja ne postoji
console.log(null);
console.log(typeof null);

//1.7. Symbol - Tip podatka za pravljenje anonimnih i unikatnih vrednosti

b = Symbol("Mejrema");
console.log(b);
console.log(typeof b);

//PRIMITIVNI TIPOVI PODATAKA MOGU SKLADISTITI SAMO JEDNU VREDNOST

//2. NEPRIMITIVNI TIPOVI PODATAKA(REFERENTNI)
//ZA SKLADISTENJE VISE VREDNOSTI ILI KOMPLEKSNIH VREDNOSTI SE KORISTE NEPRIMITIVNI TIPOVI PODATAKA.
//SVAKA PROMENLJIVA KOJA NIJE PRIMITIVNOG TIPA JE TIPA OBJECT U JAVASCRIPTU
//OBJEKTI SE KORISTE ZA SKLADISTENJE NEKE KOLEKCIJE PODATAKA

//2.1. Array (niz) - predstavlja strukturu podataka za sladistenje vise vrednosti.
//elementi niza ne moraju biti istog tipa
niz = ["Symbol", 25, true];

//2.2. Object (objekat) - predstavlja strukturu podataka za skladistenje vise vrednosti.Objekti se zapisuju u key:value (name:value) parovima
Obj = {
  ime: "Demir",
  brojGodina: 18,
  punoletan: true,
};

//2.3. Set -   predstavlja strukturu podataka za skladistenje vise vrednosti.Duplikati nisu dozvoljeni.
set = new Set(["Kanita", 19, true]);
console.log(set);
console.log(typeof set);

//2.4. Map - predstavlja strukturu podataka za skladistenje vise vrednosti.Slicni su objektima.
nap = new Map([
  ["ime", "Kanita"],
  ["brojGodina", 19],
  ["punoletnost", true],
]);
