// const salut = (name) => "salut a " + name; //fonction flechée

// function salut(nom) {
//     return "salut à " + nom;
// }
// let nom = "bao";
// console.log(salut(nom));
// const a = [1, 2, 3, 4, 5, 5, 6, "salut"];
// console.log(a.map((e) => e * 2));
// a.map((e) => console.log(typeof e !== "number" ? e : null));
const table = [1, 2, 3, "hello", 5];
//avec la methode map remplacer "hello" par 4
// if (table.map != String) {
//     table[3] = 4;
// }
// console.log(table);
console.log(table.map((e) => (typeof e != "string" ? e : 4)));