const myObject = {
    name: "Cfitech",
    id: 1,
    classes: {
        debutant: [1, 2, 3, 4, 5],
        intermediaire: [1, 2, 3, 4, 5],
        avance: [1, 2, 3, 4, 5],
    },
    adresse: {
        codePostal: 1081,
        commune: "koekelberg",
        ville: "Bruxelles",
        numéro: "63",
        rue: "Rue De L'Eglise Sainte-Anne",
    },
};

/* 
Pour afficher un des éléments de l'objet adresse de manière classique, il faut écrire
*/

console.log(myObject.adresse.rue);
console.log(myObject.classes.avance); // etc...

/*
Cela peut vite être répétitif, difficile à lire et très verbeux comme code, c'est pour ces deux raisons que
la déstructuration d'objet a été conçu
*/

/* 
Pour le même résultat, avec plus de lisibilité,
moins de code et surtout une vue des objets précis sélectionnés 
*/

const { adresse, classes } = myObject; // Syntax de destructuration d'objet
console.log(adresse.rue);
console.log(classes.avance);

/*
Cette manière de faire est incontournable en React, cela permet d'avoir une vue
d'ensemble des objets, states, valeurs utilisées dans un composant précis
*/