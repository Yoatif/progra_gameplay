//initialisation des variables
//var assa
let assa = document.getElementById("assa");
let tourAssa = document.getElementById('assaHPM');
let assaHP = 50;
let assaMP = 10;
let assaArmor = 10;
let assaAttack = 10;
let assaAtk = false;
let assaDef = false;
let assaSpecial = false;
let assaSpecialCounter = 0;
let mortAssa = false;  

//mage
let mage = document.getElementById("mage");
let tourMage = document.getElementById('mageHPM');
let mageHP = 40;
let mageMP = 20;
let mageArmor = 5;
let mageAttack = 15;
let mageAtk = false;
let mageDef = false;
let mageSpecial = false;
let mageSpecialCounter = 0;
let mortMage = false;

//archer
let archer = document.getElementById("archer");
let tourArcher = document.getElementById('archerHPM');
let archerHP = 30;
let archerMP = 30;
let archerArmor = 10;
let archerAttack = 15;
let archerAtk = false;
let archerDef = false;
let archerSpecial = false;
let archerSpecialCounter = 0;
let mortArcher = false;

//var musicien
let musicien = document.getElementById("musicien");
let tourMusicien = document.getElementById('musicienHPM');
let musicienHP = 40;
let musicienMP = 30;
let musicienArmor = 10;
let musicienAttack = 15;
let musicienAtk = false;
let musicienDef = false;
let musicienSpecial = false;
let musicienSpecialCounter = 0;
let mortMusicien = false;

// Init var monstre
//var Santa
let santa = document.getElementById("santaImg");
let santaHP = 140;
let santaAttack = 30;
let mortSanta = false;

//var Knutallux
let knutallux = document.getElementById("knutallux");
let knutalluxHP = 80;
let knutalluxAttack = 20;
let mortKnutallux = false;

//var KnutalluxDeux
let knutalluxDeux = document.getElementById("knutalluxDeux");
let knutalluxDeuxHP = 80;
let knutalluxDeuxAttack = 20;
let mortKnutalluxDeux = false;

// var KnutalluxTrois
let knutalluxTrois = document.getElementById("knutalluxTrois");
let knutalluxTroisHP = 80;
let knutalluxTroisAttack = 20;
let mortKnutalluxTrois = false;

//var combat
let musicTheme = new Audio ('sound/Juhani_Junkala_Level 1.wav');
musicTheme.loop = true;

let damage = assaAttack;
let ennemyTarget = "santa";
let compteurMonstre = 0;
let compteurJoueur = 0;
let monsterTarget = " ";
let nbTour = 0;

//Init var button
/*var attaque = document.getElementById("button1");
var speciale = document.getElementById("button2");
var defense = document.getElementById("button3");*/

//ici je joue mes tours de jeux
function round() {
    //play loop musicTheme
    musicTheme.play();
    console.log("je rentre dans la fonction")
    //passage tour joueur / monstre       
    switch (compteurJoueur){
        case 0:
            //tour assa 
            console.log("assa");
            //je déplace l'assa et modifie sa couleur afin de visualiser son tour
            document.getElementById('assaHPM').style.color='black';
            document.getElementById('archerHPM').style.color='white';
            //vérification assa en vie  si oui faire son tour de jeu
            if (assaHP <= 0) {
                document.getElementById("combatLog").innerHTML = "L'assasin est mort !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }
            else{
                if (santaHP < 0 && knutalluxHP < 0 && knutalluxDeuxHP < 0 && knutalluxTroisHP <0) {
                    document.getElementById("combatLog").innerHTML = "Les monstres sont tous morts";
                }
                else{
                    document.getElementById("assa").style.right = "40%";
                TourJoueur("assa", assaAttack, assaMP, assaSpecial, assaSpecialCounter, assaAtk, assaDef);
                }
            }
            break;
        case 1:
            //tour mage
            console.log("mage");
            document.getElementById('mageHPM').style.color='black';
            document.getElementById('assaHPM').style.color='white';
            //vérification assa en vie  si oui faire son tour de jeu
            if (mageHP <= 0) {
                document.getElementById("combatLog").innerHTML = "Le mage est mort !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            }
            else {
                if (santaHP < 0 && knutalluxHP < 0 && knutalluxDeuxHP < 0 && knutalluxTroisHP <0) {
                    document.getElementById("combatLog").innerHTML = "Les monstres sont tous morts";
                }
                else{
                    //assa retourne a la position de départ et mag s'avance
                    document.getElementById("assa").style.right = "30%";
                    document.getElementById("mage").style.right = "30%";
                    TourJoueur("mage", mageAttack, mageMP, mageSpecial, mageSpecialCounter, mageAtk, mageDef);
                }
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
                if (santaHP < 0 && knutalluxHP < 0 && knutalluxDeuxHP < 0 && knutalluxTroisHP <0) {
                    document.getElementById("combatLog").innerHTML = "Les monstres sont tous morts";
                }
                else{
                    document.getElementById("mage").style.right = "20%";
                    document.getElementById("musicien").style.right = "30%";
                    TourJoueur("musicien", musicienAttack, musicienMP, musicienSpecial, musicienSpecialCounter, musicienAtk, musicienDef);
                }
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
                if (santaHP < 0 && knutalluxHP < 0 && knutalluxDeuxHP < 0 && knutalluxTroisHP <0) {
                    document.getElementById("combatLog").innerHTML = "Les monstres sont tous morts";
                }
                else{
                    document.getElementById("musicien").style.right = "20%";
                    document.getElementById("archer").style.right = "20%";
                    TourJoueur("archer", archerAttack, archerMP, archerSpecial, archerSpecialCounter, archerAtk, archerDef  );}
            }

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
                if (assaHP < 0 && mageHP < 0 && musicienHP < 0 && archerHP < 0) {
                    document.getElementById("combatLog").innerHTML = "Les aventuriers sont tous morts";
                }
                else{
                    monsterSelectTarget()
                    attackMonster("knutallux", knutalluxAttack) 
                }
                            
            }
            counterPlayerIncrement();
            break;
        //début tour monstre.
        case 5:
            //tour knutalluxDeux (vérification mort ou tour monstre)
            console.log("knutalluxDeux");
            if (knutalluxDeuxHP <= 0){
                document.getElementById('knutalluxDeux').style.display = 'none';
                console.log("est mort");
            }
            else{
                if (assaHP < 0 && mageHP < 0 && musicienHP < 0 && archerHP < 0) {
                    document.getElementById("combatLog").innerHTML = "Les aventuriers sont tous morts";
                }
                else{
                    monsterSelectTarget();
                    attackMonster("knutalluxDeux", knutalluxDeuxAttack);
                }
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
                if (assaHP < 0 && mageHP < 0 && musicienHP < 0 && archerHP < 0) {
                    document.getElementById("combatLog").innerHTML = "Les aventuriers sont tous morts";
                }
                else{
                    monsterSelectTarget();
                    attackMonster("knutalluxTrois", knutalluxTroisAttack );
                }
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
                if (assaHP < 0 && mageHP < 0 && musicienHP < 0 && archerHP < 0) {
                    document.getElementById("combatLog").innerHTML = "Les aventuriers sont tous morts";
                }
                else{
                    monsterSelectTarget();
                    attackMonster("santa", santaAttack);
                }
            }
            counterPlayerIncrement();
        default:

    }


}
// tour joueur aparition bouton dans le combatLog + fonction incrémentation du compteur de tour
function TourJoueur(charaName, charaAttack, charaPM, charaSpecial, charaSpecialCounter, charaAtk, charaDef) {
    console.log("charaSpe" +charaSpecial);
    console.log("charaATK" + charaAtk);
    console.log("charaDef" + charaDef);
    if (charaSpecial == true){
        for (charaSpecialCounter = 0; charaSpecialCounter < 1; charaSpecialCounter++){
            document.getElementById("combatLog").innerHTML = charaName + " se prépare à agir ! <br> <input type='button' onclick='attaque(\""+charaName+"\","+charaAttack+")' value='Attaque'> <input type='button' onclick='protect(\""+charaName+"\")' value='Defense'> ";
        }
    }
    if (charaAtk == true){
        for (charaSpecialCounter = 0; charaSpecialCounter < 1; charaSpecialCounter++){
            document.getElementById("combatLog").innerHTML = charaName + " se prépare à agir ! <br> <input type='button' onclick='protect(\""+charaName+"\")' value='Defense'> <input type='button' onclick='special(\""+charaName+"\","+charaAttack+","+charaPM+","+damage+")' value='Attaque Speciale'> ";
        }
    }
    if (charaDef == true){
        for (charaSpecialCounter = 0; charaSpecialCounter < 1; charaSpecialCounter++){
            document.getElementById("combatLog").innerHTML = charaName + " se prépare à agir ! <br> <input type='button' onclick='attaque(\""+charaName+"\","+charaAttack+")' value='Attaque'> <input type='button' onclick='special(\""+charaName+"\","+charaAttack+","+charaPM+","+damage+")' value='Attaque Speciale'> ";
        }
    }
    if (!charaAtk && !charaDef && !charaSpecial){
        document.getElementById("combatLog").innerHTML = charaName + " se prépare à agir ! <br> <input type='button' onclick='attaque(\""+charaName+"\","+charaAttack+")' value='Attaque'> <input type='button' onclick='protect(\""+charaName+"\")' value='Defense'> <input type='button' onclick='special(\""+charaName+"\","+charaAttack+","+charaPM+","+damage+")' value='Attaque Speciale'> ";
                
    }
    console.log(charaSpecial);  
}

//ici je fait les attaque du monstre
function attaque(charaName, damage, charaAtk){
    switch(monstreCible){
        case 0:
            santaHP = santaHP - damage;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " inflige " + damage + "dégâts !<br> Il reste au santa " + santaHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            charaAtk = true;
            console.log("charaAtk" + charaAtk);
            break;
        case 1:
            knutalluxHP = knutalluxHP - damage;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " inflige " + damage + "dégâts !<br> Il reste a Knutallux (1) " + knutalluxHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            charaAtk = true;
            console.log("charaAtk" + charaAtk);
            break;
        case 2:
            knutalluxDeuxHP = knutalluxDeuxHP - damage;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " inflige " + damage + "dégâts !<br> Il reste a Knutallux (2) " + knutalluxDeuxHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            charaAtk = true;
            console.log("charaAtk" + charaAtk);
            break;
        case 3:
            knutalluxTroisHP = knutalluxTroisHP -damage;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " inflige " + damage + "dégâts !<br> Il reste a Knutallux (3) " + knutalluxTroisHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            charaAtk = true;
            console.log("charaAtk" + charaAtk);
            break;
        default:            

    }

}

//ici je définie le bouton défense
function protect(charaName,charaDef){
    if (charaName == "assa") {
        assaArmor = assaArmor *2;
        console.log("assaArmor =" + assaArmor);
        charaDef = true;
        console.log("charaDef" + charaDef);
    }
    else if (charaName == "mage") {
        mageArmor = mageArmor *2;
        console.log("mageArmor =" + mageArmor);
        charaDef = true;
        console.log("charaDef" + charaDef);
    }
    else if (charaName == "musicien") {
        musicienArmor = musicienArmor *2;
        charaDef = true;
        console.log("charaDef" + charaDef);
    }
    else {
        archerArmor = archerArmor *2;
        charaDef = true;
        console.log("charaDef" + charaDef);
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

/*function hideSpecial(charaName, charaSpecial){
    for (i=0;)
}*/

//bouton special
function special(charaName, charaAttack, charaPM, damage, charaSpecial){
    //if (assaSpecial == false){
        if (charaPM < 5) {
        document.getElementById("combatLog").innerHTML = charaName + " n'a pas suffisament de point d'action ! <br> <input type='button' onclick='attaque(\""+charaName+"\","+charaAttack+")' value='Attaque'> <input type='button' onclick='protectChara(\""+charaName+"\")' value='Defense'>";
        }
        else if (charaName == "assa"){
            //charaSpecialCounter = 1;
            switch(monstreCible){
                case 0:
                    assaMP = assaMP - 5;                    
                    console.log(santaHP);
                    console.log(damage);
                    santaHP = santaHP - (damage*2);
                    updateHPM();
                    document.getElementById("combatLog").innerHTML = charaName + " fait une double attaque, il inflige " + (damage*2) + "dégâts !<br> Il reste a Knutallux (1) " + santaHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
                    charaSpecial = true;
                    console.log("charaSpe" + charaSpecial);
                    break;
                case 1:
                    assaMP = assaMP - 5;
                    knutalluxHP = knutalluxHP - damage;
                    knutalluxHP = knutalluxHP - damage;
                    updateHPM();
                    document.getElementById("combatLog").innerHTML = charaName + " fait une double attaque, il inflige " + (damage*2) + "dégâts !<br> Il reste a Knutallux (1) " + knutalluxHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
                    charaSpecial = true;
                    console.log("charaSpe" + charaSpecial);
                    break;
                case 2:
                    assaMP = assaMP - 5;
                    knutalluxDeuxHP = knutalluxDeuxHP - damage;
                    knutalluxDeuxHP = knutalluxDeuxHP - damage;
                    updateHPM();
                    document.getElementById("combatLog").innerHTML = charaName + " fait une double attaque, il inflige " + (damage*2) + "dégâts !<br> Il reste a Knutallux (2) " + knutalluxDeuxHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
                    charaSpecial = true;
                    console.log("charaSpe" + charaSpecial);
                    break;
                case 3:
                    assaMP = assaMP - 5;
                    knutalluxTroisHP = knutalluxTroisHP - damage;
                    knutalluxTroisHP = knutalluxTroisHP - damage;
                    updateHPM();
                    document.getElementById("combatLog").innerHTML = charaName + " fait une double attaque, il inflige " + (damage*2) + "dégâts !<br> Il reste a Knutallux (3) " + knutalluxTroisHP + " PV !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
                    charaSpecial = true;
                    console.log("charaSpe" + charaSpecial);
                    break;
                default:
                    console.log(charaSpecial);
            }
        }
        else if (charaName == "mage"){
            mageMP = mageMP - 5;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " récite une incantation<br> <input type='button' onclick='attaque(\""+charaName+"\","+(charaAttack*2.5)+")' value='NEXT'>";
            //charaSpecialCounter = 1;
            charaSpecial = true;
            console.log("charaSpe" + charaSpecial);
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
            charaSpecial = true;
            console.log("charaSpe" + charaSpecial);
        }
        else{
            
            archerMP = archerMP - 5;
            knutalluxHP = knutalluxHP - archerAttack;
            knutalluxDeuxHP = knutalluxDeuxHP - archerAttack;
            knutalluxTroisHP = knutalluxTroisHP - archerAttack;
            santaHP = santaHP - archerAttack;
            updateHPM();
            document.getElementById("combatLog").innerHTML = charaName + " tir une pluie de flèche !<br> <input type='button' onclick='counterPlayerIncrement()' value='NEXT'>";
            charaSpecial = true;
            console.log("charaSpe" + charaSpecial);
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
    if (assaHP < 0 && mageHP < 0 && musicienHP < 0 && archerHP < 0) {
        document.getElementById("combatLog").innerHTML = "Les aventuriers sont tous morts";
    }
    if (santaHP < 0 && knutalluxHP < 0 && knutalluxDeuxHP < 0 && knutalluxTroisHP <0) {
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