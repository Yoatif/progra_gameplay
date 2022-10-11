//variable msg
var message= document.getElementById("msg1");
//varriable bibi
var bibi= document.getElementById("img_Dipsy");
var hpBibi= document.getElementById("hp_hero1");
var mpBibi= document.getElementById("mp_hero1");
var bibiHP = 100;
var bibiMP =100;
var atkBibi = 25;
var atkSpeBibi= 65;
//varriable Inox
var inox= document.getElementById("img_Inox");
var hpInox= document.getElementById("hp_hero2");
var mpInox= document.getElementById("mp_hero2");
var inoxHP = 100;
var inoxMP =100;
var atkInox = 25;
var atkSpeInox= 65;
//variable Di4bolic
var di4bo= document.getElementById("img_Di4bolic");
var hpDi4bo= document.getElementById("hp_hero3");
var mpDi4bo= document.getElementById("mp_hero3");
var di4boHP= 100;
var di4boMP=100;
var atkDi4bo= 25;
var atkSpeDi4bo= 65;
//varriable Kirryu
var kirryu= document.getElementById("img_Kirryu");
var hpKirryu= document.getElementById("hp_hero4");
var mpKirryu= document.getElementById("mp_hero4");
var kirryuHP= 100;
var kirryuMP=100;
var atkKirryu= 25;
var atkSpeKirryu= 65;
//varriable boss
var nicolas= document.getElementById("img_boss");
var hpBossHTML = document.getElementById("hp_boss");
var bossHP = 100;
var resBoss = 15;
var atkboss = 10;
//varriable miniboss
var knutallux= document.getElementById("img_miniboss");
var hpMinibossHTML = document.getElementById("hp_miniboss");
var minibossHP= 100;
var resMiniboss= 15;
var atkMiniboss= 10;
//varriable lutin rouge
var lutin_rouge= document.getElementById("img_rouge");
var hpRouge= document.getElementById("monstre1");
var rougeHP= 100;
var resrouge= 15;
var atkRouge= 10;
//varriable lutin vert 
var lutin_vert= document.getElementById("img_vert");
var hpVert= document.getElementById("hp_monstre2");
var vertHP= 100;
var resVert= 15;
var atkVert= 10;
//button
var attackButton = document.getElementById("button1");
var specialeButton = document.getElementById("button2");
var defenseButton = document.getElementById("button3");
//bool fin du jeu
var win = (bossHP<=0 && minibossHP<=0 && rougeHP<=0 && vertHP<=0);
var defeat = (bibiHP<=0 && inoxHP<=0 && di4boHP<=0 && kirryuHP<=0);
// changer le message en début de combat 
message.innerHTML= "Récupèrer les cadeaux qu'il à volés";

function Attack (attackButton)
    

AttackButton.onclick = function(){
  //GetEnnemyProtected(ennemyTarget) is a function that returns the value of ennemy protected based on id
  //GetplayerAttack(currentPlayer) is a function that returns the attack value of the current player
  AttackEnnemy(GetplayerAttack(currentPlayer),GetEnnemyProtected(ennemyTarget));
}

function GetEnnemyProtected (id) {
  case 1 :
    return ennemy1Protected;
  
  case 2 :
    return ennemy2Protected;

  case 3 :
    return ennemy3Protected;
  
  case 4: 
    return ennemy3Protected
    
function AttackEnnemy(dammageAmount,ennemyProtected) {
  if (ennemyProtected == true) {
    return;//quitte la fonction
  }
  //change d'ennemie selon la séléction
  switch (ennemyTarget) {
    case 1 :
      bossHP -= (dammageAmount-res);
      break;
    case 2 :
      ennemy2Hp -= (dammageAmount-res);
    case 3 :
      hpRouge -= (dammageAmount-res);
    case 4:
      hpVert -= (dammageAmount-res);

      break;
  }

  function S
  //Turn of the ennemy, ennemyProtected is reset and the ennemy attacks
  EnnemyTurn();
}

