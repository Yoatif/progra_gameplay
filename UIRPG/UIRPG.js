   
//Fonction d'initialisation des variables
function initialisation() {
    // Init var joueur
    //var assa

    assa = document.getElementById("assa");
    assaHP = 50;
    assaPA = 10;
    assaArmor = 10;
    assaAttack = 10;
    assaStunned = false;
    mortAssa = false;  
    
    //mage
    mage = document.getElementById("mage");
    mageHP = 40;
    magePA = 20;
    mageArmor = 5;
    mageAttack = 15;
    mageStunned = false;
    mortMage = false;

    //archer
    archer = document.getElementById("archer");
    archerHP = 30;
    archerPA = 30;
    archerArmor = 10;
    archerAttack = 15;
    archerStunned = false;
    mortArcher = false;

    //var musicien
    musicien = document.getElementById("musicien");
    musicienHP = 40;
    musicienPA = 30;
    musicienArmor = 10;
    musicienAttack = 15;
    musicienStunned = false;
    mortMusicien = false;
    // Init var monstre

    //var Santa
    santa = document.getElementById("Louis");
    santaHP = 140;

    //var Knutallx
    knutallux = document.getElementById("knutallux");
    knutalluxHP = 80;

    //var KnutalluxDeux
    knutalluxDeux = document.getElementById("knutalluxDeux");
    knutalluxDeuxHP = 80;
    nbTour = 1;
    compteurRound = 0;
    monstreCible = 0;
    nomMonstreCible = "Louis";
    compteurMonstre = 0;
    monsterTarget = 0;

    //Init var button
    attack = document.getElementById("button1");
    speciale = document.getElementById("button2");
    defense = document.getElementById("button3");

}



function round() {
tourJoueur = true;
switch ( true){
    case (tourJoueur == true):
        switch (i){
            case (i == 0):
                console.log("assa");
                i = i+1;
                break;
            case (i == 1):
                console.log("mage");
                i = i+1;
                break;
            case (i == 2):
                console.log("musicien");
                i = i+1;
                break;
            case (i == 3):
                console.log("archer");
                i = i+1;
                tourJoueur = false;
                break;
        }
    break;
    case (tourJoueur == false):
        switch (j){
            case (j == 0):
                console.log("knutallux");
                break;
            case (j == 1):
                console.log("knutalluxDeux");
                break;
            case (j == 2):
                console.log("santa");
                break;
        }
    break;

}
}


 
function tourTemplier(playerName, assaAttack, assaPA) {
  document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " se prépare à agir ! <br> <input type='button' onclick='monstreBlessure(\""+playerName+"\","+assaAttack+")' value='Attaque'> <input type='button' onclick='assaDefend(\""+playerName+"\")' value='Defense'> <input type='button' onclick='assaSpecialAttack(\""+playerName+"\","+assaAttack+","+assaPA+")' value='Attaque Speciale'> ";
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
  document.getElementById("combatLog").innerHTML = "l'alié " + playerName + " se prépare à se défendre !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
}

function assaSpecialAttack(playerName, assaAttack, assaPA) {
  if (assaPA < 5) {
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " n'a pas suffisament de point d'action ! <br> <input type='button' onclick='monstreBlessure(\""+playerName+"\","+assaAttack+")' value='Attaque'> <input type='button' onclick='assaDefend(\""+playerName+"\")' value='Defense'>";
  }
  else if (playerName == "bleu") {
      assaArmor = assaArmor * 3;
      mageArmor = mageArmor * 3;
      archerArmor = archerArmor * 3;
      musicienArmor = musicienArmor * 3;
      assaPA = assaPA - 5;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " protège ses alliés !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else if (playerName == "rouge") {
      magePA = magePA - 5;
      updateAllHPA();
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
      archerPA = archerPA - 5;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " joint les mains en prière et soigne ses alliés !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else {
      musicienPA = musicienPA - 5;
      knutalluxDeuxHP = knutalluxDeuxHP - musicienAttack;
      knutalluxHP = knutalluxHP - musicienAttack;
      santaHP = santaHP - musicienAttack;
      updateAllHPA();
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

function updateAllHPA() {
  document.getElementById("assaHPA").innerHTML = "PV : " + assaHP + "/50<br>PA : " + assaPA + "/10";
  document.getElementById("mageHPA").innerHTML = "PV : " + mageHP + "/40 <br>PA : " + magePA + "/20";
  document.getElementById("archerHPA").innerHTML = "PV : " + archerHP + "/30<br>PA : " + archerPA + "/30";
  document.getElementById("musicienHPA").innerHTML = "PV : " + musicienHP + "/40<br>PA : " + musicienPA + "/30";
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

function afficherHP(id) {
  document.getElementById(id).style.visibility='visible'
}

function cacherHP(id) {
  document.getElementById(id).style.visibility='hidden'
}

function monstreBlessure(playerName, damage) {
  if (monstreCible == 0) {
      santaHP = santaHP - damage;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " inflige " + damage + "dégâts !<br> Il reste a Louis " + santaHP + " PV !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else if (monstreCible == 1) {
      knutalluxHP = knutalluxHP - damage;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + playerName + " inflige " + damage + "dégâts !<br> Il reste au monstre abyssale (1) " + knutalluxHP + " PV !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else {
      knutalluxDeuxHP = knutalluxDeuxHP - damage;
      updateAllHPA();
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
          updateAllHPA();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier bleu " + assaHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
  else if (monsterTarget == 1) {
      if (mageHP - (monsterAttack - mageArmor) > 0) {
          mageHP = mageHP - (monsterAttack - mageArmor);
          updateAllHPA();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier rouge " + mageHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
  else if (monsterTarget == 2) {
      if (archerHP - (monsterAttack - archerArmor) > 0) {
          archerHP = archerHP - (monsterAttack - archerArmor);
          updateAllHPA();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier vert " + archerHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
  else {
      if (musicienHP - (monsterAttack - musicienArmor) > 0) {
          musicienHP = musicienHP - (monsterAttack - musicienArmor);
          updateAllHPA();
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

attack.onclick = function(){
  //GetEnnemyProtected(ennemyTarget) is a function that sreturns the value of ennemy protected based on id
  //GetplayerAttack(currentPlayer) is a function that returns the attack value of the current player
    AttackEnnemy(GetplayerAttack(currentPlayer),GetEnnemyProtected(ennemyTarget));
    console.log("boutton attaque")
}

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
    case 3 :
      hpRouge -= dammageAmount;
    case 4:
      hpVert -= dammageAmount;

      break;
  }

  function EnnemyTurn();
  //Turn of the ennemy, ennemyProtected is reset and the ennemy attacks
 
};*/