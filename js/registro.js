function cadastro(){

    let email = document.getElementById("email").value;
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let emailcheck = email.includes("gmail.com");
    let usercheck = user.length;
    let passcheck = pass.length;

    if(emailcheck && passcheck > 0 && usercheck > 0)
    {
        window.location.href = "musicsanslogin.html";
    }
    else
    {
        window.location.href = "cadastro.html";
    }
}