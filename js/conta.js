var user_foto = document.getElementById("user_foto");

var botao_perfil = document.getElementById('botaoperfil');
var proxant = document.getElementById('proxant');

var foto = null;

const max_foto = 8;

if(foto === null)
{
    foto = 0;
}

function prox_foto(){

    if(foto >= max_foto)
    {
        foto = 0;
    }
    else
    {
        foto = foto+1;
    }

    console.log(foto);
}

function ant_foto(){

    if(foto <= 0)
    {
        foto = max_foto;
    }
    else
    {
        foto = foto-1;
    }
}

function att_foto(){

    switch(foto)
    {
        default:
            user_foto.src = "img/user.png";
            break;
        case 0:
            user_foto.src = "img/user.png";
            break;
        case 1:
            user_foto.src = "img/zelda.jpg";
            break;
        case 2:
            user_foto.src = "img/nevergonnagiveyouup.jpg";
            break
        case 3:
            user_foto.src = "img/amongus.jpg";
            break;
        case 4:
            user_foto.src = "img/minecraftsweden.jpeg";
            break;
        case 5:
            user_foto.src = "img/hesapirate.jpg";
            break;
        case 6:
            user_foto.src = "img/kiminonawa.jpg";
            break;
        case 7:
            user_foto.src = "img/monster.jpg";
            break;
        case 8:
            user_foto.src = "img/lazytown.jpg";
            break;
    }
}

function change_opt(){

    botao_perfil.style.display = "none";
    proxant.style.display = "block";
}

function rtrn_opt(){
    botao_perfil.style.display = "block";
    proxant.style.display = "none";
}

function submit_song(){

    var sub_song = document.getElementById("file_song").value;
    var name_song = document.getElementById("name_song").value;

    var sub_verify = sub_song.includes(".pdf");
    

    if(sub_song === "" || name_song === "" || !sub_verify)
    {
        alert("Dados incorretos. Tente novamente!");
    }
    else
    {
        alert("Sua música foi enviada para revisão. Obrigado!");
        document.location.reload(true);
    }
}