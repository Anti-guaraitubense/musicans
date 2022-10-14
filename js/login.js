function login(){

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user === "admin" && pass === "admin" || user === "user" && pass === "user")
    {
        window.location.href = "musicsanslogin.html";
    }
    else
    {
        window.location.href = "erro.html";
    }
}

