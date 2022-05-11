let jour = prompt("un chiffre: ");

switch (jour) {
  case 1:
    console.log("Aujourd’hui c’est Lundi !");
    break;
  case 2:
    console.log("Aujourd’hui c’est mardi");
    break;
  case 3:
    console.log("Aujourd’hui c’est mercredi !");
    break;
  case 4:
    console.log("Aujourd’hui c’est jeudi");
    break;
  case 5:
    console.log("Aujourd’hui c’est vendredi !");
    break;
  case 6:
    console.log("Aujourd’hui c’est samedi");
    break;
  case 7:
    console.log("Aujourd’hui c’est dimanche");
    break;
  default:
    console.log("entrez un autre chiffre compris entre 1 et 7");
    break;
}
