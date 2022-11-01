const url_param = new URLSearchParams(window.location.search);
const partitura_param = url_param.get("gen");

function logout(){
    window.location.href = "estilos.html";
}