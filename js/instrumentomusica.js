const url_param = new URLSearchParams(window.location.search);
const inst_param = url_param.get("inst");

function inst_atual(){
    var t1 = document.getElementById("titulo1");
    var t2 = document.getElementById("titulo2");
    var t3 = document.getElementById("titulo3");
    var t4 = document.getElementById("titulo4");
    
    if(inst_param === "piano")
    {
        t1.innerHTML = "abacavbvbb";
        t2.innerHTML = "fdsfdsfds";
        t3.innerHTML = "fdasfaaa";
        t4.innerHTML = "aswwwwwww";
    }
    else if(inst_param === "violao")
    {
        t1.innerHTML = "abacavbvbb";
        t2.innerHTML = "fdsfdsfds";
        t3.innerHTML = "fdasfaaa";
        t4.innerHTML = "aswwwwwww";
    }
    else if(inst_param === "bateria")
    {
        t1.innerHTML = "abacavbvbb";
        t2.innerHTML = "fdsfdsfds";
        t3.innerHTML = "fdasfaaa";
        t4.innerHTML = "aswwwwwww";
    }
    else if(inst_param === "trompete")
    {
        t1.innerHTML = "abacavbvbb";
        t2.innerHTML = "fdsfdsfds";
        t3.innerHTML = "fdasfaaa";
        t4.innerHTML = "aswwwwwww";
    }
    else if(inst_param === "violino")
    {
        t1.innerHTML = "abacavbvbb";
        t2.innerHTML = "fdsfdsfds";
        t3.innerHTML = "fdasfaaa";
        t4.innerHTML = "aswwwwwww";
    }
    else if(inst_param === "saxofone")
    {
        t1.innerHTML = "abacavbvbb";
        t2.innerHTML = "fdsfdsfds";
        t3.innerHTML = "fdasfaaa";
        t4.innerHTML = "aswwwwwww";
    }
}