// DECLARATION DE CLASSE ET OBJETS

class Heros {
    constructor(hauteur, largeur) {
        this.hauteur = hauteur;
        this.largeur = largeur;
    }
}






// DECLARATION DE VARIABLES

let attack1 = document.querySelector(".btn-atk1-norm");
let changeImg1 = document.querySelector("#zone1norm");
let changeSizeBtnOnAtk = document.querySelector(".atk1-norm");
let changeSizeBtnOnAtk2 = document.querySelector(".atk1-moy");
let changeSizeBtnOnAtk3 = document.querySelector(".atk1-fort");
let changeSizeBtnOnAtk4 = document.querySelector(".atk1-def");


let attackOnHP1 = document.querySelector(".perso1-vie");
let attackOnHP2 = document.querySelector(".perso2-vie");




let logStats1 = document.querySelector(".log1");

let changeImg2 = document.querySelector("#zone2norm");
let logStats2 = document.querySelector(".log2");

let changeZone1 = document.querySelector(".zone-perso1");

let putEffects1 = document.querySelector("#zone1eff");
let putEffects2 = document.querySelector("#zone2eff");
let putEffects2v2 = document.querySelector("#zone2-1eff");


let lifePoints = 100;

/*function calculPourcentage() {
    return (chosen1[attack] $ 100)/data_value);--> chosen 1 et data_value a faire
}*/
let sonAtkA = document.getElementById("soundAtk1"); 
let sonAtkB = document.getElementById("soundAtk2"); 
let sonAtkC = document.getElementById("soundAtk3"); 
let sonAtkD = document.getElementById("soundAtk4"); 

document.querySelector("#pv2").innerHTML = `${lifePoints}%`;

let charArray = ["images/soldat1.png","images/mago1.png","images/elf1.png","images/ange1.png","images/fighter1.png","images/aleatoire.png"];
let selectPlus = document.querySelector("#selectionPlus");
let selectMoins = document.querySelector("#selectionMoins");
let selectFrame = document.querySelector("#perso-select");
let boutonSelectionHeros = document.querySelector(".heros");
let selectionMenu = document.querySelector(".heros-aff"); 


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
            el1.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 1 lance son attaque A !`;
            let afficheAuTop = logStats1.appendChild(el1);
            logStats1.insertBefore(afficheAuTop, logStats1.firstElementChild);
            el2 = document.createElement("LI");
            el2.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 2 se prend une patate !`;
            let afficheAuTop2 = logStats2.appendChild(el2);
            logStats2.insertBefore(afficheAuTop2, logStats2.firstElementChild);
            break;
        case "medium":
            el2v2 = document.createElement("LI");
            el2v2.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 1 lance son attaque B !`;
            let afficheAuTop2v2 = logStats1.appendChild(el2v2);
            logStats1.insertBefore(afficheAuTop2v2, logStats1.firstElementChild);
            el81 = document.createElement("LI");
            el81.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 2 se prend une rouste !`;
            let afficheAuTop81 = logStats2.appendChild(el81);
            logStats2.insertBefore(afficheAuTop81, logStats2.firstElementChild);
            break;
        case "hard":
            el3v3 = document.createElement("LI");
            el3v3.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 1 lance son attaque ultime !`;
            let afficheAuTop3v3 = logStats1.appendChild(el3v3);
            logStats1.insertBefore(afficheAuTop3v3, logStats1.firstElementChild);
            el83 = document.createElement("LI");
            el83.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 2 prend cher !`;
            let afficheAuTop83 = logStats2.appendChild(el83);
            logStats2.insertBefore(afficheAuTop83, logStats2.firstElementChild);
            break;
        case "def":
            el4v4 = document.createElement("LI");
            el4v4.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 1 lance sa barriere de protection !`;
            let afficheAuTop4v4 = logStats1.appendChild(el4v4);
            logStats1.insertBefore(afficheAuTop4v4, logStats1.firstElementChild);

            
            el87 = document.createElement("LI");
            el87.innerHTML = `[${dateTimeFormattedInFrench}] Joueur 2 se fait une raison...`;
            let afficheAuTop87 = logStats2.appendChild(el87);
            logStats2.insertBefore(afficheAuTop87, logStats2.firstElementChild);
            break;

    }

}

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


function basicAttackStart() {
    
    changeImg1.src = "images/move/soldat1movatkA.gif";
    
    changeSizeBtnOnAtk.style.maxWidth = "37px";
    changeSizeBtnOnAtk.style.maxHeight = "37px";


    playAudio1();

    if (lifePoints > 0) {
        lifePoints -= 1;
        attackOnHP2.style.width = `${lifePoints}%`;

    }
    changeImg2.src = "images/move/elf1movattaked.gif";
}

function basicAttackEnd() {
    changeImg1.src = "images/move/soldat1stand.gif";
    changeSizeBtnOnAtk.style = null;
    changeImg2.src = "images/move/elf1stand.gif";
    updateCombatLogs("basic");
    
    pauseAudio1();
    
    /*si on veut reset le son, mais ca donne un mauvais rendu */
    if (lifePoints === 0) {
        changeImg1.src = "images/move/soldat1stand.gif";
        putEffects1.removeAttribute("src");
        changeImg2.src = "images/move/elf1dead.gif";
        setTimeout(onceDead,500);
        
        affBarVie2();
    }
    
    affBarVie2();
} 

// MEDIUM ATTACK

function mediumAttackStart() {
    changeImg1.src = "images/move/soldat1movatkA.gif";
    changeSizeBtnOnAtk2.style.maxWidth = "37px";
    changeSizeBtnOnAtk2.style.maxHeight = "37px";
    putEffects2v2.src = "images/skills/atk-moy1.gif";
    changeImg2.src = "images/move/elf1movattaked.gif";
    playAudio2();

    if (lifePoints > 10) {
        lifePoints -= 10;
        attackOnHP2.style.width = `${lifePoints}%`;
    }
     else {
        lifePoints = 0;
        attackOnHP2.style.width = `0%`;
        changeImg2.src = "images/move/elf1fall.gif";
    }

    
}
function mediumAttackEnd() {
    
    changeImg1.src = "images/move/soldat1stand.gif";
    changeSizeBtnOnAtk2.style = null;
    changeImg2.src = "images/move/elf1stand.gif";
    updateCombatLogs("medium");
    putEffects2v2.removeAttribute("src");
    document.querySelector("#pv2").innerHTML = `${lifePoints}%`;
    pauseAudio2();

    if (lifePoints === 0) {
        changeImg1.src = "images/move/soldat1stand.gif";
        putEffects1.removeAttribute("src");
        putEffects2v2.removeAttribute("src");
        changeImg2.src = "images/move/elf1dead.gif";
        setTimeout(onceDead, 500);
        document.querySelector("#pv2").innerHTML = `${lifePoints}%`;
    }
    
}

// HARD ATTACK 
function hardAttackStart() {
    
    changeImg1.src = "images/move/soldat1invoke.gif";
    putEffects1.src = "images/skills/shield-p1.gif";

    changeSizeBtnOnAtk3.style.maxWidth = "37px";
    changeSizeBtnOnAtk3.style.maxHeight = "37px";
    playAudio3();
    if (lifePoints>35) {
        lifePoints -= 35;
        attackOnHP2.style.width = `${lifePoints}%`;
        
    } else {
        lifePoints = 0;
        attackOnHP2.style.width = `0%`;
        
    }

    changeImg2.src = "images/move/elf1fall.gif";
    putEffects2.src = "images/skills/thunderAtkv4.gif";
}

function hardAttackEnd() {
    
    changeImg1.src = "images/move/soldat1stand.gif";
    putEffects1.removeAttribute("src");
    changeSizeBtnOnAtk3.style = null;
    changeImg2.src = "images/move/elf1stand.gif";
    putEffects2.removeAttribute("src");
    updateCombatLogs("hard");
    document.querySelector("#pv2").innerHTML = `${lifePoints}%`;
    pauseAudio3();

    if (lifePoints === 0) {
        changeImg1.src = "images/move/soldat1stand.gif";
        putEffects1.removeAttribute("src");
        changeImg2.src = "images/move/elf1dead.gif";
        confirm("Bravo, vous avez occi l'ennemi !");
        setTimeout(onceDead, 500);
        document.querySelector("#pv2").innerHTML = `${lifePoints}%`;
    }
    
}

//DEFENSE SKILL
function defenseSkillStart () {
    changeImg1.src = "images/move/soldat1invoke.gif";
    putEffects1.src = "images/skills/shield-p2.gif";
    
    changeSizeBtnOnAtk4.style.maxWidth = "37px";
    changeSizeBtnOnAtk4.style.maxHeight = "37px";
    playAudio4();
    
}
function defenseSkillEnd () {
    
    changeImg1.src = "images/move/soldat1stand.gif";

    putEffects1.removeAttribute("src");
    changeSizeBtnOnAtk4.style = null;
    
    updateCombatLogs("def");
    pauseAudio4();
}

// DEAD + REZ

function onceDead() {
    let rez = confirm("Excellent, vous avez vaincu l'ennemi !\nVoulez-vous le soigner ?");
    if (rez === true) {
        lifePoints += 100;
        attackOnHP2.style.width = `${lifePoints}%`;
        document.querySelector("#pv2").innerHTML = `${lifePoints}%`;
        changeImg2.src = "images/move/elf1stand.gif";
    }
    
}

// AFFICHER POURCENTAGE BAR 

function affBarVie2() {
return document.querySelector("#pv2").innerHTML = `${lifePoints}%`;
}

// AFFICHER MENUS

let affMenuSelect = () => {
    selectionMenu.style.display = 'none'; /*none ou block*/
    selectionMenu.style.zIndex= '-1';
    console.log("click ok");
    return this;
  
}


// PLACER IMAGES SELECTION BOX

let cptGlobal =0;
selectFrame.src = `${charArray[cptGlobal]}`;

let placerImagesPlus = () => {
    cptGlobal += 1;
    if (cptGlobal > charArray.length -1 ) {
        cptGlobal = 0;
    }
    selectFrame.src = `${charArray[cptGlobal]}`;
    console.log(cptGlobal);
    
}

let placerImagesMoins = () => {
    --cptGlobal;
    if (cptGlobal < 0 ) {
        cptGlobal = charArray.length - 1;
    }
    console.log(cptGlobal);
    selectFrame.src = `${charArray[cptGlobal]}`;

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


// placerImages();


document.body.addEventListener("keydown", presse);

document.body.addEventListener("keyup", relacheBouton);

boutonSelectionHeros.addEventListener("click", affMenuSelect);
selectPlus.addEventListener("click", placerImagesPlus);
selectMoins.addEventListener("click", placerImagesMoins);
