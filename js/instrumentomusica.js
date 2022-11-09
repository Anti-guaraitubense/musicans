const url_param = new URLSearchParams(window.location.search);
const inst_param = url_param.get("inst");

function inst_atual(){
    
    var nomem1 = document.querySelector("#nomemsc1");
    var imgm1 = document.getElementById("imgmusica1");
    var nota1 = document.querySelector("#nota1");

    var nomem2 = document.querySelector("#nomemsc2");
    var imgm2 = document.getElementById("imgmusica2");
    var nota2 = document.querySelector("#nota2");

    var nomem3 = document.querySelector("#nomemsc3");
    var imgm3 = document.getElementById("imgmusica3");
    var nota3 = document.querySelector("#nota3");

    var nomem4 = document.querySelector("#nomemsc4");
    var imgm4 = document.getElementById("imgmusica4");
    var nota4 = document.querySelector("#nota4");


    if(inst_param === "piano")
    {
        imgm1.src = "img/furelise.jpeg";
        nomem1.textContent = "      Für Elise     -   Beethoven - ";
        nota1.classList.add("seis");
        nota1.textContent = "6";

        imgm2.src = "img/hesapirate.jpg";
        nomem2.textContent = "    He is a pirate    - Hans Zimmer - ";
        nota2.classList.add("sete");
        nota2.textContent = "7";

        imgm3.src = "img/minecraftsweden.jpeg";
        nomem3.textContent = "      Sweden      -     C418   - ";
        nota3.classList.add("dois");
        nota3.textContent = "2";

        imgm4.src = "img/moonlightsonata.jpg";
        nomem4.textContent = "   Moonlight Sonata -   Beethoven - ";
        nota4.classList.add("oito");
        nota4.textContent = "8";
    }
    else if(inst_param === "violao")
    {
    
    }
    else if(inst_param === "bateria")
    {
    
    }
    else if(inst_param === "trompete")
    {
    
    }
    else if(inst_param === "violino")
    {
    
    }
    else if(inst_param === "saxofone")
    {
        imgm1.src = "img/flymetothemoon.jpg";
        nomem1.textContent = "  Fly Me To The Moon    -    Bart Howard    - ";
        nota1.classList.add("seis");
        nota1.textContent = "6";

        imgm2.src = "img/nevergonnagiveyouup.jpg";
        nomem2.textContent = "Never Gonna Give You Up  -    Rick Astley     - ";
        nota2.classList.add("sete");
        nota2.textContent = "7";

        imgm3.src = "img/finalcountdown.jpg";
        nomem3.textContent = "   The Final Countdown  -       Europe      - ";
        nota3.classList.add("dois");
        nota3.textContent = "2";

        imgm4.src = "img/sevennationarmy.jpg";
        nomem4.textContent = "   Seven Nation Army    -  The White Strapes  - ";
        nota4.classList.add("oito");
        nota4.textContent = "8";
    }
}