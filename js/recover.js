const url_param = URLSearchParams(window.location.search);
const recover_param = url_param.get("rec");

let mudaemail = document.querySelector("#txtcode")
let mudauser = document.querySelector("#newpass");

function code(){

    let email = document.getElementById("email").value;
    let emailcheck = email.includes("@gmail.com");
    let user = document.getElementById("user").value;

    let pass = document.getElementById("newpass");

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
        window.location.href = "recover.html?rec=code";
    }
    
}

if(recover_param === "code")
{
    mudaemail.innerHTML = "Código";
    mudauser.innerHTML = "Nova Senha";
    document.getElementById("email").type = "number";
    document.getElementById("user").type = "password";
}
