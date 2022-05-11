// function getRandomArbitrary(min, max) {
//     for (var i = 0; i < 10; i++) return Math.random() * (max - min) + min;
//     var usedNums = [];
//     console.log(usedNums.push(x));
// }
// var x = console.log(Math.floor(getRandomArbitrary(1, 10)));
// var tabNums = [];
// console.log(tabNums.push(x));
const myTable = [];
// includes()
let compteur = 0;
while (myTable.length < 10) {
    compteur++;
    // let randomNumber = Math.round(Math.random() * 10);
    let randomNumber = Math.round(Math.random() * 10);
    while (myTable.includes(randomNumber) === false) {
        myTable.push(randomNumber);
    }
}
console.log(myTable, compteur);

// const myTable = [];
// for (let i = 0; i < 10; i++);
// let randomNumber = Math.round(Math.random() * 10);
// console.log(randomNumber);

// var myArray = [];
// var rand = Math.floor(Math.random() * myArray.length);
// var rValue = myArray[rand];
// console.log(rValue);