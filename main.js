let attack1 = document.querySelector(".btn-atk1-norm");
let changeImg1 = document.querySelector("#zone1norm");
let changeSizeBtnOnAtk = document.querySelector(".atk1-norm");
let logStats1 = document.querySelector(".log1");

let changeImg2 = document.querySelector("#zone2norm");
let logStats2 = document.querySelector(".log2");

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
    switch (event.keyCode) {/*preferez event.keyCode à event.charCode ici, sinon ça fout la merde*/
        case 90:
            changeImg1.src = "images/move/soldat1movatkA.gif"; 
            changeSizeBtnOnAtk.style.maxWidth = "37px";
            changeSizeBtnOnAtk.style.maxHeight = "37px";
            
            changeImg2.src = "images/move/elf1movattaked.gif"; 
            break;
        case 81:
        case 83:
        case 87:
 

    };
};

function relacheBouton(event) {
    switch (event.keyCode) {
        case 90:
            changeImg1.src = "images/move/soldat1stand.gif";
            changeSizeBtnOnAtk.style = null;
            
            let d = new Date();
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
        case 40:
            down.classList.remove("highlight");
            break;
        case 37:
            left.classList.remove("highlight");
            break;
        case 39:
            right.classList.remove("highlight");
            break;

    };
};

document.body.addEventListener("keydown", presse);

document.body.addEventListener("keyup", relacheBouton);