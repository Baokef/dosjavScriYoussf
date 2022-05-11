const dataBase = [1, 2, 3, 4, 5];

/* 
!Destructive methods
!push() pop() shift() unshift()


*/
// Shift supprime le premier élément d'un tableau
const dataBaseSliced = dataBase.shift();

/*
 *Non-Destructive methods
 */
// const filteredDataBase = dataBase.filter(e => e < 3)

/*
? Afficher base de donnée à notre utilisateur
? Show the database to the user
 */

console.log("base de donnée", dataBase);
console.log("après méthode", filteredDataBase);
console.log("base de donnée", dataBase);