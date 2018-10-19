let attack1 = document.querySelector("#img1");//.btn-atk1-norm
let changeImg1 = document.querySelector("#atk1norm");




function swapAtk() {

    changeImg1.src = "images/move/soldat1movatk.gif"; 
}



if (attack1.addEventListener){
    attack1.addEventListener("keydown", swapAtk());
}else if (attack1.attachEvent) {
    attack1.attachEvent("keyup", myFunction);
}
