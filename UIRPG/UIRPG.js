//initialisation des variables

//var assa

var assa = document.getElementById("assa");
var tourAssa = document.getElementById('assaHPM');
var assaHP = 50;
var assaMP = 10;
var assaArmor = 10;
var assaAttack = 10;
var mortAssa = false;  

//mage
var mage = document.getElementById("mage");
var tourMage = document.getElementById('mageHPM');
var mageHP = 40;
var mageMP = 20;
var mageArmor = 5;
var mageAttack = 15;
var mortMage = false;

//archer
var archer = document.getElementById("archer");
var tourArcher = document.getElementById('archerHPM');
var archerHP = 30;
var archerMP = 30;
var archerArmor = 10;
var archerAttack = 15;
var mortArcher = false;

//var musicien
var musicien = document.getElementById("musicien");
var tourMusicien = document.getElementById('musicienHPM');
var musicienHP = 40;
var musicienMP = 30;
var musicienArmor = 10;
var musicienAttack = 15;
var mortMusicien = false;

// Init var monstre
//var Santa
var santa = document.getElementById("santaImg");

var santaHP = 140;
var mortSanta = false;

//var Knutallux
var knutallux = document.getElementById("knutallux");
var knutalluxHP = 80;
var mortKnutallux = false;

//var KnutalluxDeux
var knutalluxDeux = document.getElementById("knutalluxDeux");
var knutalluxDeuxHP = 80;
var mortKnutalluxDeux = false;

//var combat
var ennemyTarget = "Louis";
var compteurMonstre = 0;
var monsterTarget = 0;

//Init var button
var attack = document.getElementById("button1");
var speciale = document.getElementById("button2");
var defense = document.getElementById("button3");


var j = 0;
function round() {
    console.log("je rentre dans la fonction")
    tourJoueur = true;
    switch ( true){
        
        case (tourJoueur == true):
            console.log("je rentre dans switch");
            var i = 0;
            switch (i){
                case 0:
                    console.log("assa");
                    i = i+1;
                    break;
                case 1:
                    console.log("mage");
                    i = i+1;
                    break;
                case 2:
                    console.log("musicien");
                    i = i+1;
                    break;
                case 3:
                    console.log("archer");
                    i = i+1;
                    break;
                default:
                    tourJoueur = false;
                    
            }
        break;
        
        case (tourJoueur == false):
            switch (j){
                case 0:
                    console.log("knutallux");
                    j = j+1;
                    break;
                case 1:
                    console.log("knutalluxDeux");
                    j = j+1;
                    break;
                case 2:
                    console.log("santa");
                    j = j+1;
                    break;
                default:
                    tourJoueur = true;
            }
        break;
        default:
            console.log("round finis")
            round()

    }
}


function afficherHP(id) {
    document.getElementById(id).style.visibility='visible'
  }
  
function cacherHP(id) {
    document.getElementById(id).style.visibility='hidden'
  }

function targetSelect(num){
    monstrecible = num;
    if(num ==0){
        console.log("santa")
    }
}


