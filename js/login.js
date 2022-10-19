const url_param = new URLSearchParams(window.location.search);
const pag_param = url_param.get('pag');

function click_enter(event){
    let enter = event.keyCode;

    if(enter === 13)
    {
        login();
    }
}

function login(){

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user === "admin" && pass === "admin" || user === "user" && pass === "user")
    {
        if(pag_param === "pop")
        {
            window.location.href = "populareslogin.html"
        }
        else if(pag_param === "est")
        {
            window.location.href = "estiloslogin.html"
        }
        else if(pag_param === "inst")
        {
            window.location.href = "instrumentoslogin.html"
        }
        else
        {
            window.location.href = "musicsanslogin.html";
        }
    }
    else if(user === "" || pass === "")
    {
        document.location.reload(true);
    }
    else
    {
        window.location.href = "erro.html";
    }
}