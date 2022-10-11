var blueTemplarHP;
var blueTemplarPA;
var blueTemplarArmor;
var blueTemplarAttack;
var blueTemplarStunned;
var mageHP;
var magePA;
var mageArmor;
var mageAttack;
var mageStunned;
var greenTemplarHP;
var greenTemplarPA;
var blackTemplarHP;
var blackTemplarPA;
var darkHeraldHP;
var abyssunHP;
var abyssdeuxHP;
var compteurRound;
var monstreCible;
var nomMonstreCible;
var compteurMonstre;
var randomInt;
var monsterTarget;


//Fonction d'initialisation des variables
function initialisation() {
    blueTemplarHP = 50;
    blueTemplarPA = 10;
    blueTemplarArmor = 10;
    blueTemplarAttack = 10;
    blueTemplarStunned = false;   
    mageHP = 40;
    magePA = 20;
    mageArmor = 5;
    mageAttack = 15;
    mageStunned = false;
    greenTemplarHP = 30;
    greenTemplarPA = 30;
    greenTemplarArmor = 10;
    greenTemplarAttack = 15;
    greenTemplarStunned = false;
    blackTemplarHP = 40;
    blackTemplarPA = 30;
    blackTemplarArmor = 10;
    blackTemplarAttack = 15;
    blackTemplarStunned = false;
    darkHeraldHP = 140;
    abyssunHP = 80;
    abyssdeuxHP = 80;
    nbTour = 1;
    compteurRound = 0;
    monstreCible = 0;
    nomMonstreCible = "Sombre Héraut";
    compteurMonstre = 0;
    monsterTarget = 0;
}

function round() {
  if (compteurRound == 0) {
      document.getElementById('blueTemplarHPA').style.color='black';
      document.getElementById('blackTemplarHPA').style.color='white';
      if (!blueTemplarStunned && blueTemplarHP > 0) {
          tourTemplier("bleu", blueTemplarAttack, blueTemplarPA);    
      }
      else if (blueTemplarHP <= 0) {
          document.getElementById("combatLog").innerHTML = "Le templier bleu est mort et ne peux plus attaquer !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
      }
      else {
          document.getElementById("combatLog").innerHTML = "Le templier bleu est incapable d'attaquer ce tour !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
      }
  }
  else if (compteurRound == 1) {
      document.getElementById('mageHPA').style.color='black';
      document.getElementById('blueTemplarHPA').style.color='white';
      if (!mageStunned && mageHP > 0) {
          tourTemplier("rouge", mageAttack, magePA);
      }
      else if (mageHP <= 0) {
          document.getElementById("combatLog").innerHTML = "Le templier rouge est mort et ne peux plus attaquer !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
      }
      else {
          document.getElementById("combatLog").innerHTML = "Le templier rouge est incapable d'attaquer ce tour !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
      }
  }
  else if (compteurRound == 2) {
      document.getElementById('greenTemplarHPA').style.color='black';
      document.getElementById('mageHPA').style.color='white';
      if (!greenTemplarStunned && greenTemplarHP > 0) {
          tourTemplier("vert", greenTemplarAttack, greenTemplarPA);
      }
      else if (greenTemplarHP <= 0) {
          document.getElementById("combatLog").innerHTML = "Le templier vert est mort et ne peux plus attaquer !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
      }
      else {
          document.getElementById("combatLog").innerHTML = "Le templier vert est incapable d'attaquer ce tour !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
      }
  }
  else if (compteurRound == 3) {
      document.getElementById('blackTemplarHPA').style.color='black';
      document.getElementById('greenTemplarHPA').style.color='white';
      if (!blackTemplarStunned && blackTemplarHP > 0) {
          tourTemplier("noir", blackTemplarAttack, blackTemplarPA);
      }
      else if (blackTemplarHP <= 0) {
          document.getElementById("combatLog").innerHTML = "Le templier noir est mort et ne peux plus attaquer !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
      }
      else {
          document.getElementById("combatLog").innerHTML = "Le templier noir est incapable d'attaquer ce tour !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
      }
  }
  else if (compteurRound == 4) {
      document.getElementById('blackTemplarHPA').style.color='white';
      monsterStrikeBack();
  }
}

function tourTemplier(templarName, templarAttack, templarPA) {
  document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " se prépare à agir ! <br> <input type='button' onclick='monstreBlessure(\""+templarName+"\","+templarAttack+")' value='Attaque'> <input type='button' onclick='templarDefend(\""+templarName+"\")' value='Defense'> <input type='button' onclick='templarSpecialAttack(\""+templarName+"\","+templarAttack+","+templarPA+")' value='Attaque Speciale'> ";
}

function templarDefend(templarName) {
  if (templarName == "bleu") {
      blueTemplarArmor = blueTemplarArmor *2
  }
  else if (templarName == "rouge") {
      mageArmor = mageArmor *2
  }
  else if (templarName == "vert") {
      greenTemplarArmor = greenTemplarArmor *2
  }
  else {
      blackTemplarArmor = blackTemplarArmor *2
  }
  document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " se prépare à se défendre !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
}

function templarSpecialAttack(templarName, templarAttack, templarPA) {
  if (templarPA < 5) {
      document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " n'a pas suffisament de point d'action ! <br> <input type='button' onclick='monstreBlessure(\""+templarName+"\","+templarAttack+")' value='Attaque'> <input type='button' onclick='templarDefend(\""+templarName+"\")' value='Defense'>";
  }
  else if (templarName == "bleu") {
      blueTemplarArmor = blueTemplarArmor * 3;
      mageArmor = mageArmor * 3;
      greenTemplarArmor = greenTemplarArmor * 3;
      blackTemplarArmor = blackTemplarArmor * 3;
      blueTemplarPA = blueTemplarPA - 5;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " protège ses alliés !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else if (templarName == "rouge") {
      magePA = magePA - 5;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " attaque aveuglément !<br> <input type='button' onclick='monstreBlessure(\""+templarName+"\","+templarAttack*3+")' value='NEXT'>";
  }
  else if (templarName == "vert") {
      if (blueTemplarHP < 50 && blueTemplarHP + 15 < 50) {
          blueTemplarHP = blueTemplarHP + 15;
      }
      else if (blueTemplarHP < 50) {
          blueTemplarHP = 50;
      }
      if (mageHP < 40 && mageHP + 15 < 40) {
          mageHP = mageHP + 15;
      }
      else if (mageHP < 40) {
          mageHP = 40;
      }
      if (greenTemplarHP < 30 && greenTemplarHP + 15 < 30) {
          greenTemplarHP = greenTemplarHP + 15;
      }
      else if (greenTemplarHP < 30) {
          greenTemplarHP = 30;
      }
      if (blackTemplarHP < 40 && blackTemplarHP + 15 < 40) {
          blackTemplarHP = blackTemplarHP + 15;
      }
      else if (blackTemplarHP < 40) {
          blackTemplarHP = 40;
      }
      greenTemplarPA = greenTemplarPA - 5;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " joint les mains en prière et soigne ses alliés !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else {
      blackTemplarPA = blackTemplarPA - 5;
      abyssdeuxHP = abyssdeuxHP - blackTemplarAttack;
      abyssunHP = abyssunHP - blackTemplarAttack;
      darkHeraldHP = darkHeraldHP - blackTemplarAttack;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " exécute sa juste vengeance !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
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
  document.getElementById("blueTemplarHPA").innerHTML = "PV : " + blueTemplarHP + "/50<br>PA : " + blueTemplarPA + "/10";
  document.getElementById("mageHPA").innerHTML = "PV : " + mageHP + "/40 <br>PA : " + magePA + "/20";
  document.getElementById("greenTemplarHPA").innerHTML = "PV : " + greenTemplarHP + "/30<br>PA : " + greenTemplarPA + "/30";
  document.getElementById("blackTemplarHPA").innerHTML = "PV : " + blackTemplarHP + "/40<br>PA : " + blackTemplarPA + "/30";
  document.getElementById("darkHeraldHP").innerHTML = "PV : " + darkHeraldHP + "/140";
  document.getElementById("abyssunHP").innerHTML = "PV : " + abyssunHP + "/80";
  document.getElementById("abyssdeuxHP").innerHTML = "PV : " + abyssdeuxHP + "/80";
  if (blueTemplarHP < 1) {
      document.getElementById('blueTemplar').style.visibility='hidden';
  }
  if (mageHP < 1) {
      document.getElementById('mage').style.visibility='hidden';
  }
  if (greenTemplarHP < 1) {
      document.getElementById('greenTemplar').style.visibility='hidden';
  }
  if (blackTemplarHP < 1) {
      document.getElementById('blackTemplar').style.visibility='hidden';
  }
  if (darkHeraldHP < 1) {
      document.getElementById('darkherald').style.visibility='hidden';
      document.getElementById('darkHeraldButton').style.visibility='hidden';
  }
  if (abyssunHP < 1) {
      document.getElementById('abyssun').style.visibility='hidden';
      document.getElementById('abyssunButton').style.visibility='hidden';
  }
  if (abyssdeuxHP < 1) {
      document.getElementById('abyssdeux').style.visibility='hidden';
      document.getElementById('abyssdeuxButton').style.visibility='hidden';
  }
  blueTemplarArmor = 10;
  mageArmor = 5;
  greenTemplarArmor = 10;
  blackTemplarArmor =  10;
  if (blueTemplarHP > 0 || mageHP > 0 || greenTemplarHP > 0 || blackTemplarHP > 0) {
      document.getElementById("combatLog").innerHTML = "Les templiers sont tous morts";
  }
  if (darkHeraldHP > 0 || abyssunHP > 0 || abyssdeuxHP > 0) {
      document.getElementById("combatLog").innerHTML = "Les monstres sont tous morts";
  }
}

function afficherHP(id) {
  document.getElementById(id).style.visibility='visible'
}

function cacherHP(id) {
  document.getElementById(id).style.visibility='hidden'
}

function monstreBlessure(templarName, damage) {
  if (monstreCible == 0) {
      darkHeraldHP = darkHeraldHP - damage;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " inflige " + damage + "dégâts !<br> Il reste au Sombre Héraut " + darkHeraldHP + " PV !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else if (monstreCible == 1) {
      abyssunHP = abyssunHP - damage;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " inflige " + damage + "dégâts !<br> Il reste au monstre abyssale (1) " + abyssunHP + " PV !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
  else {
      abyssdeuxHP = abyssdeuxHP - damage;
      updateAllHPA();
      document.getElementById("combatLog").innerHTML = "Le templier " + templarName + " inflige " + damage + "dégâts !<br> Il reste au monstre abyssale (2) " + abyssdeuxHP + " PV !<br> <input type='button' onclick='increaseCounter()' value='NEXT'>";
  }
}

function targetSelect(num) {
  monstreCible = num;
  if (num == 0) {
      nomMonstreCible = "Sombre Héraut";
      document.getElementById("darkHeraldButton").style.color='red';
      document.getElementById("abyssunButton").style.color='black';
      document.getElementById("abyssdeuxButton").style.color='black';
  }
  else if (num == 1) {
      nomMonstreCible = "Monstre abyssale (1)";
      document.getElementById("darkHeraldButton").style.color='black';
      document.getElementById("abyssunButton").style.color='red';
      document.getElementById("abyssdeuxButton").style.color='black';
  }
  else {
      nomMonstreCible = "Monstre abyssale (2)";
      document.getElementById("darkHeraldButton").style.color='black';
      document.getElementById("abyssunButton").style.color='black';
      document.getElementById("abyssdeuxButton").style.color='red';
  }
}

function monsterStrikeBack() {
  if (blueTemplarHP > 0 || mageHP > 0 || greenTemplarHP > 0 || blackTemplarHP > 0) {
      selectionCible();
      monsterName = "";
      monsterAttack = 0;
      if (darkHeraldHP > 0 && compteurMonstre == 0) {
          compteurMonstre = compteurMonstre + 1;
          monsterName = "Sombre Héraut";
          monsterAttack = 30;
          attackMonster(monsterAttack, monsterName)
      }
      else if (abyssunHP > 0 && compteurMonstre == 1) {
          compteurMonstre = compteurMonstre + 1;
          monsterName = "monstre abyssale (1)";
          monsterAttack = 20;
          attackMonster(monsterAttack, monsterName)
      }
      else if (abyssdeuxHP > 0 && compteurMonstre == 2) {
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
      if (blueTemplarHP - (monsterAttack - blueTemplarArmor) > 0) {
          blueTemplarHP = blueTemplarHP - (monsterAttack - blueTemplarArmor);
          updateAllHPA();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier bleu " + blueTemplarHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
  else if (monsterTarget == 1) {
      if (mageHP - (monsterAttack - mageArmor) > 0) {
          mageHP = mageHP - (monsterAttack - mageArmor);
          updateAllHPA();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier rouge " + mageHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
  else if (monsterTarget == 2) {
      if (greenTemplarHP - (monsterAttack - greenTemplarArmor) > 0) {
          greenTemplarHP = greenTemplarHP - (monsterAttack - greenTemplarArmor);
          updateAllHPA();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier vert " + greenTemplarHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
  else {
      if (blackTemplarHP - (monsterAttack - blackTemplarArmor) > 0) {
          blackTemplarHP = blackTemplarHP - (monsterAttack - blackTemplarArmor);
          updateAllHPA();
      }
      document.getElementById("combatLog").innerHTML = "Le " + monsterName + " inflige " + monsterAttack + "dégâts !<br> Il reste au templier rouge " + blackTemplarHP + " PV !<br> <input type='button' onclick='monsterStrikeBack()' value='NEXT'>";
  }
}

function selectionCible() {
  monsterTarget = Math.floor(Math.random() * 4);
  if (monsterTarget == 0 && blueTemplarHP <= 0) {
      selectionCible();
  }
  if (monsterTarget == 1 && mageHP <= 0) {
      selectionCible();
  }
  if (monsterTarget == 2 && greenTemplarHP <= 0) {
      selectionCible();
  }
  if (monsterTarget == 3 && blackTemplarHP <= 0) {
      selectionCible();
  }
}

// changer le message en début de combat 
message.innerHTML= "Récupèrer les cadeaux qu'il à volés";

function Attack (attackButton)

AttackButton.onclick = function(){
  //GetEnnemyProtected(ennemyTarget) is a function that sreturns the value of ennemy protected based on id
  //GetplayerAttack(currentPlayer) is a function that returns the attack value of the current player
  AttackEnnemy(GetplayerAttack(currentPlayer),GetEnnemyProtected(ennemyTarget));
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
    
function AttackEnnemy(dammageAmount,ennemyProtected) {
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
 
}

