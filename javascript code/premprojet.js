// JavaScript source code
let y;
let discount = 0.21;
let somme = 0;
let tab = [121, 38, 25, 85, 54];
let x = Math.max(...tab);
console.log(x);
y = x * discount;
console.log(y);

let index = tab.indexOf(x);

if (index !== -1) {
    tab[index] = y;
}
console.log(tab);

for (let i = 0; i < tab.length; i++) {
    somme += tab[i];
}
console.log(Math.floor(somme));
