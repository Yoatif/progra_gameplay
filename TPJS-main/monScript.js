var maDiv = document.getElementById("maDiv");
var valeurResultat = document.getElementById("valeurResultat");
var afficheAction = document.getElementById("afficheAction");
var valeurAjout = 10;


maDiv.onclick = function() {
    valeurResultat.innerHTML = valeurResultat.innerHTML+valeurAjout;
    afficheAction.innerHTML = "J'ai ajouté 10 !";
}
// Exercice : débuggez ce script :)
