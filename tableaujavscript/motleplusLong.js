const myTable = [
    "salut",
    "hello",
    "batman",
    "anticonstituellement",
    "fors",
    "pokemon",
];

function motPlusLong(myTable) {
    let lePlusLong = "";

    for (let i = 0; i < myTable.length; i++) {
        if (myTable[i].length > lePlusLong.length) {
            lePlusLong = myTable[i];
        }
    }
    return lePlusLong;
}
console.log(motPlusLong(myTable));