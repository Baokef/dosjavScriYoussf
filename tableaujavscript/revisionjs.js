// let a = 5;
// let b = 10;
// let c = a;
// a = b;
// b = c;
// console.log("a", a);
// console.log("b", b);
const tableau = [1, 2, 3, 4, 5, 64];
const deuxieme_tableau = [0, ...tableau, 6]; //spread operateur
// const deuxieme_tableau = [];
// const deuxieme_tableau = tableau;
// console.log(tableau);
// for (const i of tableau) deuxieme_tableau.push(i);
// console.log(deuxieme_tableau);
console.log(deuxieme_tableau.length);
console.log(deuxieme_tableau.slice(0, deuxieme_tableau.length)); //meilleure methode de clonage
