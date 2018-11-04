// DECLARATION DE CLASSE ET OBJETS

class Hero {
    constructor(name, job, weapon, frame, movimg, atkAB, atkCD) {
        this.name = name;
        this.job = job;
        this.weapon = weapon;
        this.frame = frame;
        this.movimg = movimg;
        this.atkAB = atkAB;
        this.atkCD = atkCD;
        this.lifeP = 100;
        this.attackP = 15;
        this.defenceP = 12;
        this.staminaP = 100;
        this.lvl = 1;
        this.expP = 0;
    }
}


let hero1 = new Hero("Jeanne", "Chevalière", "Theudericus", "images/soldat1.png", "images/move/soldat1stand.gif", "images/move/soldat1movatkA.gif", "images/move/soldat1invoke.gif" );
let hero2 = new Hero("Catherine", "Pyromancienne", "Pyro-Spiro", "images/mago1.png", "images/move/mago1stand.gif", "images/move/mago1atkA.gif", "images/move/mago1invoke.gif");
let hero3 = new Hero("Eleanor", "Prêtresse", "Natura", "images/elf1.png", "images/move/elf1stand.gif", "images/move/elf1atkA.gif", "images/move/elf1invoke.gif");
let hero4 = new Hero("Nathanael", "Valkyrie", "Galadbolg", "images/ange1.png", "images/move/ange1stand.gif", "images/move/ange1atkA.gif", "images/move/ange1invoke.gif");
let hero5 = new Hero("Galathe", "Combattante", "Poings-de-fer", "images/fighter1.png", "images/move/fighter1stand.gif", "images/move/fighter1atkA.gif", "images/move/fighter1invoke.gif");

let hero = [hero1, hero2, hero3, hero4, hero5];

class Ennemy {
    constructor(name, lifeP) {
        this.name = name;
        this.lifeP = lifeP;
        this.lvl = "??";

    }
}

let ennemy1 = new Ennemy("Villain", 1600);
let ennemyBoss1 = new Ennemy("DragonX", 1000);

let ennemy = [ennemy1, ennemyBoss1];


// DECLARATION DE VARIABLES

let cptGlobal = 0;
let cptGlobal2 = 0;

let attack1 = document.querySelector(".btn-atk1-norm");
let changeImg1 = document.querySelector("#zone1norm");
let changeSizeBtnOnAtk = document.querySelector(".atk1-norm");
let changeSizeBtnOnAtk2 = document.querySelector(".atk1-moy");
let changeSizeBtnOnAtk3 = document.querySelector(".atk1-fort");
let changeSizeBtnOnAtk4 = document.querySelector(".atk1-def");


let attackOnHP1 = document.querySelector(".perso1-vie");
let attackOnHP2 = document.querySelector(".perso2-vie");

let attackStamina1 = document.querySelector(".perso1-stamina");


let logStats1 = document.querySelector(".log1");

let changeImg2 = document.querySelector("#zone2norm");
let logStats2 = document.querySelector(".log2");

let changeZone1 = document.querySelector(".zone-perso1");

let putEffects1 = document.querySelector("#zone1eff");
let putEffects2 = document.querySelector("#zone2eff");
let putEffects2v2 = document.querySelector("#zone2-1eff");

let lifePoints = 100; //pourcent
let lifePointsEnnemy = 100;


let sonAtkA = document.getElementById("soundAtk1");
let sonAtkB = document.getElementById("soundAtk2");
let sonAtkC = document.getElementById("soundAtk3");
let sonAtkD = document.getElementById("soundAtk4");

document.querySelector("#pv2").innerHTML = `${lifePointsEnnemy}%`;

let charArray = ["images/soldat1.png", "images/mago1.png", "images/elf1.png", "images/ange1.png", "images/fighter1.png"];
let selectPlus = document.querySelector("#selectionPlus");
let selectMoins = document.querySelector("#selectionMoins");
let selectFrame = document.querySelector("#perso-select");
let nameJob = document.querySelector("#nom-job");
let boutonSelectionHeros = document.querySelector(".heros");
let selectionMenu = document.querySelector(".heros-aff");
let boutonSelectionStats = document.querySelector(".infos");
let selectionMenuB = document.querySelector(".infos-aff");
let boutonSelectionShop = document.querySelector(".shop");
let selectionMenuC = document.querySelector(".shop-aff");

let initialStamina = hero[cptGlobal].staminaP;

let frameP1 = document.querySelector("#img1");
let frameP2;

let totalPV1 = 0;
let totalPV2 = 0; //<-- var pour afficher pv de la barre avec 2 decimales

// BASIC Souris

const basicAttackButton = document.querySelector(".atk1-norm");
basicAttackButton.addEventListener("mousedown", basicAttackStart);
basicAttackButton.addEventListener("mouseup", basicAttackEnd);
console.log(basicAttackButton);
//MEDIUM Souris
const mediumAttackButton = document.querySelector(".atk1-moy");
mediumAttackButton.addEventListener("mousedown", mediumAttackStart);
mediumAttackButton.addEventListener("mouseup", mediumAttackEnd);

//ULTIME Souris
const hardAttackButton = document.querySelector(".atk1-fort");
hardAttackButton.addEventListener("mousedown", hardAttackStart);
hardAttackButton.addEventListener("mouseup", hardAttackEnd);

//PROTECT Souris
const defenseButton = document.querySelector(".atk1-def");
defenseButton.addEventListener("mousedown", defenseSkillStart);
defenseButton.addEventListener("mouseup", defenseSkillEnd);


let up = document.querySelector("#up");
let down = document.querySelector("#down");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

/*
 *** ATTACK FUNCTIONS
 */

function updateCombatLogs(attackName) {
    let d = new Date();
    let dateTimeFormattedInFrench = `${d.toLocaleTimeString("fr-FR")}.${Math.floor(d.getMilliseconds() / 10)}`;

    switch (attackName) {
        case "basic":
            el1 = document.createElement("LI");
            el1.innerHTML = `[${dateTimeFormattedInFrench}] ${hero[cptGlobal].name} attaque et inflige  <font face="Chakra" color ="yellowgreen">${hero[cptGlobal].attackP/2}</font> points de dégats !`;
            let afficheAuTop = logStats1.appendChild(el1);
            logStats1.insertBefore(afficheAuTop, logStats1.firstElementChild);
            el2 = document.createElement("LI");
            el2.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 2 se prend une patate !`;
            let afficheAuTop2 = logStats2.appendChild(el2);
            logStats2.insertBefore(afficheAuTop2, logStats2.firstElementChild);
            break;
        case "medium":
            el2v2 = document.createElement("LI");
            el2v2.innerHTML = `[${dateTimeFormattedInFrench}] ${hero[cptGlobal].name} attaque avec ${hero[cptGlobal].weapon} et inflige <font face="Chakra" color ="gold">${hero[cptGlobal].attackP}</font> points de dégats !`;
            let afficheAuTop2v2 = logStats1.appendChild(el2v2);
            logStats1.insertBefore(afficheAuTop2v2, logStats1.firstElementChild);
            el81 = document.createElement("LI");
            el81.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 2 se prend une rouste !`;
            let afficheAuTop81 = logStats2.appendChild(el81);
            logStats2.insertBefore(afficheAuTop81, logStats2.firstElementChild);
            break;
        case "hard":
            el3v3 = document.createElement("LI");
            el3v3.innerHTML = `[${dateTimeFormattedInFrench}] ${hero[cptGlobal].name} lance son attaque ultime et inflige <font face="Chakra" color ="orange">${hero[cptGlobal].attackP*3}</font> points de dégats !`;
            let afficheAuTop3v3 = logStats1.appendChild(el3v3);
            logStats1.insertBefore(afficheAuTop3v3, logStats1.firstElementChild);
            el83 = document.createElement("LI");
            el83.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 2 prend cher !`;
            let afficheAuTop83 = logStats2.appendChild(el83);
            logStats2.insertBefore(afficheAuTop83, logStats2.firstElementChild);
            break;
        case "def":
            el4v4 = document.createElement("LI");
            el4v4.innerHTML = `[${dateTimeFormattedInFrench}] ${hero[cptGlobal].name} lance sa barriere de protection !`;
            let afficheAuTop4v4 = logStats1.appendChild(el4v4);
            logStats1.insertBefore(afficheAuTop4v4, logStats1.firstElementChild);


            el87 = document.createElement("LI");
            el87.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 2 se fait une raison...`;
            let afficheAuTop87 = logStats2.appendChild(el87);
            logStats2.insertBefore(afficheAuTop87, logStats2.firstElementChild);
            break;

    }

}
// AUDIO
function playAudio1() {
    sonAtkA.play();
    sonAtkA.currentTime = 0.07;
}

function pauseAudio1() {
    sonAtkA.pause();
    // sonAtkA.currentTime = 0.9;
}

function playAudio2() {
    sonAtkB.play();
    sonAtkB.currentTime = 0.07;
}

function pauseAudio2() {
    sonAtkB.pause();
    // sonAtkA.currentTime = 0.9;
}

function playAudio3() {
    sonAtkC.play();
    sonAtkC.currentTime = 0.07;
}

function pauseAudio3() {
    sonAtkC.pause();
    // sonAtkA.currentTime = 0.9;
}

function playAudio4() {
    sonAtkD.play();
    sonAtkD.currentTime = 0.07;
}

function pauseAudio4() {
    sonAtkD.pause();
    // sonAtkA.currentTime = 0.9;
}

// CALCUL POURCENTAGE ATTACK

function calculPourcentage() {
    let a = (Math.floor(hero[cptGlobal].attackP * 100) / ennemy[cptGlobal2].lifeP).toFixed(2);
    parseFloat(a);
    return a;
}

// ATTACKS 

function basicAttackStart() {

    changeImg1.src = `${hero[cptGlobal].atkAB}`;

    changeSizeBtnOnAtk.style.maxWidth = "37px";
    changeSizeBtnOnAtk.style.maxHeight = "37px";


    playAudio1();

    if (lifePointsEnnemy >= 0) {

        lifePointsEnnemy -= (calculPourcentage()) / 2;
        totalPV2 = Math.round(lifePointsEnnemy * 100) / 100; //<-------prend 2 chiffre apres decimale
        console.log(`degats = ${(calculPourcentage()) / 2}%`);
        attackOnHP2.style.width = `${totalPV2}%`;

    }
    else if(lifePointsEnnemy < 0){
        lifePointsEnnemy = 0;
    }
    changeImg2.src = "images/move/elf1movattaked.gif";
    updateCombatLogs("basic");
}

function basicAttackEnd() {
    changeImg1.src = `${hero[cptGlobal].movimg}`;
    changeSizeBtnOnAtk.style = null;
    changeImg2.src = "images/move/elf1stand.gif";
    

    pauseAudio1();

    /*si on veut reset le son, mais ca donne un mauvais rendu */
    if (lifePointsEnnemy <= 0) {
        changeImg1.src = `${hero[cptGlobal].movimg}`;
        putEffects1.removeAttribute("src");
        changeImg2.src = "images/move/elf1dead.gif";
        setTimeout(onceDead, 500);

        affBarVie2();
    }

    affBarVie2();
}

// MEDIUM ATTACK

function mediumAttackStart() {
    if (initialStamina > 9) {
        initialStamina -= 10;
        attackStamina1.style.width = `${initialStamina}%`;

        changeImg1.src = `${hero[cptGlobal].atkAB}`;
        changeSizeBtnOnAtk2.style.maxWidth = "37px";
        changeSizeBtnOnAtk2.style.maxHeight = "37px";
        putEffects2v2.src = "images/skills/atk-moy1.gif";
        changeImg2.src = "images/move/elf1movattaked.gif";
        playAudio2();

        if (lifePointsEnnemy >= 0) {
            lifePointsEnnemy -= calculPourcentage();
            totalPV2 = Math.round(lifePointsEnnemy * 100) / 100; //<-------prend 2 chiffre apres decimale
            console.log(`degats = ${calculPourcentage()}%`);
            attackOnHP2.style.width = `${totalPV2}%`;
        } else if (lifePointsEnnemy < 0) {
            lifePointsEnnemy = 0;
            attackOnHP2.style.width = `0%`;
            changeImg2.src = "images/move/elf1fall.gif";
        }
    updateCombatLogs("medium");
    }
}

function mediumAttackEnd() {

    changeImg1.src = `${hero[cptGlobal].movimg}`;
    changeSizeBtnOnAtk2.style = null;
    changeImg2.src = "images/move/elf1stand.gif";
    
    putEffects2v2.removeAttribute("src");
    document.querySelector("#pv2").innerHTML = `${totalPV2}%`;//<---- affiche a l ecran que j ai remplace par affBarVie2(); ailleurs
    pauseAudio2();

    if (lifePointsEnnemy < 0) {
        changeImg1.src = `${hero[cptGlobal].movimg}`;
        putEffects1.removeAttribute("src");
        putEffects2v2.removeAttribute("src");
        changeImg2.src = "images/move/elf1dead.gif";
        setTimeout(onceDead, 500);
        document.querySelector("#pv2").innerHTML = `${totalPV2}%`;//<---- affiche a l ecran 
    }

}

// HARD ATTACK 
function hardAttackStart() {

    changeImg1.src = `${hero[cptGlobal].atkCD}`;
    putEffects1.src = "images/skills/shield-p1.gif";

    changeSizeBtnOnAtk3.style.maxWidth = "37px";
    changeSizeBtnOnAtk3.style.maxHeight = "37px";
    playAudio3();
    if (lifePointsEnnemy >= 0) {
        lifePointsEnnemy -= calculPourcentage()*3;
        totalPV2 = Math.round(lifePointsEnnemy *100)/100; //<-------prend 2 chiffre apres decimale
        console.log(`degats = ${calculPourcentage()*3}%`);
        attackOnHP2.style.width = `${totalPV2}%`;

    } else if (lifePointsEnnemy < 0){
        lifePointsEnnemy = 0;
        attackOnHP2.style.width = `0%`;

    }

    changeImg2.src = "images/move/elf1fall.gif";
    putEffects2.src = "images/skills/thunderAtkv4.gif";
    updateCombatLogs("hard");
}

function hardAttackEnd() {

    changeImg1.src = `${hero[cptGlobal].movimg}`;
    putEffects1.removeAttribute("src");
    changeSizeBtnOnAtk3.style = null;
    changeImg2.src = "images/move/elf1stand.gif";
    putEffects2.removeAttribute("src");
    pauseAudio3();

    if (lifePointsEnnemy <= 0) {
        changeImg1.src = `${hero[cptGlobal].movimg}`;
        putEffects1.removeAttribute("src");
        changeImg2.src = "images/move/elf1dead.gif";
        /*confirm("Bravo, vous avez occi l'ennemi !");*/
        setTimeout(onceDead, 500);
        affBarVie2();
    }
    affBarVie2();
}

//DEFENSE SKILL
function defenseSkillStart() {
    if (initialStamina > 19) {
        initialStamina -= 20;
        attackStamina1.style.width = `${initialStamina}%`;

        changeImg1.src = `${hero[cptGlobal].atkCD}`;
        putEffects1.src = "images/skills/shield-p2.gif";

        changeSizeBtnOnAtk4.style.maxWidth = "37px";
        changeSizeBtnOnAtk4.style.maxHeight = "37px";
        updateCombatLogs("def");
        playAudio4();
    }
}

function defenseSkillEnd() {

    changeImg1.src = `${hero[cptGlobal].movimg}`;

    putEffects1.removeAttribute("src");
    changeSizeBtnOnAtk4.style = null;
    
    pauseAudio4();
}

// DEAD + REZ

function onceDead() {
    let rez = confirm("Excellent, vous avez vaincu l'ennemi !\nVoulez-vous le soigner ?");
    if (rez === true) {
        lifePointsEnnemy = 100;
        attackOnHP2.style.width = `${lifePointsEnnemy}%`;
        document.querySelector("#pv2").innerHTML = `${lifePointsEnnemy}%`;
        changeImg2.src = "images/move/elf1stand.gif";
    }

}

// AFFICHER POURCENTAGE BAR 

function affBarVie2() {
    return document.querySelector("#pv2").innerHTML = `${totalPV2}%`;
}

// REGEN STAMINA 


function regenA() {
    if (initialStamina < hero[cptGlobal].staminaP) {
        (initialStamina)++;
    }else {
    clearInterval();
    }
    attackStamina1.style.width = `${initialStamina}%`;
}
setInterval(regenA, 200);





// AFFICHER MENUS ; attention aux z-index a cause de la superposition

selectionMenu.style.display = 'none'; /*none / block / flex ... */
selectionMenu.style.zIndex = '-1';
selectionMenuB.style.display = 'none';
selectionMenuB.style.zIndex = '-1';
selectionMenuC.style.display = 'none';
selectionMenuC.style.zIndex = '-1';
let boutSelChar = false;
let boutSelStats = false;
let boutSelShop = false;

let affMenuSelect = () => {
    if (boutSelChar === false) {
        selectionMenu.style.display = 'flex';
        selectionMenu.style.zIndex = '1000';
        boutSelChar = true;

    } else {
        selectionMenu.style.display = 'none';
        selectionMenu.style.zIndex = '-1';
        boutSelChar = false;
    }

}


let affMenuStats = () => {
    if (boutSelStats === false) {
        selectionMenuB.style.display = 'flex';
        selectionMenuB.style.zIndex = '1000';
        boutSelStats = true;
    } else {
        selectionMenuB.style.display = 'none';
        selectionMenuB.style.zIndex = '-1';
        boutSelStats = false;
    }
}
let affMenuShop = () => {
    if (boutSelShop === false) {
        selectionMenuC.style.display = 'flex';
        selectionMenuC.style.zIndex = '1000';
        boutSelShop = true;
    } else {
        selectionMenuC.style.display = 'none';
        selectionMenuC.style.zIndex = '-1';
        boutSelShop = false;
    }
}


// PLACER IMAGES SELECTION BOX



let placeAllInOne = () => {
selectFrame.src = `${charArray[cptGlobal]}`;
    nameJob.innerHTML = `${hero[cptGlobal].name} / ${hero[cptGlobal].job}`;
    frameP1.src = `${hero[cptGlobal].frame}`;
    changeImg1.src = `${hero[cptGlobal].movimg}`;
document.querySelector(".perso1-nom").innerHTML = `${hero[cptGlobal].name}`;
document.querySelector(".stat-row1").innerHTML = `${hero[cptGlobal].name}`;
document.querySelector("#lp-row2").innerHTML = `${hero[cptGlobal].lifeP}`;
document.querySelector("#weap-row1-2").innerHTML = `${hero[cptGlobal].weapon}`;
document.querySelector("#atk-row3").innerHTML = `${hero[cptGlobal].attackP}`;
document.querySelector("#def-row4").innerHTML = `${hero[cptGlobal].defenceP}`;
document.querySelector("#lvl-row5").innerHTML = `${hero[cptGlobal].lvl}`;
document.querySelector("#exp-row6").innerHTML = `${hero[cptGlobal].expP}`;
}

let placerImagesPlus = () => {
    cptGlobal += 1;
    if (cptGlobal > charArray.length - 1) {
        cptGlobal = 0;
    }
    selectFrame.src = `${charArray[cptGlobal]}`;
    
    if (cptGlobal !== charArray.length - 1) {
        nameJob.innerHTML = `${hero[cptGlobal].name} / ${hero[cptGlobal].job}`; /*Accede au tableau avec les objets "hero"*/
       
    } else {
        nameJob.innerHTML = `${hero[cptGlobal].name}`;
    }
    placeAllInOne();
    
}

let placerImagesMoins = () => {
    --cptGlobal;
    if (cptGlobal < 0) {
        cptGlobal = charArray.length - 1;
    }
    console.log(cptGlobal);
    selectFrame.src = `${charArray[cptGlobal]}`;
    if (cptGlobal !== charArray.length - 1) {
        nameJob.innerHTML = `${hero[cptGlobal].name} / ${hero[cptGlobal].job}`; /*Accede au tableau avec les objets "hero"*/
    } else {
        nameJob.innerHTML = `${hero[cptGlobal].name}`;
    }
    placeAllInOne();
}


// APPUYER TOUCHES


function presse(event) {
    /*console.log(event.keyCode);*/
    if (event.keyCode != null) {
        switch (event.keyCode) {
            case 90:
                basicAttackStart();
                break;
            case 81:
                mediumAttackStart();
                break;
            case 83:
                hardAttackStart();
                break;
            case 87:
                defenseSkillStart();
                break;
        }
    }
};

function relacheBouton(event) {
    let d = new Date();
    /*console.log(event.keyCode);*/

    switch (event.keyCode) {
        case 90:
            basicAttackEnd();
            break;
        case 81:
            mediumAttackEnd();
            break;
        case 83:
            hardAttackEnd();
            break;
        case 87:
            defenseSkillEnd();
            break;
    };
};


placeAllInOne();
regenA();

document.body.addEventListener("keydown", presse);

document.body.addEventListener("keyup", relacheBouton);

boutonSelectionHeros.addEventListener("click", affMenuSelect);
selectPlus.addEventListener("click", placerImagesPlus);
selectMoins.addEventListener("click", placerImagesMoins);


boutonSelectionStats.addEventListener("click", affMenuStats);
boutonSelectionShop.addEventListener("click", affMenuShop);
console.log(hero1.name, hero1.job, hero1.weapon);