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

// var KnutalluxTrois
var knutalluxTrois = document.getElementById("knutalluxTrois");
var knutalluxTroisHP = 80;
var mortKnutalluxTrois = false;

//var combat
var ennemyTarget = "santa";
var compteurMonstre = 0;
var compteurJoueur = 0;
var monsterTarget = 0;
var nbTour = 0;

//Init var button
var attaque = document.getElementById("button1");
var speciale = document.getElementById("button2");
var defense = document.getElementById("button3");


function round() {
    console.log("je rentre dans la fonction")
    
            
    switch (compteurJoueur){
        case 0:
            console.log("assa");
            document.getElementById('assaHPM').style.color='black';
            document.getElementById('archerHPM').style.color='white';
            if (assaHP <= 0) {
                document.getElementById("combatLog").innerHTML = "L'assasin est mort !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }
            else if (assaHP > 0){
   
            }
            else {
                document.getElementById("combatLog").innerHTML = "L'assasin ne peut pas attaquer ce tour !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }

            break;
        case 1:
            console.log("mage");
            document.getElementById('mageHPM').style.color='black';
            document.getElementById('assaHPM').style.color='white';
            if (mageHP <= 0) {
                document.getElementById("combatLog").innerHTML = "Le mage est mort !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }
            else {
                document.getElementById("combatLog").innerHTML = "Le mage ne peut pas attaquer ce tour !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }

            break;
        case 2:
            console.log("musicien");
            document.getElementById('musicienHPM').style.color='black';
            document.getElementById('mageHPM').style.color='white';
            if (musicienHP <= 0) {
                document.getElementById("combatLog").innerHTML = "Le musicien est mort !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }
            else {
                document.getElementById("combatLog").innerHTML = "Le musicien ne peut pas attaquer ce tour !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }

            break;
        case 3:
            console.log("archer");
            document.getElementById('archerHPM').style.color='black';
            document.getElementById('musicienHPM').style.color='white';
            if (archerHP <= 0) {
                document.getElementById("combatLog").innerHTML = "L'archer est mort !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }
            else {
                document.getElementById("combatLog").innerHTML = "L'archer ne peut pas attaquer ce tour !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }

            break;
                
        case 4:
            console.log("knutallux");
            if (knutalluxHP <= 0){
                console.log("est mort");
            }

            counterPlayerIncrement();
                

            break;
        case 5:
            console.log("knutalluxDeux");
            if (knutalluxDeuxHP <= 0){
                console.log("est mort");
            }

            counterPlayerIncrement();
            
            break;
        case 6:
            console.log("knutalluxTrois");
            if (knutalluxTroisHP <= 0){
                console.log("est mort")
            }
            counterPlayerIncrement(); 
            break;
        case 7:
            console.log("santa");
            if (santaHP <=0){
            }
            counterPlayerIncrement();
        default:
            tourJoueur = true;
    }


}


function counterPlayerIncrement() {
    compteurJoueur += 1;
    returnToStartingState()
}

function returnToStartingState() {
    if (compteurJoueur == 8) {
        nbTour++;
        compteurJoueur = 0;
    }
    document.getElementById("combatLog").innerHTML = "C'est le tour "+ nbTour + " !<br> <input type='button' onclick='round()' value='NEXT'>";
}

function afficherHP(id) {
    document.getElementById(id).style.visibility='visible'
  }
  
function cacherHP(id) {
    document.getElementById(id).style.visibility='hidden'
  }

function targetSelect(num){
    monstreCible = num;
    switch(num){
        case 0:
        console.log("santa");
        document.getElementById("santaButton").style.color='red';
        document.getElementById("knutalluxButton").style.color='black';
        document.getElementById("knutalluxDeuxButton").style.color='black';
        document.getElementById("knutalluxTroisButton").style.color ='black';
        
            
    }
    
    if(num ==0){
        console.log("santa");
        document.getElementById("santaButton").style.color='red';
        document.getElementById("knutalluxButton").style.color='black';
        document.getElementById("knutalluxDeuxButton").style.color='black';
        document.getElementById("knutalluxTroisButton").style.color ='black';
    }
    else if (num == 1){
        console.log("knutallux");
        document.getElementById("santaButton").style.color='black';
        document.getElementById("knutalluxButton").style.color='red';
        document.getElementById("knutalluxDeuxButton").style.color='black';
        document.getElementById("knutalluxTroisButton").style.color ='black';
    }
    else if (num == 2){
        console.log("knutalluxDeux");
        document.getElementById("santaButton").style.color='black';
        document.getElementById("knutalluxButton").style.color='black';
        document.getElementById("knutalluxDeuxButton").style.color='red';
        document.getElementById("knutalluxTroisButton").style.color ='black';
    }
    else{
        console.log("knutalluxTrois");
        nommonstreCible = "knutalluxTrois";
        document.getElementById("santaButton").style.color='black';
        document.getElementById("knutalluxButton").style.color='black';
        document.getElementById("knutalluxDeuxButton").style.color='black';
        document.getElementById("knutalluxTroisButton").style.color='red';
    }


}

/*function attaque(){
    monstreCible = num;
    switch(compteurJoueur){
        case 0:
            console.log("attaque assa")
            switch(monstreCible){
                case 0:
                    console.log("assa attaque santa");
                    santaHP -= assaAttack;
                    updateHPM()
                    break;
                case 1:
                    console.log("assa attaque knutallux");
                    knutalluxHP -= assaAttack;
                    updateHPM()
                    break;
                case 2:
                    console.log("assa attaque knutalluxDeux");
                    knutalluxDeuxHP -= assaAttack;
                    updateHPM()
                    break;
                case 3:
                    console.log("assa attaque knutalluxTrois");
                    knutalluxTroisHP -= assaAttack;
                    updateHPM()
                    break;
                default:
                }
        case 1:
            switch(monstreCible){
                case 0:
                    console.log("mage attaque santa");
                    santaHP -= mageAttack;
                    updateHPM()
                    break;
                case 1:
                    console.log("mage attaque knutallux");
                    knutalluxHP -= mageAttack;
                    updateHPM()
                    break;
                case 2:
                    console.log("mage attaque knutalluxDeux");
                    knutalluxDeuxHP -= mageAttack;
                    updateHPM()
                    break;
                case 3:
                    console.log("mage attaque knutalluxTrois");
                    knutalluxTroisHP -= mageAttack;
                    updateHPM()
                    break;
                default:
            }
        case 2:
            switch(monstreCible){
                case 0:
                    console.log("musicien attaque santa");
                    santaHP -= musicienAttack;
                    updateHPM()
                    break;
                case 1:
                    console.log("musicien attaque knutallux");
                    knutalluxHP -= musicienAttack;
                    updateHPM()
                    break;
                case 2:
                    console.log("musicien attaque knutalluxDeux");
                    knutalluxDeuxHP -= musicienAttack;
                    updateHPM()
                    break;
                case 3:
                    console.log("musicien attaque knutalluxTrois");
                    knutalluxTroisHP -= musicienAttack;
                    updateHPM()
                    break;
                default:
            }
        case 3:
            switch(monstreCible){
                case 0:
                    console.log("archer attaque santa");
                    santaHP -= archerAttack;
                    updateHPM()
                    break;
                case 1:
                    console.log("archer attaque knutallux");
                    knutalluxHP -= archerAttack;
                    updateHPM()
                    break;
                case 2:
                    console.log("archer attaque knutalluxDeux");
                    knutalluxDeuxHP -= archerAttack;
                    updateHPM()
                    break;
                case 3:
                    console.log("archer attaque knutalluxTrois");
                    knutalluxTroisHP -= archerAttack;
                    updateHPM()
                    break;
                default:
            }
            

    }
}*/


function updateHPM(){
    document.getElementById("assaHPM").innerHTML = "PV : " + assaHP + "/50<br>PM : " /*+ assaPM + "/10"*/;
    document.getElementById("mageHPM").innerHTML = "PV : " + mageHP + "/40 <br>PM : " /*+ magePM + "/20"*/;
    document.getElementById("musicienHPM").innerHTML = "PV : " + musicienHP + "/30<br>PM : " /*+ musicienPM + "/30"*/;
    document.getElementById("archerHPM").innerHTML = "PV : " + archerHP + "/40<br>PM : " /*+ archerPM + "/30"*/;
    document.getElementById("santaHP").innerHTML = "PV : " + santaHP + "/140";
    document.getElementById("knutalluxHP").innerHTML = "PV : " + knutalluxHP + "/80";
    document.getElementById("knutalluxdeuxHP").innerHTML = "PV : " + knutalluxDeuxHP + "/80";
    document.getElementById("knutalluxTroisHP").innerHTML = "PV : " + knutalluxTroisHP + "/80";

    if (assaHP < 1) {
        document.getElementById('assa').style.visibility='hidden';
    }
    if (mageHP < 1) {
        document.getElementById('mage').style.visibility='hidden';
    }
    if (musicienHP < 1) {
        document.getElementById('musicien').style.visibility='hidden';
    }
    if (archerHP < 1) {
        document.getElementById('archer').style.visibility='hidden';
    }
    if (santaHP < 1) {
        document.getElementById('santa').style.visibility='hidden';
        document.getElementById('santaButton').style.visibility='hidden';
    }
    if (knutalluxHP < 1) {
        document.getElementById('knutallux').style.visibility='hidden';
        document.getElementById('knutalluxButton').style.visibility='hidden';
    }
    if (knutalluxDeuxHP < 1) {
        document.getElementById('knutalluxdeux').style.visibility='hidden';
        document.getElementById('knutalluxdeuxButton').style.visibility='hidden';
    }
    if (knutalluxTroisHP < 1){
        document.getElementById('knutalluxTrois').style.visibility='hidden';
        document.getElementById('knutalluxTroisButton').style.visibility='hidden';
    }
    assaArmor = 10;
    mageArmor = 5;
    musicienArmor = 10;
    archerArmor =  10;
    if (assaHP > 0 || mageHP > 0 || musicienHP > 0 || archerHP > 0) {
        document.getElementById("combatLog").innerHTML = "Les aventuriers sont tous morts";
    }
    if (santaHP > 0 || knutalluxHP > 0 || knutalluxDeuxHP > 0 || knutalluxTroisHP >0) {
        document.getElementById("combatLog").innerHTML = "Les monstres sont tous morts";
    }

}


