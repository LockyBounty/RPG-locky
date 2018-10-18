let attack1 = document.querySelector(".btn-atk1-norm");
let changeImg1 = document.querySelector("#atk1norm");
let changeSizeBtnOnAtk = document.querySelector(".atk1-norm");
let logStats1 = document.querySelector(".log1");


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
            
            break;
 

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
            logStats1.appendChild(el1); 

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