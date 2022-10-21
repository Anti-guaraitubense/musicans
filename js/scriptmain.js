
// retorna um numero inteiro aleatorio
function rand_int_number(min, max){
    return Math.floor(Math.random() * (max)) + min;
}

var qntd_ad = 6;
var chance_sans = rand_int_number(1, 500);

function change_adleft(){
    let rnd = rand_int_number(1, qntd_ad);
    let ad = document.getElementById("adchange");

    if(chance_sans === 1){
        ad.src = "img/sans.jpg";
    }
    else{
        if(rnd === 1){
            ad.src = "img/bombril.jpg";
        }
        else if(rnd === 2){
            ad.src = "img/doril.png";
        }
        else if(rnd === 3){
            ad.src = "img/admc.jpg";
        }
        else if(rnd === 4){
            ad.src = "img/geladeiraad.jpg";
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
        }
        else if(rnd === 6){
            ad.src = "img/colgad.jpg";
        }
    }
}

function change_adright(){
    let rnd = rand_int_number(1, qntd_ad);
    let ad = document.getElementById("adchange2");

    if(chance_sans === 1){
        ad.src = "img/sans.jpg";
    }
    else{
        if(rnd === 1){
            ad.src = "img/bombril.jpg";
        }
        else if(rnd === 2){
            ad.src = "img/doril.png";
        }
        else if(rnd === 3){
            ad.src = "img/admc.jpg";
        }
        else if(rnd === 4){
            ad.src = "img/geladeiraad.jpg";
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
        }
        else if(rnd === 6){
            ad.src = "img/colgad.jpg";
        }
    }
}