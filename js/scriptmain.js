
// retorna um numero inteiro aleatorio
function rand_int_number(min, max){
    return Math.floor(Math.random() * (max)) + min;
}

var qntd_ad = 7;
var chance_sans = rand_int_number(1, 500);

function change_adleft(){
    let rnd = rand_int_number(1, qntd_ad);
    let ad = document.getElementById("adchange");
    let linkad = document.getElementById("linkad");

    if(chance_sans === 1){
        ad.src = "img/sans.jpg";
        linkad.href = "https://musescore.com/user/73972/scores/1352796";
    }
    else{
        if(rnd === 1){
            ad.src = "img/bombril.jpg";
            linkad.href = "https://www.bombril.com.br";
        }
        else if(rnd === 2){
            ad.src = "img/doril.png";
            linkad.href = "https://www.doril.com.br";
        }
        else if(rnd === 3){
            ad.src = "img/admc.jpg";
            linkad.href = "https://www.mcdonalds.com.br";
        }
        else if(rnd === 4){
            ad.src = "img/geladeiraad.jpg";
            linkad.href = "https://www.elo7.com.br/lista/envelopamento-de-geladeira-personalizado";
        }
        else if(rnd === 5){
            rnd = rand_int_number(1, 4);

            if(rnd === 1){
                ad.src = "img/dravenad.jpg";
            }
            else if(rnd === 2){
                ad.src = "img/ahriad.jpg";
            }
            else if(rnd === 3){
                ad.src = "img/luxad.jpg";
            }
            else if(rnd === 4){
                ad.src = "img/ezad.jpg";
            }

            linkad.href = "https://www.redbull.com/br-pt/";
        }
        else if(rnd === 6){
            ad.src = "img/colgad.jpg";
            linkad.href = "https://www.colgate.com.br";
        }
        else if(rnd === 7)
        {
            ad.src = "img/pepsiad.jpg";
            linkad.href = "https://pepsi.com"
        }
    }
}

function change_adright(){
    let rnd = rand_int_number(1, qntd_ad);
    let ad = document.getElementById("adchange2");
    let linkad = document.getElementById("linkad2");

    if(chance_sans === 1){
        ad.src = "img/sans.jpg";
        linkad.href = "https://musescore.com/user/73972/scores/1352796";
    }
    else{
        if(rnd === 1){
            ad.src = "img/bombril.jpg";
            linkad.href = "https://www.bombril.com.br";
        }
        else if(rnd === 2){
            ad.src = "img/doril.png";
            linkad.href = "https://www.doril.com.br";
        }
        else if(rnd === 3){
            ad.src = "img/admc.jpg";
            linkad.href = "https://www.mcdonalds.com.br";
        }
        else if(rnd === 4){
            ad.src = "img/geladeiraad.jpg";
            linkad.href = "https://www.elo7.com.br/lista/envelopamento-de-geladeira-personalizado";
        }
        else if(rnd === 5){
            rnd = rand_int_number(1, 4);

            if(rnd === 1){
                ad.src = "img/dravenad.jpg";
            }
            else if(rnd === 2){
                ad.src = "img/ahriad.jpg";
            }
            else if(rnd === 3){
                ad.src = "img/luxad.jpg";
            }
            else if(rnd === 4){
                ad.src = "img/ezad.jpg";
            }

            linkad.href = "https://www.redbull.com/br-pt/";
        }
        else if(rnd === 6){
            ad.src = "img/colgad.jpg";
            linkad.href = "https://www.colgate.com.br";
        }
        else if(rnd === 7)
        {
            ad.src = "img/pepsiad.jpg";
            linkad.href = "https://pepsi.com"
        }
    }
}