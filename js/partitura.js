const url_param = new URLSearchParams(window.location.search);

const partitura_param = url_param.get("partitura");

if(partitura_param === "zeldaocarinaoftime")
{
    let img = document.createElement('img');
    img.src = 'img/partitura/tema-zelda-ocarinaoftime-pag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/tema-zelda-ocarinaoftime-pag2.png';
    document.getElementById('partitura2').appendChild(img2);
}
else if(partitura_param === "fallendown")
{
    let img = document.createElement('img');
    img.src = 'img/partitura/fallendown_pag1.jpg';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/fallendown_pag2.jpg';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/fallendown_pag3.jpg';
    document.getElementById('partitura3').appendChild(img3)
}
else if(partitura_param === "redswan")
{
    let img = document.createElement('img');
    img.src = 'img/partitura/red_swanpag1.jpg';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/red_swanpag2.jpg';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/red_swanpag3.jpg';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/red_swanpag4.jpg';
    document.getElementById('partitura4').appendChild(img4);

    let img5 = document.createElement('img');
    img5.src = 'img/partitura/red_swanpag5.jpg';
    document.getElementById('partitura5').appendChild(img5);

    let img6 = document.createElement('img');
    img6.src = 'img/partitura/red_swanpag6.jpg';
    document.getElementById('partitura6').appendChild(img6);

    let img7 = document.createElement('img');
    img7.src = 'img/partitura/red_swanpag7.jpg';
    document.getElementById('partitura7').appendChild(img7);

    let img8 = document.createElement('img');
    img8.src = 'img/partitura/red_swanpag8.jpg';
    document.getElementById('partitura8').appendChild(img8);
}
else if(partitura_param === 'howlsmovingcastle')
{
    let img = document.createElement('img');
    img.src = 'img/partitura/howls_pag1.jpg';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/howls_pag2.jpg';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/howls_pag3.jpg';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/howls_pag4.jpg';
    document.getElementById('partitura4').appendChild(img4);

    let img5 = document.createElement('img');
    img5.src = 'img/partitura/howls_pag5.jpg';
    document.getElementById('partitura5').appendChild(img5);

    let img6 = document.createElement('img');
    img6.src = 'img/partitura/howls_pag6.jpg';
    document.getElementById('partitura6').appendChild(img6);

    let img7 = document.createElement('img');
    img7.src = 'img/partitura/howls_pag7.jpg';
    document.getElementById('partitura7').appendChild(img7);
}

function alerta(){
    if(partitura_param === "zeldaocarinaoftime")
    {
        window.location.href = "partitura.html?partitura=zeldaocarinaoftime";
    }
    else if(partitura_param === "fallendown")
    {
        window.location.href = "partitura.html?partitura=fallendown"
    }
    else if(partitura_param === "redswan")
    {
        window.location.href = "partitura.html?partitura=redswan"
    }
    else if(partitura_param === "howlsmovingcastle")
    {
        window.location.href = "partitura.html?partitura=howlsmovingcastle"
    }
}