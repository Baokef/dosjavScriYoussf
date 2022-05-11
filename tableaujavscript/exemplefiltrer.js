// const tab = [1, 2, 3, true, 4, 5, true];
// const tablefiltre = tab.filter((e) => e < 2);
// console.log("table ", tab);
// console.log("table filtrée ", tablefiltre);

// const table = [1, true, {}, "hello", 5, 6, 7];
// const tab = [];

// function tablefiltrer() {
//     for (i = 0; i <= table.length; i++) {
//         if (typeof table[i] === "number") console.log(table[i]);
//     }
// }
// tablefiltrer();

// function tablefiltrer() {
//     for (i = 0; i <= table.length; i++) {
//         if (typeof table[i] === "number") tab.push(table[i]);
//     }
//     console.log(tab);
// }
// tablefiltrer();
const table = [7, 9, 4, 6, 5, 8, 10, 1];
table.sort(function(a, b) {
    return b - a; //tri desçendant
});
console.log(table);

// nombres.sort(function (a, b) {
//   return a - b;//tri asçendant
// });
// console.log(nombres);

const podium = table.sort((a, b) => b - a).splice(0, 3);

console.log(podium);