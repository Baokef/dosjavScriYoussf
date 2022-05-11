const objet = {
    name: "Bao",
    id: 1,
    age: 30,
    
    premium: false,
};
// for (const key in objet) {
//     console.log(key, objet[key]);
// }
console.log((objet.premium = true));
console.log();
for (const key in objet) {
    if (key === "premium") {
        objet[key] = true;
    }
    console.log(key, objet[key]);
}