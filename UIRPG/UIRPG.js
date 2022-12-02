//initialisation des variables
//var assa
var assa = document.getElementById("assa");
var tourAssa = document.getElementById('assaHPM');
var assaHP = 50;
var assaMP = 10;
var assaArmor = 10;
var assaAttack = 10;
var assaSpecialCounter = 0;
var mortAssa = false;  

//mage
var mage = document.getElementById("mage");
var tourMage = document.getElementById('mageHPM');
var mageHP = 40;
var mageMP = 20;
var mageArmor = 5;
var mageAttack = 15;
var mageSpecialCounter = 0;
var mortMage = false;

//archer
var archer = document.getElementById("archer");
var tourArcher = document.getElementById('archerHPM');
var archerHP = 30;
var archerMP = 30;
var archerArmor = 10;
var archerAttack = 15;
var archerSpecialCounter = 0;
var mortArcher = false;

//var musicien
var musicien = document.getElementById("musicien");
var tourMusicien = document.getElementById('musicienHPM');
var musicienHP = 40;
var musicienMP = 30;
var musicienArmor = 10;
var musicienAttack = 15;
var musicienSpecialCounter = 0;
var mortMusicien = false;

// Init var monstre
//var Santa
var santa = document.getElementById("santaImg");
var santaHP = 140;
var santaAttack = 30;
var mortSanta = false;

//var Knutallux
var knutallux = document.getElementById("knutallux");
var knutalluxHP = 80;
var knutalluxAttack = 20;
var mortKnutallux = false;

//var KnutalluxDeux
var knutalluxDeux = document.getElementById("knutalluxDeux");
var knutalluxDeuxHP = 80;
var knutalluxDeuxAttack = 20;
var mortKnutalluxDeux = false;

// var KnutalluxTrois
var knutalluxTrois = document.getElementById("knutalluxTrois");
var knutalluxTroisHP = 80;
var knutalluxTroisAttack = 20;
var mortKnutalluxTrois = false;

//var combat
var ennemyTarget = "santa";
var compteurMonstre = 0;
var compteurJoueur = 0;
var monsterTarget = " ";
var nbTour = 0;

//Init var button
/*var attaque = document.getElementById("button1");
var speciale = document.getElementById("button2");
var defense = document.getElementById("button3");*/

//ici je joue mes tours de jeux
function round() {
    console.log("je rentre dans la fonction")       
    switch (compteurJoueur){
        case 0:
            //tour assa (vérification mort ou tour joueur)
            console.log("assa");
            document.getElementById('assaImg').style.right = '40%' ;
            document.getElementById('assaHPM').style.color='black';
            document.getElementById('archerHPM').style.color='white';
            if (assaHP <= 0) {
                document.getElementById("combatLog").innerHTML = "L'assasin est mort !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }
            else{
                document.getElementById("assa").style.right = "40%";
                TourJoueur("assa", assaAttack);
   
            }
            break;
        case 1:
            //tour mage (vérification mort ou tour joueur)
            console.log("mage");
            document.getElementById('mageHPM').style.color='black';
            document.getElementById('assaHPM').style.color='white';
            if (mageHP <= 0) {
                document.getElementById("combatLog").innerHTML = "Le mage est mort !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }
            else {
                document.getElementById("assa").style.right = "30%";
                document.getElementById("mage").style.right = "30%";
                TourJoueur("mage", mageAttack);
            }

            break;
        case 2:
            console.log("musicien");
            //tour musicien (vérification mort ou tour joueur)
            document.getElementById('musicienHPM').style.color='black';
            document.getElementById('mageHPM').style.color='white';
            if (musicienHP <= 0) {
                document.getElementById("combatLog").innerHTML = "Le musicien est mort !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }
            else {
                document.getElementById("mage").style.right = "20%";
                document.getElementById("musicien").style.right = "30%";
                TourJoueur("musicien", musicienAttack);
            }

            break;
        case 3:
            console.log("archer");
            //tour archer (vérification mort ou tour joueur)
            document.getElementById('archerHPM').style.color='black';
            document.getElementById('musicienHPM').style.color='white';
            if (archerHP <= 0) {
                document.getElementById("combatLog").innerHTML = "L'archer est mort !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }
            else {
                document.getElementById("musicien").style.right = "20%";
                document.getElementById("archer").style.right = "20%";
                TourJoueur("archer", archerAttack);}

            break;
        // passage tour monstre                
        case 4:
            console.log("knutallux");
            //tour knutallux (vérification mort ou tour monstre)
            document.getElementById("archer").style.right = "10%";
            if (knutalluxHP <= 0){
                document.getElementById('knutallux').style.display = 'none';
                console.log("est mort");
            }
            else{
                monsterSelectTarget()
                attackMonster("knutallux", knutalluxAttack)             
            }
            counterPlayerIncrement();
            break;
        case 5:
            //tour knutalluxDeux (vérification mort ou tour monstre)
            console.log("knutalluxDeux");
            if (knutalluxDeuxHP <= 0){
                document.getElementById('knutalluxDeux').style.display = 'none';
                console.log("est mort");
            }
            else{
                monsterSelectTarget();
                attackMonster("knutalluxDeux", knutalluxDeuxAttack);
            }
            counterPlayerIncrement();
            break;
        case 6:
            //tour knutalluxTrois (vérification mort ou tour monstre)
            console.log("knutalluxTrois");
            if (knutalluxTroisHP <= 0){
                document.getElementById('knutalluxTrois').style.display = 'none';
                console.log("est mort")
            }
            else{
                monsterSelectTarget();
                attackMonster("knutalluxTrois", knutalluxTroisAttack );
            }
            counterPlayerIncrement(); 
            break;
        case 7:
            //tour santa (vérification mort ou tour monstre)
            console.log("santa");
            if (santaHP <=0){
                document.getElementById('santa').style.display = 'none';
                console.log("santa est mort")
            }
            else{
                monsterSelectTarget();
                attackMonster("santa", santaAttack);
            }
            counterPlayerIncrement();
        default:

    }


}
// tour joueur aparition bouton dans le combatLog + fonction incrémentation du compteur de tour
function TourJoueur(charaName, charaAttack, charaPM) {
    document.getElementById("combatLog").innerHTML = charaName + " se prépare à agir ! <br> <input type='button' onclick='attaque(\""+charaName+"\","+charaAttack+")' value='Attaque'> <input type='button' onclick='protect(\""+charaName+"\")' value='Defense'> <input type='button' onclick='special(\""+charaName+"\","+charaAttack+","+charaPM+")' value='Attaque Speciale'> ";
}

//ici je fait les attaque du monstre
function attaque(charaName, damage){
    switch(monstreCible){
        case 0:
            santaHP = santaHP - damage;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " inflige " + damage + "dégâts !<br> Il reste au santa " + santaHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            break;
        case 1:
            knutalluxHP = knutalluxHP - damage;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " inflige " + damage + "dégâts !<br> Il reste a Knutallux (1) " + knutalluxHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            break;
        case 2:
            knutalluxDeuxHP = knutalluxDeuxHP - damage;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " inflige " + damage + "dégâts !<br> Il reste a Knutallux (2) " + knutalluxDeuxHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            break;
        case 3:
            knutalluxTroisHP = knutalluxTroisHP -damage;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " inflige " + damage + "dégâts !<br> Il reste a Knutallux (3) " + knutalluxTroisHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            break;            

    }

}

//ici je définie le bouton défense
function protect(charaName,){
    if (charaName == "assa") {
        assaArmor = assaArmor *2;
        console.log("assaArmor =" + assaArmor);
    }
    else if (charaName == "mage") {
        mageArmor = mageArmor *2;
        console.log("mageArmor =" + mageArmor);
    }
    else if (charaName == "musicien") {
        musicienArmor = musicienArmor *2;
    }
    else {
        archerArmor = archerArmor *2;
    }
    document.getElementById("combatLog").innerHTML = charaName + " se prépare à se défendre !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";

}

//test si special déjà lancer ne peut etre relancer au tour d'après
/*function specialCount(charaName, charaSpecial, charaSpecialCounter){
    if (charaSpecial == 1){
        document.getElementById("combatLog").innerHTML = charaName + "ne peux pas utiliser son special. <br> <inpute type='button' onclick='attaque(\""+charaName+"\","+charaAttack+")' value='Attaque'> <input type='button' onclick='protectChara(\""+charaName+"\")' value='Defense'>";
        charaSpecialCounter -= 1;
    }
    else {
        special()
    }
}*/

//bouton special
function special(charaName, charaAttack, charaPM, damage, charaSpecialCounter){
    //if (charaSpecialCounter == 0){
        if (charaPM < 5) {
        document.getElementById("combatLog").innerHTML = charaName + " n'a pas suffisament de point d'action ! <br> <input type='button' onclick='attaque(\""+charaName+"\","+charaAttack+")' value='Attaque'> <input type='button' onclick='protectChara(\""+charaName+"\")' value='Defense'>";
        }
        else if (charaName == "assa"){
            charaSpecialCounter = 1;
            switch(monstreCible){
                case 0:
                    assaMP = assaMP - 5;
                    santaHP = santaHP - damage;
                    santaHP = santaHP - damage;
                    updateHPM();
                    document.getElementById("combatLog").innerHTML = charaName + " attaque 2 fois !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
                    break;
                case 1:
                    assaMP = assaMP - 5;
                    knutalluxHP = knutalluxHP - damage;
                    knutalluxHP = knutalluxHP - damage;
                    updateHPM();
                    document.getElementById("combatLog").innerHTML = charaName + " fait une double attaque, il inflige " + damage + "dégâts !<br> Il reste a Knutallux (1) " + knutalluxHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
                    break;
                case 2:
                    assaMP = assaMP - 5;
                    knutalluxDeuxHP = knutalluxDeuxHP - damage;
                    knutalluxDeuxHP = knutalluxDeuxHP - damage;
                    updateHPM();
                    document.getElementById("combatLog").innerHTML = charaName + " fait une double attaque, il inflige " + damage + "dégâts !<br> Il reste a Knutallux (2) " + knutalluxDeuxHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
                    break;
                case 3:
                    assaMP = assaMP - 5;
                    knutalluxTroisHP = knutalluxTroisHP - damage;
                    knutalluxTroisHP = knutalluxTroisHP - damage;
                    updateHPM();
                    document.getElementById("combatLog").innerHTML = charaName + " fait une double attaque, il inflige " + damage + "dégâts !<br> Il reste a Knutallux (3) " + knutalluxTroisHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
                    break;
                default:
            }
        }
        else if (charaName == "mage"){
            mageMP = mageMP - 5;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " récite une incantation<br> <input type='button' onclick='attaque(\""+charaName+"\","+(charaAttack*2.5)+")' value='NEXT'>";
            charaSpecialCounter = 1;
        }
        else if (charaName == "musicien"){
            if (assaHP < 50 && assaHP + 15 < 50) {
                assaHP = assaHP + 15;
            }
            else if (assaHP < 50) {
                assaHP = 50;
            }
            if (mageHP < 40 && mageHP + 15 < 40) {
                mageHP = mageHP + 15;
            }
            else if (mageHP < 40) {
                mageHP = 40;
            }
            if (musicienHP < 30 && musicienHP + 15 < 30) {
                musicienHP = musicienHP + 15;
            }
            else if (musicienHP < 30) {
                musicienHP = 30;
            }
            if (archerHP < 40 && archerHP + 15 < 40) {
                archerHP = archerHP + 15;
            }
            else if (archerHP < 40) {
                archerHP = 40;
            }
            musicienMP = musicienMP - 5;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " commence un puissant riff, de sa bouzouki et soigne ses alliés !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            charaSpecialCounter = 1;
        }
        else{
            
            archerMP = archerMP - 5;
            knutalluxHP = knutalluxHP - archerAttack;
            knutalluxDeuxHP = knutalluxDeuxHP - archerAttack;
            knutalluxTroisHP = knutalluxTroisHP - archerAttack;
            santaHP = santaHP - archerAttack;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " tir une pluie de flèche !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            charaSpecialCounter = 1;
        }
    }
    

//}
//je met a jour les HP et PM
function updateHPM(){
    document.getElementById("assaHPM").innerHTML = "PV : " + assaHP + "/50<br>PM : " + assaMP + "/10";
    document.getElementById("mageHPM").innerHTML = "PV : " + mageHP + "/40 <br>PM : " + mageMP + "/20";
    document.getElementById("musicienHPM").innerHTML = "PV : " + musicienHP + "/30<br>PM : " + musicienMP + "/30";
    document.getElementById("archerHPM").innerHTML = "PV : " + archerHP + "/40<br>PM : " + archerMP + "/30";
    document.getElementById("santaHP").innerHTML = "PV : " + santaHP + "/140";
    document.getElementById("knutalluxHP").innerHTML = "PV : " + knutalluxHP + "/80";
    document.getElementById("knutalluxDeuxHP").innerHTML = "PV : " + knutalluxDeuxHP + "/80";
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
        document.getElementById('knutalluxDeux').style.visibility='hidden';
        document.getElementById('knutalluxDeuxButton').style.visibility='hidden';
    }
    if(knutalluxTroisHP < 1){
        document.getElementById('knutalluxTrois').style.visibility="hidden";
        document.getElementById('knutalluxTroisButton').style.visibility="hidden";
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
// ici je met a jour le compeur de round
function counterPlayerIncrement() {
    compteurJoueur += 1;
    returnToStartingState()
}
// je réinitialise le compteur de round
function returnToStartingState() {
    if (compteurJoueur == 8) {
        nbTour++;
        compteurJoueur = 0;
    }
    document.getElementById("combatLog").innerHTML = "C'est le tour "+ nbTour + " !<br> <input type='button' onclick='round()' value='NEXT'>";
}
//onmouseover pour afficher pv monstre
function afficherHP(id) {
    document.getElementById(id).style.visibility='visible'
}

//onmouseout cacher pv monstre  
function cacherHP(id) {
    document.getElementById(id).style.visibility='hidden'
}
// bouton sélection du monstre cible
function targetSelect(num){
    monstreCible = num;
    
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
    return monstreCible;


}

// ici je définis une cible aléatoire pour le monstre
function monsterSelectTarget(){
    monsterTarget = Math.floor(Math.random() * 4);
    if (monsterTarget == 0 && assaHP <= 0) {
        console.log("assa est la cible")
        monsterSelectTarget();
    }
    if (monsterTarget == 1 && mageHP <= 0) {
        console.log("mage est la cible")
        monsterSelectTarget();
    }
    if (monsterTarget == 2 && musicienHP <= 0) {
        console.log("musicien est la cible")
        monsterSelectTarget();
    }
    if (monsterTarget == 3 && archerHP <= 0) {
        console.log("archer est la cible")
        monsterSelectTarget();
    }

}
// je récupère la cible et réduis les pv du joueur
function attackMonster(monsterName, monsterAttack){
    switch(monsterTarget){
        case 0:
            if (assaHP - (monsterAttack - assaArmor) > 0) {
                assaHP = assaHP - (monsterAttack - assaArmor);
                updateHPM();
            }
            document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste a l'assasin " + assaHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            break;
        case 1:
            if (mageHP - (monsterAttack - mageArmor) > 0) {
                mageHP = mageHP - (monsterAttack - mageArmor);
                updateHPM();
            }
            document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au mage " + mageHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            break;
        case 2:
            if (musicienHP - (monsterAttack - musicienArmor) > 0) {
                musicienHP = musicienHP - (monsterAttack - musicienArmor);
                updateHPM();
            }
            document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au musicien " + musicienHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            break;
        case 3:
            if (archerHP - (monsterAttack - archerArmor) > 0) {
                archerHP = archerHP - (monsterAttack     - archerArmor);
                updateHPM();
            }
            document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste a l'archer " + assaHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            break;
        default:    
    }
}

/*function updateHPM(){
    document.getElementById("assaHPM").innerHTML = "PV : " + assaHP + "/50<br>MP : " + assaMP + "/10";
    document.getElementById("mageHPM").innerHTML = "PV : " + mageHP + "/40 <br>MP : " + mageMP + "/20";
    document.getElementById("musicienHPM").innerHTML = "PV : " + musicienHP + "/30<br>MP : " + musicienMP + "/30";
    document.getElementById("archerHPM").innerHTML = "PV : " + archerHP + "/40<br>MP : " + archerMP + "/30";
    document.getElementById("santaHP").innerHTML = "PV : " + santaHP + "/140";
    document.getElementById("knutalluxHP").innerHTML = "PV : " + knutalluxHP + "/80";
    document.getElementById("knutalluxDeuxHP").innerHTML = "PV : " + knutalluxDeuxHP + "/80";
    document.getElementById("knutalluxTroisHP").innerHTML = "PV : " + knutalluxTroisHP + "/80";

    if (assaHP < 1) {
        document.getElementById('assa').style.display='none';
    }
    if (mageHP < 1) {
        document.getElementById('mage').style.display='none';
    }
    if (musicienHP < 1) {
        document.getElementById('musicien').style.display='none';
    }
    if (archerHP < 1) {
        document.getElementById('archer').style.display='none';
    }
    if (santaHP < 1) {
        document.getElementById('santa').style.style.display='none';
        document.getElementById('santaButton').style.display='none';
    }
    if (knutalluxHP < 1) {
        document.getElementById('knutallux').style.display='none';
        document.getElementById('knutalluxButton').style.display='none';
    }
    if (knutalluxDeuxHP < 1) {
        document.getElementById('knutalluxdeux').style.display='none';
        document.getElementById('knutalluxdeuxButton').style.display='none';
    }
    if (knutalluxTroisHP < 1){
        document.getElementById('knutalluxTrois').style.display='none';
        document.getElementById('knutalluxTroisButton').style.display='none';
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

}*/