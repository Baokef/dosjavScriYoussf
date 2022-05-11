/*function person(penda, age, sexe, parents, travail, amis) {
    this.penda = penda;
    this.age = age;
    this.sexe = sexe;
    this.parents = parents;
    this.travail = travail;
    this.amis = amis;
}
var quadim = new person("quadim", 25, "m", "ainé", "javscripteur", []);
console.log(quadim.penda);*/

function voiture(numChassis, marque, modele, couleur) {
    this.numChassis = numChassis;
    this.marque = marque;
    this.modele = modele;
    this.couleur = couleur;
}

var voit1 = new voiture(5467, "rollsRoyce", "jumbo", "baam");
var voit2 = new voiture(5487, "rolls", "japoma", "xoray");
console.log(voit2.numChassis, voit2.marque, voit2.modele, voit2.couleur);
/*let maVoiture = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
};*/