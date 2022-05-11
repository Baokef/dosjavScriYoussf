/*const montre = {
  name: "HUAWEI WATCH GT  2",
  taille: "45 mm",
  tailleDeLecran: "1.39 pouces",
};
for (const key in montre) {
  console.log(key, montre[key]);
}
*/
let x = 0;
let compteur = 0;
let score = 0;
let carteJoueur = 5;

for (let i = 0; i < 10; i++) {
  x = Math.floor(Math.random() * 20);
  if (x < carteJoueur) {
    /*console.log("joueur gagne");*/
    compteur++;
  } else {
    /* console.log("joueur perd");*/
    score++;
  }
}
console.log("il a gagné : " + compteur + "fois");
console.log("il a perdu : " + score + "fois");
/* let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result*/
