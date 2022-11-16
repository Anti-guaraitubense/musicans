const url_param = new URLSearchParams(window.location.search);
const inst_param = url_param.get("inst");

function inst_atual(){
    
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

    if(inst_param === "piano")
    {
        imgm1.src = "img/furelise.jpeg";
        nomem1.textContent = "      Für Elise     -   Beethoven - ";
        nota1.classList.add("seis");
        nota1.textContent = "6";
        link1.href = "partitura.html?partitura=furelise"

        imgm2.src = "img/hesapirate.jpg";
        nomem2.textContent = "    He is a pirate    - Hans Zimmer - ";
        nota2.classList.add("sete");
        nota2.textContent = "7";
        link2.href = "partitura.html?partitura=hesapirate";

        imgm3.src = "img/minecraftsweden.jpeg";
        nomem3.textContent = "      Sweden      -     C418   - ";
        nota3.classList.add("dois");
        nota3.textContent = "2";
        link3.href = "partitura.html?partitura=sweden";

        imgm4.src = "img/moonlightsonata.jpg";
        nomem4.textContent = "  Moonlight Sonata  -   Beethoven - ";
        nota4.classList.add("oito");
        nota4.textContent = "8";
        link4.href = "partitura.html?partitura=moonlightsonata";
    }
    else if(inst_param === "violao")
    {
        imgm1.src = "img/autumnleaves.jpeg";
        nomem1.textContent= "     Autumn Leaves   -  Joseph Kosma - ";
        nota1.classList.add("tres");
        nota1.textContent = "3";
        link1.href = "partitura.html?partitura=autumnleaves";

        imgm2.src = "img/shapeofmyheart.jpeg";
        nomem2.textContent = "     Shape of my heart -     Sting      - ";
        nota2.classList.add("cinco");
        nota2.textContent = "5";
        link2.href = "partitura.html?partitura=shapeofmyheart";

        imgm3.src = "img/theanimals.png";
        nomem3.textContent = " The house of the rising sun - The animals - ";
        nota3.classList.add("sete");
        nota3.textContent = "7";
        link3.href = "partitura.html?partitura=theanimals";

        imgm4.src = "img/cafe1930.jpg";
        nomem4.textContent = "       Cafe 1930       - Astor Piazzola - ";
        nota4.classList.add("seis")
        nota4.textContent = "6";
        link4.href = "partitura.html?partitura=cafe1930";
    }
    else if(inst_param === "bateria")
    {   
    
    }
    else if(inst_param === "trompete")
    {  
        imgm1.src = "img/giornotheme.jpg";
        nomem1.textContent = " Giorno Theme - Yugo Kanno -";
        nota1.classList.add("seis");
        nota1.textContent = "6";
        link1.href = "partitura.html?partitura=giornotheme"

        imgm2.src = "img/lazytown.jpg";
        nomem2.textContent = " We Are Number One - Lazy Town -";
        nota2.classList.add("dois");
        nota2.textContent = "2";
        link2.href = "partitura.html?partitura=lazytown"

        imgm3.src = "img/mariokart.jpg";
        nomem3.textContent = " Coconut Mall from Mario Kart Wii - Asuka Ohta -";
        nota3.classList.add("seis");
        nota3.textContent = "6";
        link3.href = "partitura.html?partitura=mariokartwii"

        imgm4.src = "img/pianoconcerto.jpg";
        nomem4.textContent = " Piano Concerto No.1 in B flat minor Op.23 - Tchaikovsky -";
        nota4.classList.add("oito");
        nota4.textContent = "8";
        link4.href = "partitura.html?partitura=pianoconcerto"
        
    
    }
    else if(inst_param === "violino")
    {
    
    }
    else if(inst_param === "saxofone")
    {
        imgm1.src = "img/flymetothemoon.jpg";
        nomem1.textContent = "  Fly Me To The Moon    -    Bart Howard    - ";
        nota1.classList.add("quatro");
        nota1.textContent = "4";
        link1.href = "partitura.html?partitura=flymetothemoon";

        imgm2.src = "img/nevergonnagiveyouup.jpg";
        nomem2.textContent = "Never Gonna Give You Up  -    Rick Astley     - ";
        nota2.classList.add("seis");
        nota2.textContent = "6";
        link2.href = "partitura.html?partitura=nevergonnagiveyouup";

        imgm3.src = "img/finalcountdown.jpg";
        nomem3.textContent = "   The Final Countdown  -       Europe      - ";
        nota3.classList.add("tres");
        nota3.textContent = "3";
        link3.href = "partitura.html?partitura=finalcountdown";

        imgm4.src = "img/sevennationarmy.jpg";
        nomem4.textContent = "   Seven Nation Army    -  The White Strapes  - ";
        nota4.classList.add("sete");
        nota4.textContent = "7";
        link4.href = "partitura.html?partitura=sevennationarmy";
    }
}