let monTab = [1, 8, 9, 45, 5469, 78, 56, 85, 96, 106];
let max = monTab[0];
let taille = monTab.length;
let i;

for (i = 0; i < taille; i++) {
  if (monTab[i] > monTab[max]) max = i;
}

console.log("le max du tableau est :", monTab[max]);

/*let f = function (a, b) {
  return a > b;
};
function trierTab(monTab, f) {
  for (let j = 0; j < taille; j++) {
    // le tableau est trié de 0 à i-1
    for (let k = j + 1; k < taille; k++) {
      if ((f(monTab[k]), monTab[j])) {
        let temp = monTab[k];
        monTab[k] = monTab[j];
        monTab[j] = temp;
      }
    }
  }
  return 1;
}
trierTab(monTab, f);*/

// notre fonction de valuation f renvoie true ou false:
let f = function (a, b) {
  return a > b;
};
let tri = function (l, f) {
  for (let i = 0; i < l.length; i++) {
    // le tableau est trié de 0 à i-1
    // La boucle interne recherche le maximum
    // de i+1 à la fin du tableau.
    for (let j = i + 1; j < l.length; j++) {
      if (f(l[i], l[j])) {
        let temp = l[j];
        l[j] = l[i];
        l[i] = temp;
      }
    }
  }
  return l;
};
console.log(tri(monTab, f));
