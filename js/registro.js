function press_enter(event){
    let enter = event.keyCode;

    if(enter === 13)
    {
        cadastro();
    }
}

function cadastro(){

    let email = document.getElementById("email").value;
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let emailval = email.includes("@gmail.com") || email.includes("@hotmail.com") || email.includes("@yahoo.com");

    let usercheck = user.length;
    let passcheck = pass.length;

    if(emailval && passcheck > 0 && usercheck > 0)
    {
        window.location.href = "musicsanslogin.html";
    }
    else
    {
        document.location.reload(true);
    }
}