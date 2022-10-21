const url_param = new URLSearchParams(window.location.search);
const recover_param = url_param.get("rec");

let mudaemail = document.querySelector("#txtcode")
let mudauser = document.querySelector("#newpass");

function code(){

    let email = document.getElementById("email").value;
    let emailcheck = email.includes("@gmail.com");
    let user = document.getElementById("user").value;
    
    if(emailcheck && user.length > 2)
    {
        window.location.href = "recover.html?rec=code";
    }
    else if(user.length > 2 && email.length > 2)    
    {
        window.location.href = "musicsanslogin.html";
    }
    else
    {
        document.location.reload(true);
    }
}

if(recover_param === "code")
{
    mudaemail.innerHTML = "Código";
    mudauser.innerHTML = "Nova Senha";
    document.getElementById("email").type = "number";
    document.getElementById("user").type = "password";
}

function press_enter(event){
    let enter = event.keyCode;

    if(enter === 13)
    {
        code();
    }
}