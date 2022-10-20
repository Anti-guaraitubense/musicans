
// retorna um numero inteiro aleatorio
function rand_int_number(min, max){
    return Math.floor(Math.random() * (max)) + min;
}

function change_adleft(){
    let rnd = rand_int_number(1, 2);
    let ad = document.getElementById("adchange");

    if(rnd === 1){
        ad.src = "img/bombril.jpg";
    }
    else if(rnd === 2){
        ad.src = "img/doril.png";
    }
}

function change_adright(){
    let rnd = rand_int_number(1, 2);
    let ad = document.getElementById("adchange2");

    if(rnd === 1){
        ad.src = "img/bombril.jpg";
    }
    else if(rnd === 2){
        ad.src = "img/doril.png";
    }
}