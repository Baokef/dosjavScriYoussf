let table = [];

function genererTab(min, max) {
    for (let i = min; i <= max; i++) {
        table.push(i);
    }
    return table;
}

// const myDiv = document.querySelector("div");
// myDiv.innerHTML += genererTab(4, 25) + "<br/>";

const monTableau = genererTab(4, 14);
document.querySelector("div").innerHTML = `<h1> ${
  table.length > 10 ? monTableau : "le tableau est trop petit!"
}</h1>`;