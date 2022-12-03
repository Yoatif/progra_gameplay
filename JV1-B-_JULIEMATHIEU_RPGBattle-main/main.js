// DOM Variables
var myBody = document.getElementsByTagName("body")[0];
var defeatScreen = document.getElementById("defeatscreen");
var victoryScreen = document.getElementById("victoryscreen");

var dialogue = document.getElementById("dialogue");
var actionBox = document.getElementById("actions");
var differentActions = document.getElementsByClassName("actions");
var attackAction = document.getElementById("action1");
var specialAction = document.getElementById("action2");
var defenseAction = document.getElementById("action3");
var manaCost = document.getElementById("manacost");
var volumeMute = document.getElementById("volume"); 

var enemiesDOM = document.getElementsByClassName("enemies");
var enemiesinfoDOM = document.getElementsByClassName("enemiesinfo");
var enemiesHPDOM = document.getElementsByClassName("enemieshp");
var enemiesSpritesDOM = document.getElementsByClassName("enemiessprites")

var heroesinfoDOM = document.getElementsByClassName("info");
var heroesDOM = document.getElementsByClassName("heroes");
var heroesNamesDOM = document.getElementsByClassName("heroesname");
var heroesHPDOM = document.getElementsByClassName("heroeshp");
var heroesHPTextDOM = document.getElementsByClassName("heroeshptext");
var heroesMPDOM = document.getElementsByClassName("heroesmp");
var heroesMPTextDOM = document.getElementsByClassName("heroesmptext");
var heroesSpritesDOM = document.getElementsByClassName("heroessprites");
var heroselectionDOM = document.getElementsByClassName("heroselection");

//Audio
var musicTheme = new Audio('audio/BRPG_Take_Courage_FULL_Loop.wav');
musicTheme.loop = true; 
var defeatTheme = new Audio('audio/BRPG_Defeat_Stinger.wav');
var victoryTheme = new Audio('audio/BRPG_Victory_Music_Loop.wav');
victoryTheme.loop = true; 
var actualSound = musicTheme; 


//Game Variables
soundMuted = true; 

var isAttacking = false;
var isHealing = false;
var isBuffing = false;
var target = enemy1;

var hero1 = {};
hero1.name = "Arador";
hero1.hp = 120;
hero1.maxHp = 120;
hero1.mp = 50;
hero1.maxMp = 50;
hero1.special = "Gros coup";
hero1.attack = 70;
hero1.alive = true;
hero1.manaCost = 20;
hero1.invulnerability = false;
hero1.idleSprite = "img/hero1.gif";
hero1.attackSprite = "img/hero_attack1.gif";
hero1.specialSprite = "img/hero_special1.gif";
hero1.deadSprite = "img/hero_dead1.png";
hero1.hitSprite = "img/hero_hit1.png";
hero1.previousAction = 3;

var hero2 = {};
hero2.name = "Meldyon";
hero2.hp = 100;
hero2.maxHp = 100;
hero2.mp = 60;
hero2.maxMp = 60;
hero2.special = "Attaque de zone";
hero2.attack = 80;
hero2.alive = true;
hero2.manaCost = 20;
hero2.invulnerability = false;
hero2.idleSprite = "img/hero2.gif";
hero2.attackSprite = "img/hero_attack2.gif";
hero2.specialSprite = "img/hero_special2.gif";
hero2.deadSprite = "img/hero_dead2.png";
hero2.hitSprite = "img/hero_hit2.png";
hero2.previousAction = 3;

var hero3 = {};
hero3.name = "Hatskab K’iin";
hero3.hp = 90;
hero3.maxHp = 90;
hero3.mp = 80;
hero3.maxMp = 80;
hero3.special = "Enchantement";
hero3.attack = 60;
hero3.alive = true;
hero3.manaCost = 20;
hero3.invulnerability = false;
hero3.idleSprite = "img/hero3.gif";
hero3.attackSprite = "img/hero_attack3.gif";
hero3.specialSprite = "img/hero_special3.gif";
hero3.deadSprite = "img/hero_dead3.png";
hero3.hitSprite = "img/hero_hit3.png";
hero3.previousAction = 3;

var hero4 = {};
hero4.name = "Ephira";
hero4.hp = 80;
hero4.maxHp = 80;
hero4.mp = 80;
hero4.maxMp = 80;
hero4.special = "Soin";
hero4.attack = 50;
hero4.alive = true;
hero4.manaCost = 20;
hero4.invulnerability = false;
hero4.idleSprite = "img/hero4.gif";
hero4.attackSprite = "img/hero_attack4.gif";
hero4.specialSprite = "img/hero_special4.gif";
hero4.deadSprite = "img/hero_dead4.png";
hero4.hitSprite = "img/hero_hit4.png";
hero4.previousAction = 3;

var enemy1 = {};
enemy1.name = "Astaroth";
enemy1.hp = 400;
enemy1.maxHp = 400;
enemy1.attack = 60;
enemy1.alive = true;
enemy1.idleSprite = "img/enemy1.gif";
enemy1.attackSprite = "img/enemy_attack1.gif";
enemy1.deadSprite = "img/enemy_dead1.gif";

var enemy2 = {};
enemy2.name = "Serviteur 1";
enemy2.hp = 200;
enemy2.maxHp = 150;
enemy2.attack = 30;
enemy2.alive = true;
enemy2.idleSprite = "img/enemy2.gif";
enemy2.attackSprite = "img/enemy_attack2.gif";
enemy2.deadSprite = "img/enemy_dead2.gif";

var enemy3 = {};
enemy3.name = "Serviteur 2";
enemy3.hp = 200;
enemy3.maxHp = 150;
enemy3.attack = 30;
enemy3.alive = true;
enemy3.idleSprite = "img/enemy2.gif";
enemy3.attackSprite = "img/enemy_attack2.gif";
enemy3.deadSprite = "img/enemy_dead2.gif";

var heroes = [hero1, hero2, hero3, hero4];
var enemies = [enemy1, enemy2, enemy3];

var currentHero = 0;
var nbTour = 0;
var nbTourEnemies = 0;
var nbHeroAlive = 4;
var nbEnemiesAlive = 3;

//SET UP
updateDOM();

//Set player max HP and MP
for (i = 0; i < 4; i++) {
    heroesNamesDOM[i].innerHTML = heroes[i].name;
    heroesHPDOM[i].max = heroes[i].maxHp;
    heroesMPDOM[i].max = heroes[i].maxMp;
}

for (i = 0; i < 3; i++) {
    
    enemiesHPDOM[i].max = enemies[i].maxHp;
}


//FUNCTIONS
function selectTarget() {
    isAttacking = true;
    dialogue.innerHTML = "Choisissez une cible.";
}

function attackEnemy(hero, cible, heroAnim, cibleAnim) {
    //Random damages according to hero's attack
    var damages = Math.floor(Math.random() * ((hero.attack + 5) - (hero.attack - 5) + 1)) + (hero.attack - 5);
    dialogue.innerHTML = hero.name + " utilise une attaque normale et inflige " + damages;
    cible.hp = cible.hp - damages;
    if (cible.hp <= 0) {
        cible.hp = 0;
        cible.alive = false;
        nbEnemiesAlive -= 1;

        //Animation enemy dead
        cibleAnim.src = cible.deadSprite;
      
    }
    //Animations
    heroAnim.src = hero.attackSprite;
    heroAnim.animate([
        // keyframes
        { transform: 'translateX(0)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(0px)' },
    ], {
        // timing options
        duration: 600,

    });
    setTimeout(() => {
        heroAnim.src = hero.idleSprite;
    }, 600);


    hero.previousAction = 0;
}

function defend(hero) {
    hero.invulnerability = true;
    dialogue.innerHTML = hero.name + " se défend et bloque les prochains dégats.";

    hero.previousAction = 2;
}

function areaOfEffect() {
    var damages = hero2.attack * 0.75;
    dialogue.innerHTML = hero2.name + " utilise une attaque de zone.";
    for (i = 0; i < enemies.length; i++) {
        enemies[i].hp -= damages;
        if (enemies[i].hp <= 0) {
            enemies[i].hp = 0;
            enemies[i].alive = false;
            nbEnemiesAlive -= 1;

            //Animation enemy dead
            enemiesSpritesDOM[i].src = enemies[i].deadSprite;
        
        }
    }
    //Animations
    heroesSpritesDOM[1].src = hero2.specialSprite;
    heroesSpritesDOM[1].animate([
        // keyframes
        { transform: 'translateX(0)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(0px)' },
    ], {
        // timing options
        duration: 600,

    });
    setTimeout(() => {
        heroesSpritesDOM[1].src = hero2.idleSprite;
    }, 600);

    hero2.mp -= hero2.manaCost;
    hero2.previousAction = 1;
}

function hugeDamages() {
    var damages = hero1.attack * 2;
    var randomEnemy = Math.floor(Math.random() * enemies.length);
    while (enemies[randomEnemy].alive == false) {
        randomEnemy = Math.floor(Math.random() * enemies.length);
    }
    dialogue.innerHTML = hero1.name + " concentre toute sa force et assène un violent coup au hasard.";
    enemies[randomEnemy].hp -= damages;
    if (enemies[randomEnemy].hp <= 0) {
        enemies[randomEnemy].hp = 0;
        enemies[randomEnemy].alive = false;
        nbEnemiesAlive -= 1;

        //Animation enemy dead
        enemiesSpritesDOM[randomEnemy].src = enemies[randomEnemy].deadSprite;
      
    }
    //Animations
    heroesSpritesDOM[0].src = hero1.specialSprite;
    heroesSpritesDOM[0].animate([
        // keyframes
        { transform: 'translateX(0)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(-50px)' },
        { transform: 'translateX(0px)' },
    ], {
        // timing options
        duration: 600,

    });
    setTimeout(() => {
        heroesSpritesDOM[0].src = hero1.idleSprite;
    }, 600);

    hero1.mp -= hero1.manaCost;
    hero1.previousAction = 1;
}

function heal(cible) {
    cible.hp += hero4.attack/2;
    if( cible.hp>cible.maxHp ){
        cible.hp = cible.maxHp; 
    }
    dialogue.innerHTML = hero4.name + " soigne " + cible.name +" de " + (hero4.attack/2) + " HP." ;
    hero4.mp -= hero4.manaCost;
    hero4.previousAction = 1;
}

function buff(cible) {
    cible.attack += 20;
    dialogue.innerHTML = hero3.name + " augmente l'attaque de " + cible.name + " de 20.";
    hero3.mp -= hero3.manaCost;
    hero3.previousAction = 1;
}

function updateDOM() {
    //Update enemies HP on DOM
    for (i = 0; i < 3; i++) {
        enemiesinfoDOM[i].innerHTML = enemies[i].name + "<br>" + enemies[i].hp + " / " + enemies[i].maxHp;
        if(enemies[i].hp <= 0){
            enemiesHPDOM[i].style.display = "none"; 
        }
        enemiesHPDOM[i].value = enemies[i].hp;
    }
    //Update player info on DOM
    for (i = 0; i < heroes.length; i++) {
        heroesHPTextDOM[i].innerHTML = "HP <span class='big'>"+ heroes[i].hp+"</span> / " + heroes[i].maxHp ; 
        heroesMPTextDOM[i].innerHTML = "MP <span class='big'>"+ heroes[i].mp+"</span> / " + heroes[i].maxMp ; 
        heroesHPDOM[i].value = heroes[i].hp;
        heroesMPDOM[i].value = heroes[i].mp;
    }

    
    //Update special action text
    if (heroes[currentHero].manaCost > heroes[currentHero].mp) {
        specialAction.innerHTML = "<span class='selection'>▶</span><p class='notAvailable'>" + heroes[currentHero].special + "</p><p id='manacost'>"+heroes[currentHero].manaCost +" MP</p>";
        specialAction.classList.add("notAvailable");
    } else {
        specialAction.innerHTML = "<span class='selection'>▶</span><p>" + heroes[currentHero].special + "</p><p id='manacost'>"+ heroes[currentHero].manaCost +" MP</p>";
    }



    //Update hero selection
    for (i = 0; i < 4; i++) {
        if (i == currentHero) {
            heroselectionDOM[i].style.visibility = "visible";
        } else {
            heroselectionDOM[i].style.visibility = "hidden";
        }
    }

    

    //Hide previous action 
    for (i = 0; i < 3; i++) {
        if (i == heroes[currentHero].previousAction) {
            differentActions[i].classList.add("notAvailable");
        } else {
            differentActions[i].classList.remove("notAvailable");
        }
    }
}

function enemiesTurn(i) {
    setTimeout(function () {
        if (!checkDefeat()) {
            //Choose random hero and choose again if (s)he is dead
            var randomHero = Math.floor(Math.random() * heroes.length);
            while (heroes[randomHero].alive == false) {
                randomHero = Math.floor(Math.random() * heroes.length);
            }

            //Animation attack enemy
            enemiesSpritesDOM[i].src = enemies[i].attackSprite;
            setTimeout(() => {
                enemiesSpritesDOM[i].src = enemies[i].idleSprite; 
            }, 600);

            if (heroes[randomHero].invulnerability == false) {
                dialogue.innerHTML = enemies[i].name + " frappe " + heroes[randomHero].name;
                heroes[randomHero].hp = heroes[randomHero].hp - enemies[i].attack;
                //Animation hit
                heroesSpritesDOM[randomHero].src = heroes[randomHero].hitSprite;
                setTimeout(() => {
                    if(heroes[randomHero].alive){
                        heroesSpritesDOM[randomHero].src = heroes[randomHero].idleSprite; 
                    }  
                }, 200);
            } else {
                dialogue.innerHTML = enemies[i].name + " frappe " + heroes[randomHero].name + " mais ce dernier bloque les dégats.";
                heroes[randomHero].invulnerability = false;
            }


            if (heroes[randomHero].hp <= 0) {
                heroes[randomHero].hp = 0;
                heroes[randomHero].alive = false;
                heroesSpritesDOM[randomHero].src = heroes[randomHero].deadSprite;
                nbHeroAlive -= 1;
                findCurrentHero(0);
            }
            updateDOM();
        } else {
            updateDOM();
            //DEFEAT SCREEN
            defeatScreen.style.visibility = "visible";
            
            
        }
        if (checkDefeat()) {
            setTimeout(function () {
            defeatScreen.style.visibility = "visible";
            actualSound.pause();
            actualSound = defeatTheme;
            if(!soundMuted){
                actualSound.play();
            }
           
              
            }, 1000);

        }
        nbTourEnemies += 1;
        if ((nbTourEnemies >= nbEnemiesAlive) && !checkDefeat()) {
            setTimeout(() => {
                actionBox.style.visibility = "visible";
                dialogue.innerHTML = "Au tour des héros !"
            }, 2000);
            
            nbTourEnemies = 0;
        }



    }, 2000 * (i + 1));
}

function findCurrentHero(pas) {

    currentHero += pas;
    if (currentHero > 3) {
        currentHero = 0;
    }

    while (heroes[currentHero].alive == false && nbHeroAlive > 0) {
        currentHero += 1;
        if (currentHero > 3) {
            currentHero = 0;
        }
    }

}

function checkDefeat() {
    var conditionDefeat = 0;
    for (i = 0; i < heroes.length; i++) {
        if (heroes[i].alive == false) {
            conditionDefeat += 1;
        }
    }
    if (conditionDefeat == 4) {
        return true;
    }
}

function checkVictory() {
    var conditionVictory = 0;
    for (i = 0; i < enemies.length; i++) {
        if (enemies[i].alive == false) {
            conditionVictory += 1;
        }
    }
    if (conditionVictory == 3) {
        return true;
    }else{
        return false; 
    }
}

//EVENTS

//Event on clicking attack button
attackAction.onclick = function () {
    if (isAttacking == false && !checkDefeat()) {
        isHealing = false;
        isBuffing = false;
        isAttacking = true;
        dialogue.innerHTML = "Choisissez une cible.";
    }
}

//Event on clicking defense button
defenseAction.onclick = function () {
    isAttacking = false;
    defend(heroes[currentHero]);
    findCurrentHero(1);
    nbTour += 1;
    if ((nbTour > nbHeroAlive - 1) && !checkVictory()) {
        nbTour = 0;
        actionBox.style.visibility = "hidden";
        setTimeout(function () {
            dialogue.innerHTML = "Les ennemis ripostent !";

        }, 1000);

        //Loop to delay enemies attacks
        for (i = 0; i < enemies.length; i++) {

            if (enemies[i].alive == true) {
                enemiesTurn(i);
            }
        }

    }
    updateDOM();
}

//Event on clicking special button
specialAction.onclick = function () {
    if (currentHero == 0) {

        isAttacking = false;
        hugeDamages();
        findCurrentHero(1);
        nbTour += 1;
        if ((nbTour > nbHeroAlive - 1) && !checkVictory()) {
            nbTour = 0;
            actionBox.style.visibility = "hidden";
            setTimeout(function () {
                dialogue.innerHTML = "Les ennemis ripostent !";

            }, 1000);

            //Loop to delay enemies attacks
            for (i = 0; i < enemies.length; i++) {

                if (enemies[i].alive == true) {
                    enemiesTurn(i);
                }
            }

        }
        updateDOM();
        if (checkVictory()) {
            victoryScreen.style.visibility = "visible";
            actualSound.pause();
            actualSound = victoryTheme;
            if(!soundMuted){
                actualSound.play();
            }
            

        }

    } else if (currentHero == 1) {
        isAttacking = false;
        areaOfEffect();
        findCurrentHero(1);
        nbTour += 1;
        if ((nbTour > nbHeroAlive - 1) && !checkVictory()) {
            nbTour = 0;
            actionBox.style.visibility = "hidden";
            setTimeout(function () {
                dialogue.innerHTML = "Les ennemis ripostent !";

            }, 1000);

            //Loop to delay enemies attacks
            for (i = 0; i < enemies.length; i++) {

                if (enemies[i].alive == true) {
                    enemiesTurn(i);
                }
            }

        }
        updateDOM();
        if (checkVictory()) {
            victoryScreen.style.visibility = "visible"; 
            actualSound.pause();
            actualSound = victoryTheme;
            if(!soundMuted){
                actualSound.play();
            }
        }

    } else if (currentHero == 2) {
        isAttacking = false;
        dialogue.innerHTML = "Choisissez un allié à buffer";
        isBuffing = true;
    } else if (currentHero == 3) {
        isAttacking = false;
        dialogue.innerHTML = "Choisissez un allié à soigner";
        isHealing = true;
    }
}

//Event on clicking enemies when in state "isAttacking"
for (i = 0; i < 3; i++) {
    enemiesDOM[i].onclick = function () {

        findCurrentHero(0);
        //Set the target depending on player's click
        if (isAttacking) {
            if (this.id == "enemy1") {
                target = enemy1;
                targetAnim = enemiesSpritesDOM[0];
            } else if (this.id == "enemy2") {
                target = enemy2;
                targetAnim = enemiesSpritesDOM[1];
            } else {
                target = enemy3;
                targetAnim = enemiesSpritesDOM[2];
            }

            if (target.alive == true) {
                //Attack enemy
                attackEnemy(heroes[currentHero], target, heroesSpritesDOM[currentHero], targetAnim);
                isAttacking = false;

                //Incremente current hero
                findCurrentHero(1);

                //Make enemies attack if all heroes alive already did
                nbTour += 1;
                if ((nbTour > nbHeroAlive - 1) && !checkVictory()) {
                    nbTour = 0;
                    actionBox.style.visibility = "hidden";
                    setTimeout(function () {
                        dialogue.innerHTML = "Les ennemis ripostent !";

                    }, 1000);
                    //Loop to delay enemies attacks
                    for (i = 0; i < enemies.length; i++) {

                        if (enemies[i].alive == true) {
                            enemiesTurn(i);
                        }
                    }

                }
            }


            //Update DOM
            updateDOM();
            console.log(currentHero);

            //Check Victory
            if (checkVictory()) {
                victoryScreen.style.visibility = "visible"; 
                actualSound.pause();
                actualSound = victoryTheme;
                if(!soundMuted){
                    actualSound.play();
                }
            }
        }

    }
}

//Event on clicking on allies when healing or buffing
for (i = 0; i < 4; i++) {
    heroesDOM[i].onclick = function () {
        if (this.id == "hero1") {
            ally = hero1;
        } else if (this.id == "hero2") {
            ally = hero2;
        } else if (this.id == "hero3") {
            ally = hero3;
        } else {
            ally = hero4;
        }
        if (isHealing && ally.alive) {


            heal(ally);

            //Animations
            heroesSpritesDOM[3].src = hero4.specialSprite;
            heroesSpritesDOM[3].animate([
                // keyframes
                { transform: 'translateX(0)' },
                { transform: 'translateX(-50px)' },
                { transform: 'translateX(-50px)' },
                { transform: 'translateX(-50px)' },
                { transform: 'translateX(0px)' },
            ], {
                // timing options
                duration: 600,

            });
            setTimeout(() => {
                heroesSpritesDOM[3].src = hero4.idleSprite;
            }, 600);


            isHealing = false;

            findCurrentHero(1);
            nbTour += 1;
            if ((nbTour > nbHeroAlive - 1) && !checkVictory()) {
                nbTour = 0;
                actionBox.style.visibility = "hidden";
                setTimeout(function () {
                    dialogue.innerHTML = "Les ennemis ripostent !";

                }, 1000);

                //Loop to delay enemies attacks
                for (i = 0; i < enemies.length; i++) {

                    if (enemies[i].alive == true) {
                        enemiesTurn(i);
                    }
                }

            }
            updateDOM();
        } else if (isHealing && !ally.alive) {
            dialogue.innerHTML = "Cet allié ne peut plus prendre part au combat."
        }

        //If clicking on an ally to buff
        if (isBuffing && ally.alive) {


            buff(ally);

            //Animations
            heroesSpritesDOM[2].src = hero3.specialSprite;
            heroesSpritesDOM[2].animate([
                // keyframes
                { transform: 'translateX(0)' },
                { transform: 'translateX(-50px)' },
                { transform: 'translateX(-50px)' },
                { transform: 'translateX(-50px)' },
                { transform: 'translateX(0px)' },
            ], {
                // timing options
                duration: 600,

            });
            setTimeout(() => {
                heroesSpritesDOM[2].src = hero3.idleSprite;
            }, 600);
         

            isBuffing = false;

            findCurrentHero(1);
            nbTour += 1;
            if ((nbTour > nbHeroAlive - 1) && !checkVictory()) {
                nbTour = 0;
                actionBox.style.visibility = "hidden";
                setTimeout(function () {
                    dialogue.innerHTML = "Les ennemis ripostent !";

                }, 1000);

                //Loop to delay enemies attacks
                for (i = 0; i < enemies.length; i++) {

                    if (enemies[i].alive == true) {
                        enemiesTurn(i);
                    }
                }

            }
            updateDOM();
        } else if (isBuffing && !ally.alive) {
            dialogue.innerHTML = "Vous ne pouvez pas améliorer un allié tombé au combat. "
        }
    }
}


//Mute Unmute sound
volumeMute.onclick = function(){
    if(soundMuted){
        actualSound.play();
        volumeMute.src = "img/volume-mute.png";
        soundMuted = false; 
    }else{
        actualSound.pause();
        volumeMute.src = "img/volume.png";
        soundMuted = true; 
    }
  
}
