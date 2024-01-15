//2.zadatak sa domaceg

const drugi = () => {
  const recenica = prompt("Unesite recenicu:");
  const recenicaV = recenica.toUpperCase();
  const recenicaM = recenica.toLowerCase();
  const recenicaZ = recenica.replace(/skola/gi, "fakultet");
  const srednjiIndex = recenica.length / 2;
  const prvaPolovina = recenica.slice(0, srednjiIndex).toUpperCase();
  const drugaPolovina = recenica.slice(srednjiIndex).toLowerCase();
  const recenicaPP = prvaPolovina.concat(drugaPolovina);
  return `${recenicaV}\n${recenicaM}\n${recenicaZ}\n${recenicaPP}`;
};
