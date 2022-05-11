const objet = {
    name: "Bao",
    id: 1,
    age: 30,
    brand: {
        name: "audi",
        date: 2004,
        settings: {
            id: 1,
            time: 45,
        },
    },
    adresse: [{ name: "salut" }, { name: "hello" }],

    premium: false,
};
const { adresse } = objet;
console.log(adresse[0].name);