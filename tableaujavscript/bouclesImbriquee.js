let i, j, resultat;
function tblmultip() {
  for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      resultat = i * j;
      console.log(i + "*" + j + "=" + "\t");
    }
  }
  console.log();
}
tblmultip();
