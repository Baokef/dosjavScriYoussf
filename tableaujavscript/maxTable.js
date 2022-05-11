/*const monTab = [1, 8, 9, 45, 5469, 78, 56, 85, 96, 106];
let max = monTab[0];
let taille = monTab.length;

for (let i = 0; i < taille; i++) {
  /* if (monTab[i] > max) monTab[i] = max;

  if (monTab[i] > monTab[max]) max = i;
  console.log(monTab[max]);
}

console.log("le max du tableau est :", monTab[max]);
/*
let  Taille = Tab.Length;
int[] Tabinverser = new int[Taille];
for(int i = Taille-1;i>=0;i--)
{
   Tabinverser[i]=Tab[Taille-1-i] ;
}
return Tabinverser;
Console.WriteLine();

for (let i = taille - 1; i >= 0; i--) {
  Tabinverser[i] = monTab[taille - 1 - i];
}
console.log(Tabinverser);*/
/*
Parcourir le tableau puis ;
Trouver le clown dans le tableau ci-dessous ;
retourner "Clown trouvé"
*/

/*const emojiTable = ["👽", "👺", "🤡", "🥶", "😡", "🤯", "🤓"];
let clowntrouvé = "🤡";
longueur = emojiTable.length;
for (let i = 0; i < longueur; i++) {
  if ((emojiTable[i] = "🤡"));
}
console.log("je l'ai retrouvé:", clowntrouvé);*/

/*n = 21547896;
if ((n & 1) == 1) console.log("il est impair");
else console.log("il est pair");*/
/*let x;
function somdesDigits(nombre) {
  let str = nombre.toString();
  let som = 0;

  for (let i = 0; i < str.length; i++) {
    som += parseInt(str.charAt(i), 10);

    console.log(+som);
  }

  return som;
}
x = console.log("x =  " + somdesDigits(121));*/
function pairOuImpair(nombre) {
  let str = nombre.toString();
  let som = 0;

  for (let i = 0; i < str.length; i++) {
    som += parseInt(str.charAt(i), 10);
  }

  return som % 2 === 0 ? "pair" : "impair";
}

console.log(pairOuImpair(41));
/*
function oddishOrEvenish(number) {
  let splitedNumbers = number.toString().split("", 2);
  let sum = 0;

  for (let i = 0; i < splitedNumbers.length; i++) {
    sum += parseInt(splitedNumbers[i]);
  }

  return sum % 2 === 0 ? "pair" : "impair";
}

console.log(oddishOrEvenish(16));*/
