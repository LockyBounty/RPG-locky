let attack1 = document.querySelector(".btn-atk1-norm");
let changeImg1 = document.querySelector("#zone1norm");
let changeSizeBtnOnAtk = document.querySelector(".atk1-norm");
let changeSizeBtnOnAtk2 = document.querySelector(".atk1-moy");
let changeSizeBtnOnAtk3 = document.querySelector(".atk1-fort");
let changeSizeBtnOnAtk4 = document.querySelector(".atk1-def");
let logStats1 = document.querySelector(".log1");

let changeImg2 = document.querySelector("#zone2norm");
let logStats2 = document.querySelector(".log2");

let changeZone1 = document.querySelector(".zone-perso1");

let putEffects2 = document.querySelector("#zone2eff");

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


let up = document.querySelector("#up");
let down = document.querySelector("#down");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

/*
*** ATTACK FUNCTIONS
*/

function updateCombatLogs(attackName) {
    let d = new Date();
    
    switch (attackName) {
        case "basic":
            el1 = document.createElement("LI");
            el1.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 1 lance son attaque A !`;
            let afficheAuTop = logStats1.appendChild(el1);
            logStats1.insertBefore(afficheAuTop, logStats1.firstElementChild);
            el2 = document.createElement("LI");
            el2.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 2 se prend une patate !`;
            let afficheAuTop2 = logStats2.appendChild(el2);
            logStats2.insertBefore(afficheAuTop2, logStats2.firstElementChild);
            break;
        case "medium":
            el2v2 = document.createElement("LI");
            el2v2.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 1 lance son attaque B !`;
            let afficheAuTop2v2 = logStats1.appendChild(el2v2);
            logStats1.insertBefore(afficheAuTop2v2, logStats1.firstElementChild);
            el81 = document.createElement("LI");
            el81.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 2 se prend une rouste !`;
            let afficheAuTop81 = logStats2.appendChild(el81);
            logStats2.insertBefore(afficheAuTop81, logStats2.firstElementChild);
            break;
        case "hard":
            el3v3 = document.createElement("LI");
            el3v3.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 1 lance son attaque ultime !`;
            let afficheAuTop3v3 = logStats1.appendChild(el3v3);
            logStats1.insertBefore(afficheAuTop3v3, logStats1.firstElementChild);
            el83 = document.createElement("LI");
            el83.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 2 prend cher !`;
            let afficheAuTop83 = logStats2.appendChild(el83);
            logStats2.insertBefore(afficheAuTop83, logStats2.firstElementChild);
            break;

    }

}

function basicAttackStart() {
    changeImg1.src = "images/move/soldat1movatkA.gif";
    // changeZone1.style.animation = "moveChar1 1s linear";
    changeSizeBtnOnAtk.style.maxWidth = "37px";
    changeSizeBtnOnAtk.style.maxHeight = "37px";
    changeImg2.src = "images/move/elf1movattaked.gif";
}

function basicAttackEnd() {
    changeImg1.src = "images/move/soldat1stand.gif";
    changeSizeBtnOnAtk.style = null;
    changeImg2.src = "images/move/elf1stand.gif";
    updateCombatLogs("basic");

}

// MEDIUM ATTACK

function mediumAttackStart() {
    changeImg1.src = "images/move/soldat1movatkA.gif";
    changeSizeBtnOnAtk2.style.maxWidth = "37px";
    changeSizeBtnOnAtk2.style.maxHeight = "37px";
    changeImg2.src = "images/move/elf1movattaked.gif";
}
function mediumAttackEnd() {
    let d = new Date();
    changeImg1.src = "images/move/soldat1stand.gif";
    changeSizeBtnOnAtk2.style = null;
    changeImg2.src = "images/move/elf1stand.gif";
    updateCombatLogs("medium");
}

// HARD ATTACK 
function hardAttackStart() {
    changeImg1.src = "images/move/soldat1movatkA.gif";
    changeSizeBtnOnAtk3.style.maxWidth = "37px";
    changeSizeBtnOnAtk3.style.maxHeight = "37px";
    changeImg2.src = "images/move/elf1fall.gif";
    putEffects2.src = "images/skills/thunderSkill.gif";
}

function hardAttackEnd() {
    let d = new Date();
    changeImg1.src = "images/move/soldat1stand.gif";
    changeSizeBtnOnAtk3.style = null;
    changeImg2.src = "images/move/elf1stand.gif";
    putEffects2.removeAttribute("src");
    updateCombatLogs("hard");

}

//DEFENSE SKILL
let defenseSkillStart =()=> {

}
let defenseSkillEnd = () => {

}

function presse(event) {
    console.log(event.keyCode);
    if (event.keyCode != null) {
        switch (event.keyCode) { /*preferez event.keyCode a event.charCode ici, sinon ca fout la merde*/
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
                changeImg1.src = "images/move/soldat1movatkA.gif";
                changeSizeBtnOnAtk4.style.maxWidth = "37px";
                changeSizeBtnOnAtk4.style.maxHeight = "37px";

                changeImg2.src = "images/move/elf1movattaked.gif";
                break;


        }
    }


};

function relacheBouton(event) {
    let d = new Date();
    console.log(event.keyCode);
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
            changeImg1.src = "images/move/soldat1stand.gif";
            changeSizeBtnOnAtk4.style = null;


            el4v4 = document.createElement("LI");
            el4v4.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 1 lance sa defense pour une sec !`;
            let afficheAuTop4v4 = logStats1.appendChild(el4v4);
            logStats1.insertBefore(afficheAuTop4v4, logStats1.firstElementChild);

            changeImg2.src = "images/move/elf1stand.gif";
            el87 = document.createElement("LI");
            el87.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 2 se fait une raison...`;
            let afficheAuTop87 = logStats2.appendChild(el87);
            logStats2.insertBefore(afficheAuTop87, logStats2.firstElementChild);
            break;

    };
};

document.body.addEventListener("keydown", presse);

document.body.addEventListener("keyup", relacheBouton);