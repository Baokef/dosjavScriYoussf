// username = "";

// function mdp() {
//     if ((input.value = "salut")) {
//         console.log("vous étes connecté");
//     } else {
//         console.log("mauvais username");
//     }
// }
// const mdp = mdp();
const button = document.querySelector("button");
const input = document.querySelector("input");
const mydiv = document.querySelector("div");

button.addEventListener("click", () => {
    // la logique pour tester l'input
    if (input.value === "salut") {
        mydiv.innerHTML = "vous étes connecté";
    } else {
        mydiv.innerHTML = "accés refusé";
    }
});