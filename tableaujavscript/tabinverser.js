let monTab = [1, 8, 9, 45, 5469, 78, 56, 85, 96, 106];

let tabInverse = [];
let max = 0;
let taille = monTab.length;
console.log(monTab.length);
/*monTab.sort(function (a, b) {
  return b - a;
});*/

for (let i = 0; i < taille; i++) {
  if (monTab[i] > max) max = monTab[i];
} /* int pos = 0;*/

console.log(monTab);
console.log("le max du tableau est :", max);
let pos = 0;
function Posmax(tab, taille) {
  for (let i = 0; i < tab.Length; i++) if (tab[i] > tab[pos]) pos = i;
  return pos;
}
let temp, maxpos;
function TriermonTab(monTab) {
  if (taille <= 1) return;
  else {
    max = Posmax(monTab, taille);
    temp = monTab[maxpos];
    monTab[maxpos] = monTab[taille - 1];
    monTab[taille - 1] = temp;
  }
}
console.log(TriermonTab(monTab));
/* function tableInverser() {
    for (let j = taille - 1; j >= 0; j--) {
      tabInverse[j] = monTab[taille - 1 - j];
    }
  }
}
tableInverser(monTab);
/*
if(taille<=1) return ;
else
{
   max =PosMax(Tab,taille);
   temp =Tab[MaxPos];
   Tab[MaxPos] = Tab[taille-1];
   Tab[taille-1]=temp;*/
/*var nombres = [4, 2, 5, 1, 3];
nombres.sort(function (a, b) {
  return a - b;
});
console.log(nombres);
[1, 2, 3, 4, 5];*/
