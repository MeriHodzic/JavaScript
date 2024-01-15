// 1.nacin

for (let i = 1; i < 21; i++) {
  if (1 % 2 === 0) {
    console.log(i);
  }
}

//2.nacin
for(let i = 1; i < 21; 1 += 2){
    console.log(i)
}

// ispisati dvostruku vrednost prirodnih brojeva od 6 do 14


for(let i = 6;i < 15; i++){
    const doubleValue = 1*2;
    console.log(doubleValue)
}

for(let i = 6;i < 15; i++){
    console.log(i * 2)
}



//korisnik unosi dva broja na osnovu toga koji je broj manji,iteracija se vrsi od njega do veceg broja ispisuju se brojevi od manjeg ka vecem


const number =prompt ("Unesite dva broja")
for (let i = manjiBroj; i <= veciBroj; i++) {
            console.log(i);}

            const prviBroj =+prompt("Unesite prvi broj:")
            const drugiBroj =+prompt("Unesite drugi broj:")
            if (isNaN(prviBroj)|| isNaN(drugiBroj)){
                console.log("Niste uneli brojeve.");
            }else if (prviBroj ===drugiBroj){
                console.log("Uneli ste jednake brojeve")
            }else if(prviBroj > drugiBroj)
                for (let i =drugiBroj; i<=prviBroj; i++){
                    console.log(1);
                }
                



//Preko switch naredbe:
console.log(new Date().getDay());
//getDay()- daje vrednost 0-6
//switch (new Date().getDay())
//na osnovu vrednosti koju nam daje izraz iz switch naredbe,kroz case_ove i eventualno default ispisati poruku:
// "danas je 'radni dan'"
//"Ugodno provedite vikend"

switch (new Date().getDay()){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("danas je 'radni dan'")
        break;
        case 6:
        case 0:
            default:
            console.log ("ugodno provedite vikend")
}

//prebrojati i sabrati brojeve deljive sa 5 u intervaku od 1 do n
//sabrati brojeve od 1 do 10 i ispisati taj zbir

let zbir = 0
for(let i = 1;i<=10; i++)
{
    zbir +=i;
}
console.log(zbir);

//Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n
const n = +prompt("Unesite neku vrednost");
let saberi = 0
let brBr = 0
for(i = 1; i<n; i++){
if(i % 5 === 0){
    saberi+= i;
    brBr += 1;
}
}
console.log(brBr)
console.log(saberi);