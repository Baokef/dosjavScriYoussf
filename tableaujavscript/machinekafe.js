let lait = 4; /*lait*/
let sucre = 5; /*sucre*/
let choc = 3; /*cafe*/
let caf = 2;
let compteurlait = 0;
let compteursucre = 0;

function cafe(l, s, chocolat) {
  if (chocolat != 0) {
    {
      choc = choc - chocolat;
    }
    if (l == 1) {
      compteurlait++;
    }
    if (s == 1) {
      compteursucre++;
    }
  } else {
    {
      caf = caf - 1;
    }
    if (l == 1) {
      compteurlait++;
    }
    if (s == 1) {
      compteursucre++;
    }
    if (caf == 0) {
      console.log("veuillez recharger en café ");
    }

    if (choc == 0) {
      console.log("veuillez recharger en chocolat");
    }
  }
}
cafe(1, 0, 1);
console.log("portion de chocolat restant :  " + choc);
/*console.log("il vous reste : " + compteurlait + " portion de lait");*/
cafe(1, 1, 0);
/*console.log("portion de cafe restant :  " + caf + " portions");*/
cafe(0, 1, 0);
//console.log("portion de cafe restant :  " + caf + " portions");*/

//console.log("votre chocolat est servi ");
/*console.log("portion de cafe restant :  " + caf + " portions");*/
//cafe(0, 1, 1);
//console.log("portion de chocolat restant : " + choc);
//cafe(1, 0, 1);
console.log("il vous reste : " + (lait - compteurlait) + " portions de lait.");
console.log(
  "il vous reste : " + (sucre - compteursucre) + "  portions de sucre"
);
