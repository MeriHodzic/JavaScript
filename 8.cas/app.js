//Switch naredbu koristimo kada zelimo kroz slucajeve pokriti tacne mogucne vrednosti
switch (5 - 3) {
  case 10:
    //kod koji se izvrsava ako je == 10
    break;
  case 5:
    //kod koji se izvrsava ako je == 5
    break;
  case 2:
    //kod koji se izvrsava ako je == 2
    break;
  default:
  //kod koji se izvrsava ako nisu zadovoljeni prethodni slucajevi
}

//break keyword stavljamo na kraju slucaja da se ne bi izvrsio kod od narednog slucaja koji nije zadovoljan.
//korisnik unosi broj:
//ako je uneo broj izmedju 12 i 15 (ukljucujuci oba) neka se ispise poruka:"uneli ste vrednostBroja"
//Defaultno:niste uneli broj iz trazenog opsega.

const broj = +prompt("Unesite broj izmedju 12 i 15");
switch (broj) {
  case 12:
  case 13:
  case 14:
  case 15:
    console.log("Uneli ste broj " + broj);
    break;
  default:
    console.log("Niste uneli broj iz trazenog opsega");
}

//Dani u nedelji:
//Napisi program koji ce traziti od korisnika da unese redni broj dana u nedelji (1 za ponedeljak, 2 za utorak,itd.) i ispisati ime tog dana.
const dan = +prompt("Unesite redni broj dana u nedelji");
switch (dan) {
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;

  case 5:
    console.log("Petak");
    break;
  case 6:
    console.log("Subota");
    break;
  case 7:
    console.log("Nedelja");
    break;
  default:
    console.log("Niste uneli dan");
}
