//initialisation des variables

//var assa

var assa = document.getElementById("assa");
var assaHP = 50;
var assaMP = 10;
var assaArmor = 10;
var assaAttack = 10;
var mortAssa = false;  

//mage
var mage = document.getElementById("mage");
var mageHP = 40;
var mageMP = 20;
var mageArmor = 5;
var mageAttack = 15;
var mortMage = false;

//archer
var archer = document.getElementById("archer");
var archerHP = 30;
var archerMP = 30;
var archerArmor = 10;
var archerAttack = 15;
var mortArcher = false;

//var musicien
var musicien = document.getElementById("musicien");
var musicienHP = 40;
var musicienMP = 30;
var musicienArmor = 10;
var musicienAttack = 15;
var mortMusicien = false;

// Init var monstre
//var Santa
var santa = document.getElementById("Louis");
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
                    document.getElementById('assaHPM').style.color='black';
                    document.getElementById('assaHPM').style.color='white';
                    i = i+1;
                    break;
                case 1:
                    console.log("mage");
                    document.getElementById('mageHPM').style.color='black';
                    document.getElementById('mageHPM').style.color='white';
                    i = i+1;
                    break;
                case 2:
                    console.log("musicien");
                    document.getElementById('musicienHPM').style.color='black';
                    document.getElementById('musicienHPM').style.color='white';
                    i = i+1;
                    break;
                case 3:
                    console.log("archer");
                    document.getElementById('archerHPM').style.color='black';
                    document.getElementById('archerHPM').style.color='white';
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

/*attack.onclick = function(){
    //GetEnnemyProtected(ennemyTarget) is a function that sreturns the value of ennemy protected based on id
    //GetplayerAttack(currentPlayer) is a function that returns the attack value of the current player
      //attackEnnemy(GetplayerAttack(currentPlayer),GetEnnemyProtected(ennemyTarget));
      console.log("boutton attaque")
  }*/

function attackEnnemy(){
    switch (ennemyTarget){
        case 1:
            santaHP -= dammageAmount;
            console.log("Santa perd des pv")
            break;
        case 2 :
            knutalluxHP -= dammageAmount;
            console.log("knutallux perd des pv")
            break;
        case 3 :
            knutalluxDeuxHP -= dammageAmount;
            console.log("knutalluxDeux perd des pv")
            break;
        /*case 4:
            hpVert -= dammageAmount;
            break;*/
    }
}



function afficherHP(id) {
    document.getElementById(id).style.visibility='visible'
  }
  
  function cacherHP(id) {
    document.getElementById(id).style.visibility='hidden'
  }

round()


/* 
function tourJoueur(playerName, assaAttack, assaMP) {
  document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " se préMPre à agir ! <br> <input type='button' onclick='monstreBlessure(\""+playerName+"\","+assaAttack+")' value='Attaque'> <input type='button' onclick='assaDefend(\""+playerName+"\")' value='Defense'> <input type='button' onclick='assaSpecialAttack(\""+playerName+"\","+assaAttack+","+assaMP+")' value='Attaque Speciale'> ";
}

function assaDefend(playerName) {
  if (playerName == "bleu") {
      assaArmor = assaArmor *2
  }
  else if (playerName == "rouge") {
      mageArmor = mageArmor *2
  }
  else if (playerName == "vert") {
      archerArmor = archerArmor *2
  }
  else {
      musicienArmor = musicienArmor *2
  }
  document.getElementById("combatLog").innerHTML = "l'alié " + playerName + " se préMPre à se défendre !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
}

function assaSpecialAttack(playerName, assaAttack, assaMP) {
  if (assaMP < 5) {
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " n'a MPs suffisament de point d'action ! <br> <input type='button' onclick='monstreBlessure(\""+playerName+"\","+assaAttack+")' value='Attaque'> <input type='button' onclick='assaDefend(\""+playerName+"\")' value='Defense'>";
  }
  else if (playerName == "bleu") {
      assaArmor = assaArmor * 3;
      mageArmor = mageArmor * 3;
      archerArmor = archerArmor * 3;
      musicienArmor = musicienArmor * 3;
      assaMP = assaMP - 5;
      updateAllHMP();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " protège ses alliés !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else if (playerName == "rouge") {
      mageMP = mageMP - 5;
      updateAllHMP();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " attaque aveuglément !<br> <input type='button' onclick='monstreBlessure(\""+playerName+"\","+assaAttack*3+")' value='NEXT'>";
  }
  else if (playerName == "vert") {
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
      if (archerHP < 30 && archerHP + 15 < 30) {
          archerHP = archerHP + 15;
      }
      else if (archerHP < 30) {
          archerHP = 30;
      }
      if (musicienHP < 40 && musicienHP + 15 < 40) {
          musicienHP = musicienHP + 15;
      }
      else if (musicienHP < 40) {
          musicienHP = 40;
      }
      archerMP = archerMP - 5;
      updateAllHMP();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " joint les mains en prière et soigne ses alliés !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else {
      musicienMP = musicienMP - 5;
      knutalluxDeuxHP = knutalluxDeuxHP - musicienAttack;
      knutalluxHP = knutalluxHP - musicienAttack;
      santaHP = santaHP - musicienAttack;
      updateAllHMP();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " exécute sa juste vengeance !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
}

function increaseCounter() {
  compteurRound = compteurRound + 1;
  returnToStartingState()
}

function returnToStartingState() {
  if (compteurRound == 5) {
      nbTour++;
      compteurRound = 0;
  }
  document.getElementById("combatLog").innerHTML = "C'est le tour "+ nbTour + " !<br> <input type='button' onclick='round()' value='NEXT'>";
}

function updateAllHMP() {
  document.getElementById("assaHMP").innerHTML = "PV : " + assaHP + "/50<br>MP : " + assaMP + "/10";
  document.getElementById("mageHMP").innerHTML = "PV : " + mageHP + "/40 <br>MP : " + mageMP + "/20";
  document.getElementById("archerHMP").innerHTML = "PV : " + archerHP + "/30<br>MP : " + archerMP + "/30";
  document.getElementById("musicienHMP").innerHTML = "PV : " + musicienHP + "/40<br>MP : " + musicienMP + "/30";
  document.getElementById("santaHP").innerHTML = "PV : " + santaHP + "/140";
  document.getElementById("knutalluxHP").innerHTML = "PV : " + knutalluxHP + "/80";
  document.getElementById("knutalluxDeuxHP").innerHTML = "PV : " + knutalluxDeuxHP + "/80";
  if (assaHP < 1) {
      document.getElementById('assa').style.visibility='hidden';
  }
  if (mageHP < 1) {
      document.getElementById('mage').style.visibility='hidden';
  }
  if (archerHP < 1) {
      document.getElementById('archer').style.visibility='hidden';
  }
  if (musicienHP < 1) {
      document.getElementById('musicien').style.visibility='hidden';
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
  assaArmor = 10;
  mageArmor = 5;
  archerArmor = 10;
  musicienArmor =  10;
  if (assaHP > 0 || mageHP > 0 || archerHP > 0 || musicienHP > 0) {
      document.getElementById("combatLog").innerHTML = "Les templiers sont tous morts";
  }
  if (santaHP > 0 || knutalluxHP > 0 || knutalluxDeuxHP > 0) {
      document.getElementById("combatLog").innerHTML = "Les monstres sont tous morts";
  }
}



function monstreBlessure(playerName, damage) {
  if (monstreCible == 0) {
      santaHP = santaHP - damage;
      updateAllHMP();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " inflige " + damage + "dégâts !<br> Il reste a Louis " + santaHP + " PV !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else if (monstreCible == 1) {
      knutalluxHP = knutalluxHP - damage;
      updateAllHMP();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " inflige " + damage + "dégâts !<br> Il reste au monstre abyssale (1) " + knutalluxHP + " PV !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else {
      knutalluxDeuxHP = knutalluxDeuxHP - damage;
      updateAllHMP();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " inflige " + damage + "dégâts !<br> Il reste au monstre abyssale (2) " + knutalluxDeuxHP + " PV !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
}

function targetSelect(num) {
  monstreCible = num;
  if (num == 0) {
      nomMonstreCible = "Louis";
      document.getElementById("santaButton").style.color='red';
      document.getElementById("knutalluxButton").style.color='black';
      document.getElementById("knutalluxDeuxButton").style.color='black';
  }
  else if (num == 1) {
      nomMonstreCible = "Monstre abyssale (1)";
      document.getElementById("santaButton").style.color='black';
      document.getElementById("knutalluxButton").style.color='red';
      document.getElementById("knutalluxDeuxButton").style.color='black';
  }
  else {
      nomMonstreCible = "Monstre abyssale (2)";
      document.getElementById("santaButton").style.color='black';
      document.getElementById("knutalluxButton").style.color='black';
      document.getElementById("knutalluxDeuxButton").style.color='red';
  }
}

function monsterStrikeBack() {
  if (assaHP > 0 || mageHP > 0 || archerHP > 0 || musicienHP > 0) {
      selectionCible();
      monsterName = "";
      monsterAttack = 0;
      if (santaHP > 0 && compteurMonstre == 0) {
          compteurMonstre = compteurMonstre + 1;
          monsterName = "Louis";
          monsterAttack = 30;
          attackMonster(monsterAttack, monsterName)
      }
      else if (knutalluxHP > 0 && compteurMonstre == 1) {
          compteurMonstre = compteurMonstre + 1;
          monsterName = "monstre abyssale (1)";
          monsterAttack = 20;
          attackMonster(monsterAttack, monsterName)
      }
      else if (knutalluxDeuxHP > 0 && compteurMonstre == 2) {
          compteurMonstre = compteurMonstre + 1;
          monsterName = "monstre abyssale (2)";
          monsterAttack = 20;
          attackMonster(monsterAttack, monsterName)
      }
      else if (compteurMonstre < 3) {
          compteurMonstre = compteurMonstre + 1;
      }
      else {
          compteurMonstre = 0;
          increaseCounter();
      }
  }
  else {
      document.getElementById("combatLog").innerHTML = "Les templiers sont tous morts";
  }
}

function attackMonster(monsterAttack, monsterName) {
  if (monsterTarget == 0) {
      if (assaHP - (monsterAttack - assaArmor) > 0) {
          assaHP = assaHP - (monsterAttack - assaArmor);
          updateAllHMP();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier bleu " + assaHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
  else if (monsterTarget == 1) {
      if (mageHP - (monsterAttack - mageArmor) > 0) {
          mageHP = mageHP - (monsterAttack - mageArmor);
          updateAllHMP();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier rouge " + mageHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
  else if (monsterTarget == 2) {
      if (archerHP - (monsterAttack - archerArmor) > 0) {
          archerHP = archerHP - (monsterAttack - archerArmor);
          updateAllHMP();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier vert " + archerHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
  else {
      if (musicienHP - (monsterAttack - musicienArmor) > 0) {
          musicienHP = musicienHP - (monsterAttack - musicienArmor);
          updateAllHMP();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier rouge " + musicienHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
}

function selectionCible() {
  monsterTarget = Math.floor(Math.random() * 4);
  if (monsterTarget == 0 && assaHP <= 0) {
      selectionCible();
  }
  if (monsterTarget == 1 && mageHP <= 0) {
      selectionCible();
  }
  if (monsterTarget == 2 && archerHP <= 0) {
      selectionCible();
  }
  if (monsterTarget == 3 && musicienHP <= 0) {
      selectionCible();
  }
  
}

// changer le message en début de combat 
//message.innerHTML= "Récupèrer les cadeaux qu'il à volés";

//function Attack (attackButton)

*/

/*function GetEnnemyProtected (id) {
  case 1 :
    return ennemy1Protected;
  
  case 2 :
    return ennemy2Protected;

  case 3 :
    return ennemy3Protected;
  
  case 4: 
    return ennemy3Protected*/
    
/*function AttackEnnemy(dammageAmount,ennemyProtected) {
  if (Protected == true) {
    return;//quitte la fonction
  }
  //change d'ennemie selon la séléction
  switch (ennemyTarget) {
    case 1 :
      bossHP -= dammageAmount;
      break;
    case 2 :
      ennemy2Hp -= dammageAmount;
      break;
    case 3 :
      hpRouge -= dammageAmount;
      break;
    case 4:
      hpVert -= dammageAmount;
      break;
  }

  function EnnemyTurn();
  //Turn of the ennemy, ennemyProtected is reset and the ennemy attacks
 
};*/