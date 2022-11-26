function logout(){
    window.location.href = "populares.html";
}

var nomem1 = document.querySelector("#nomemsc1");
var imgm1 = document.getElementById("imgmusica1");
var nota1 = document.querySelector("#nota1");
var link1 = document.querySelector("#linkmsc1");

var nomem2 = document.querySelector("#nomemsc2");
var imgm2 = document.getElementById("imgmusica2");
var nota2 = document.querySelector("#nota2");
var link2 = document.querySelector("#linkmsc2");

var nomem3 = document.querySelector("#nomemsc3");
var imgm3 = document.getElementById("imgmusica3");
var nota3 = document.querySelector("#nota3");
var link3 = document.querySelector("#linkmsc3");

var nomem4 = document.querySelector("#nomemsc4");
var imgm4 = document.getElementById("imgmusica4");
var nota4 = document.querySelector("#nota4");
var link4 = document.querySelector("#linkmsc4");

function rand_int_number(min, max){
    return Math.floor(Math.random() * (max)) + min;
}

function pop_atual(){

    let chance = rand_int_number(1, 2);

    if(chance === 1)
    {
        imgm1.src = "img/flymetothemoon.jpg";
        nomem1.textContent = "  Fly Me To The Moon    -    Bart Howard    - ";
        nota1.classList.add("quatro");
        nota1.textContent = "4";
        link1.href = "partituralogin.html?partitura=flymetothemoon";

        imgm2.src = "img/amongus.jpg";
        nomem2.textContent = "      Among Us Drip     -      Leonz      - ";
        nota2.classList.add("tres");
        nota2.textContent = "3";
        link2.href = "partituralogin.html?partitura=amongusdrip";

        imgm3.src = "img/finalcountdown.jpg";
        nomem3.textContent = "   The Final Countdown  -       Europe      - ";
        nota3.classList.add("cinco");
        nota3.textContent = "5";
        link3.href = "partituralogin.html?partitura=finalcountdown";

        imgm4.src = "img/lazytown.jpg";
        nomem4.textContent = "     We Are Number One   -    Lazy Town     - ";
        nota4.classList.add("dois");
        nota4.textContent = "2";
        link4.href = "partituralogin.html?partitura=lazytown"
    }
    else
    {
        imgm1.src = "img/kiminonawa.jpg";
        nomem1.textContent = "        Kimi No Na Wa    -    你的名字     - ";
        nota1.classList.add("cinco");
        nota1.textContent = "5";
        link1.href = "partituralogin.html?partitura=kiminonawa";

        imgm2.src = "img/nevergonnagiveyouup.jpg";
        nomem2.textContent = "Never Gonna Give You Up  -    Rick Astley     - ";
        nota2.classList.add("seis");
        nota2.textContent = "6";
        link2.href = "partituralogin.html?partitura=nevergonnagiveyouup";

        imgm3.src = "img/mariokart.jpg";
        nomem3.textContent = " Coconut Mall from Mario Kart Wii  - Asuka Ohta - ";
        nota3.classList.add("tres");
        nota3.textContent = "3";
        link3.href = "partituralogin.html?partitura=mariokartwii"

        imgm4.src = "img/substance.jpg";
        nomem4.textContent = "      SUBSTANCE      -   Demi Lovato   -   ";
        nota4.classList.add("sete");
        nota4.textContent = "7";
        link4.href = "partituralogin.html?partitura=substance"
    }
}