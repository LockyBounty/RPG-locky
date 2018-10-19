let attack1 = document.querySelector(".btn-atk1-norm");
let changeImg1 = document.querySelector("#zone1norm");
let changeSizeBtnOnAtk = document.querySelector(".atk1-norm");
let changeSizeBtnOnAtk2 = document.querySelector(".atk1-moy");
let changeSizeBtnOnAtk3 = document.querySelector(".atk1-fort");
let changeSizeBtnOnAtk4 = document.querySelector(".atk1-def");
let logStats1 = document.querySelector(".log1");

let changeImg2 = document.querySelector("#zone2norm");
let logStats2 = document.querySelector(".log2");
let d = new Date();

/*

function swapAtk() {

    changeImg1.src = "images/move/soldat1movatk.gif"; 
}



if (attack1.addEventListener){
    attack1.addEventListener("click", swapAtk());
}
if (attack1.removeEventListener){
    attack1.removeEventListener("click", swapAtk());
}*/

let up = document.querySelector("#up");
let down = document.querySelector("#down");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

function presse(event) {
    switch (event.keyCode) { /*preferez event.keyCode � event.charCode ici, sinon �a fout la merde*/
        case 90:
            changeImg1.src = "images/move/soldat1movatkA.gif";
            changeSizeBtnOnAtk.style.maxWidth = "37px";
            changeSizeBtnOnAtk.style.maxHeight = "37px";

            changeImg2.src = "images/move/elf1movattaked.gif";
            break;
        case 81:
            changeImg1.src = "images/move/soldat1movatkA.gif";
            changeSizeBtnOnAtk2.style.maxWidth = "37px";
            changeSizeBtnOnAtk2.style.maxHeight = "37px";

            changeImg2.src = "images/move/elf1movattaked.gif";
            break;
        case 83:
            changeImg1.src = "images/move/soldat1movatkA.gif";
            changeSizeBtnOnAtk3.style.maxWidth = "37px";
            changeSizeBtnOnAtk3.style.maxHeight = "37px";

            changeImg2.src = "images/move/elf1movattaked.gif";
            break;

        case 87:
            changeImg1.src = "images/move/soldat1movatkA.gif";
            changeSizeBtnOnAtk4.style.maxWidth = "37px";
            changeSizeBtnOnAtk4.style.maxHeight = "37px";

            changeImg2.src = "images/move/elf1movattaked.gif";
            break;


    };
};

function relacheBouton(event) {
    switch (event.keyCode) {
        case 90:
            changeImg1.src = "images/move/soldat1stand.gif";
            changeSizeBtnOnAtk.style = null;

            
            el1 = document.createElement("LI");
            el1.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${ Math.floor(d.getMilliseconds()/10)}] Joueur 1 lance son attaque A !`;
            let afficheAuTop = logStats1.appendChild(el1);
            logStats1.insertBefore(afficheAuTop, logStats1.firstElementChild);

            changeImg2.src = "images/move/elf1stand.gif";
            el2 = document.createElement("LI");
            el2.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 2 se prend une patate !`;
            let afficheAuTop2 = logStats2.appendChild(el2);
            logStats2.insertBefore(afficheAuTop2, logStats2.firstElementChild);
            break;
        case 81:
            changeImg1.src = "images/move/soldat1stand.gif";
            changeSizeBtnOnAtk2.style = null;

            
            el2v2 = document.createElement("LI");
            el2v2.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${ Math.floor(d.getMilliseconds()/10)}] Joueur 1 lance son attaque B !`;
            let afficheAuTop2v2 = logStats1.appendChild(el2v2);
            logStats1.insertBefore(afficheAuTop2v2, logStats1.firstElementChild);

            changeImg2.src = "images/move/elf1stand.gif";
            el3 = document.createElement("LI");
            el3.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 2 se prend une rouste !`;
            let afficheAuTop3 = logStats2.appendChild(el3);
            logStats2.insertBefore(afficheAuTop3, logStats2.firstElementChild);
            break;
        case 83:
            /*changeImg1.src = "images/move/soldat1stand.gif";
            changeSizeBtnOnAtk3.style = null;

            
            el1 = document.createElement("LI");
            el1.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${ Math.floor(d.getMilliseconds()/10)}] Joueur 1 lance son attaque ultime !`;
            let afficheAuTop = logStats1.appendChild(el1);
            logStats1.insertBefore(afficheAuTop, logStats1.firstElementChild);

            changeImg2.src = "images/move/elf1stand.gif";
            el2 = document.createElement("LI");
            el2.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 2 prend cher !`;
            let afficheAuTop2 = logStats2.appendChild(el2);
            logStats2.insertBefore(afficheAuTop2, logStats2.firstElementChild);
            break;
        case 87:
            changeImg1.src = "images/move/soldat1stand.gif";
            changeSizeBtnOnAtk4.style = null;

            
            el1 = document.createElement("LI");
            el1.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${ Math.floor(d.getMilliseconds()/10)}] Joueur 1 lance sa defense pour une sec !`;
            let afficheAuTop = logStats1.appendChild(el1);
            logStats1.insertBefore(afficheAuTop, logStats1.firstElementChild);

            changeImg2.src = "images/move/elf1stand.gif";
            el2 = document.createElement("LI");
            el2.innerHTML = `[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${Math.floor(d.getMilliseconds() / 10)}] Joueur 2 se fait une raison...`;
            let afficheAuTop2 = logStats2.appendChild(el2);
            logStats2.insertBefore(afficheAuTop2, logStats2.firstElementChild);
            break;*/

    };
};

document.body.addEventListener("keydown", presse);

document.body.addEventListener("keyup", relacheBouton);