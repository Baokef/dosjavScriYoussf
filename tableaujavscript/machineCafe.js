let l = 4; /*lait*/
let s = 5; /*sucre*/
let c = 3; /*cafe*/
let k = 2; /*chocolat*/
let compteurl = 0;
let compteurs = 0;
let compteurC = 0;
let cmpteurk = 0;
function chocolat(l, s) {
  k--;
  compteurl++;
  compteurs++;

  console.log("votre chocolat est servi ");
}

function cafe(l, s) {
  c--;
  compteurl++;
  compteurs++;

  console.log("votre café est servi ");
  console.log("il vous reste : " + c + "  portion de café");
}

chocolat(1, 0);
console.log("il vous reste :   " + k + " portion de chocolat");

console.log("il vous reste : " + (l - compteurl) + " portion de lait");

cafe(1, 1);
console.log("il vous reste :   " + c + " portion de chocolat");
console.log("il vous reste : " + (l - compteurl) + " portion de lait");

console.log("il vous reste : " + (s - compteurs) + " portion de sucre");
