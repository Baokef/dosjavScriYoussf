function Hello(salut, test) {
    return {
        salut,
        test,
    };
}
const instance = new Hello("bonjour", "salut");
console.log(instance);
// /*créer une fonction qui retourne un tableau composé de nombre de 1 a 10