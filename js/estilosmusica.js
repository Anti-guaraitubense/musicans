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
        
    }
    else if(gen_param === "class")
    {

    }
    else if(gen_param === "game")
    {   
        
    }
    else if(gen_param === "rock")
    {  

    }
    else if(gen_param === "jazz")
    {
    
    }
    else if(gen_param === "hiho")
    {

    }
}