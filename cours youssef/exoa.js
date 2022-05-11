let note = [8, 5, 5, 8, 1, 3, 8, 34, 3, 8, 4, 5, 8, 3, 8, 0];

let a = 5;
let compteur = 0;
let score = 0;

function nbredeFois(note, a) {
  for (i = 0; i < note.length; i++) {
    if (note[i] == a) {
      compteur = compteur + 1;
    }
  }
  console.log("le compteur est à:", compteur);
}
nbredeFois(note, a);
function multiple(a) {
  for (i = 0; i < note.length; i++) {
    if (note[i] % a == 4 || note[i] / 2 == 17) score++;
  }
  console.log("le score est a :", score, "à zéro");
}
multiple(a);
