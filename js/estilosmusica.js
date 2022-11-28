const url_param = new URLSearchParams(window.location.search);
const gen_param = url_param.get("gen");

function gen_atual(){
    
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

    if(gen_param === "mpb")
    {
        imgm1.src = "img/JOBIM.jpg";
        nomem1.textContent = "  Eu sei que vou te amar   -   Tom Jobim - ";
        nota1.classList.add("quatro");
        nota1.textContent = "4";
        link1.href = "partitura.html?partitura=euseiquevouteamar"

        imgm2.src = "img/nandoreis.jpg";
        nomem2.textContent = "    De janeiro a janeiro    -   Nando Reis - ";
        nota2.classList.add("seis");
        nota2.textContent = "6";
        link2.href = "partitura.html?partitura=dejaneiroajaneiro";

        imgm3.src = "img/TOQUINHO.jpg";
        nomem3.textContent = "    O Caderno    -        Toquinho   - ";
        nota3.classList.add("dois");
        nota3.textContent = "2";
        link3.href = "partitura.html?partitura=ocaderno";

        imgm4.src = "img/timmaia.jpg";
        nomem4.textContent = "  Azul da Cor do Mar    -      Tim Maia - ";
        nota4.classList.add("cinco");
        nota4.textContent = "5";
        link4.href = "partitura.html?partitura=azuldacordomar";
        
    }
    else if(gen_param === "class")
    {
        imgm1.src = "img/furelise.jpeg";
        nomem1.textContent = "             Für Elise      -   Beethoven - ";
        nota1.classList.add("seis");
        nota1.textContent = "6";
        link1.href = "partitura.html?partitura=furelise"

        imgm2.src = "img/noturno.jpg";
        nomem2.textContent = "    Chopin - Nocturne Op 9 No 2   -   Chopin - ";
        nota2.classList.add("sete");
        nota2.textContent = "7";
        link2.href = "partitura.html?partitura=nocturnechopin";

        imgm3.src = "img/swanlake.jpg";
        nomem3.textContent = "      Swan Lake     -     Tchaikovsky   - ";
        nota3.classList.add("seis");
        nota3.textContent = "6";
        link3.href = "partitura.html?partitura=swanlake";

        imgm4.src = "img/moonlightsonata.jpg";
        nomem4.textContent = "     Moonlight Sonata  -     Beethoven     - ";
        nota4.classList.add("oito");
        nota4.textContent = "8";
        link4.href = "partitura.html?partitura=moonlightsonata";
        

    }
    else if(gen_param === "game")
    {   
        imgm1.src = "img/mii.jpg";
        nomem1.textContent = "      Mii Channel Theme    -   Kazumi Totaka - ";
        nota1.classList.add("cinco");
        nota1.textContent = "5";
        link1.href = "partitura.html?partitura=miitheme"

        imgm2.src = "img/mariobross.jpg";
        nomem2.textContent = "    Super Mario Bros       -    Koji Kondo   - ";
        nota2.classList.add("seis");
        nota2.textContent = "6";
        link2.href = "partitura.html?partitura=supermariobross";

        imgm3.src = "img/minecraftsweden.jpeg";
        nomem3.textContent = "          Sweden         -       C418    - ";
        nota3.classList.add("quatro");
        nota3.textContent = "4";
        link3.href = "partitura.html?partitura=sweden";

        imgm4.src = "img/zelda2.jpg";
        nomem4.textContent = "The Legend of Zelda: Great Fairy Fountain -  Koji - ";
        nota4.classList.add("sete");
        nota4.textContent = "7";
        link4.href = "partitura.html?partitura=zelda";
        
    }
    else if(gen_param === "rock")
    {  
        imgm1.src = "img/beatles.jpeg";
        nomem1.textContent = "      Here Comes The Sun     -   The Beatles- ";
        nota1.classList.add("quatro");
        nota1.textContent = "4";
        link1.href = "partitura.html?partitura=herecomesthesun"

        imgm2.src = "img/believer.jpg";
        nomem2.textContent = "           Believer        - Imagine Dragons - ";
        nota2.classList.add("seis");
        nota2.textContent = "6";
        link2.href = "partitura.html?partitura=believer";

        imgm3.src = "img/metalica.jpeg";
        nomem3.textContent = "      Nothing Else Matters  -    Metallica   - ";
        nota3.classList.add("quatro");
        nota3.textContent = "4";
        link3.href = "partitura.html?partitura=nothingelsematters";

        imgm4.src = "img/intheend.jpg";
        nomem4.textContent = "          In The End        -   Linkin Park - ";
        nota4.classList.add("cinco");
        nota4.textContent = "5";
        link4.href = "partitura.html?partitura=intheend";

    }
    else if(gen_param === "jazz")
    {
        imgm1.src = "img/happybirthday.jpeg";
        nomem1.textContent = "   Happy BirthDay Jazz -    Jonny May    - ";
        nota1.classList.add("sete");
        nota1.textContent = "7";
        link1.href = "partitura.html?partitura=happybirthday"

        imgm2.src = "img/jingle.jpg";
        nomem2.textContent = "    Jingle Bell Jazz     -    John Herbert    - ";
        nota2.classList.add("tres");
        nota2.textContent = "3";
        link2.href = "partitura.html?partitura=jinglebell";

        imgm3.src = "img/takefive.jpeg";
        nomem3.textContent = "   Take Five Jazz      -   Dave Brubeck   - ";
        nota3.classList.add("quatro");
        nota3.textContent = "4";
        link3.href = "partitura.html?partitura=takefive";

        imgm4.src = "img/flymetothemoon.jpg";
        nomem4.textContent = "  Fly Me To The Moon Jazz  -   Frank Sinatra - ";
        nota4.classList.add("sete");
        nota4.textContent = "7";
        link4.href = "partitura.html?partitura=flymetothemoon";
    
    }
    else if(gen_param === "hiho")
    {
        imgm1.src = "img/bluelampshade.jpeg";
        nomem1.textContent = "         Blue Lampshade        -     Tom Brier     - ";
        nota1.classList.add("nove");
        nota1.textContent = "9";
        link1.href = "partitura.html?partitura=lampshade"

        imgm2.src = "img/tetris.jpg";
        nomem2.textContent = "          Tetris Ragtime         -     Dave Wave     - ";
        nota2.classList.add("sete");
        nota2.textContent = "7";
        link2.href = "partitura.html?partitura=tetris";

        imgm3.src = "img/megarag.jpeg";
        nomem3.textContent = "      Megalovania Ragtime      -     Vincent Ward   - ";
        nota3.classList.add("oito");
        nota3.textContent = "8";
        link3.href = "partitura.html?partitura=magelovaniaragtime";

        imgm4.src = "img/tomzin.jpg";
        nomem4.textContent = "  Super Mario World Ending Theme Ragtime  - Tom Brier - ";
        nota4.classList.add("dez");
        nota4.textContent = "10";
        link4.href = "partitura.html?partitura=supermarioworldthemeragtime";

    }
}