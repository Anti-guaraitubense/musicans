const url_param = new URLSearchParams(window.location.search);
const musica_param = url_param.get("gen");

function genero_atual(){
    var texto = document.getElementById("texto");

    if(musica_param === "mpb")
    {
       texto.innerHTML = "Musica popular brasileira."; 
    }
    else if(musica_param === "class")
    {
        texto.innerHTML = "Musica classica bethovemnmn";
    }
    else if(musica_param === "pagode")
    {
        texto.innerHTML = "pagodin relaxante";
    }
    else if(musica_param === "samba")
    {
        texto.innerHTML = "Turma do pagode";
    }
    else if(musica_param === "rap")
    {
        texto.innerHTML = "rapers";
    }
    else if(musica_param === "rock")
    {
        texto.innerHTML = "rock metaleiro";
    }
    else if(musica_param === "jazz")
    {
        texto.innerHTML = "jazz relaxante ne mano";
    }
    else if(musica_param === "funk")
    {
        texto.innerHTML = "funk putaria";
    }
}