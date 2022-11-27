const url_param = new URLSearchParams(window.location.search);

const partitura_param = url_param.get("partitura");

var video = document.getElementById('video_yt');

if(partitura_param === "zeldaocarinaoftime")
{
    video.src = "https://www.youtube.com/embed/S2v2WOIJJJQ";

    let img = document.createElement('img');
    img.src = 'img/partitura/tema-zelda-ocarinaoftime-pag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/tema-zelda-ocarinaoftime-pag2.png';
    document.getElementById('partitura2').appendChild(img2);
}
else if(partitura_param === "fallendown")
{
    video.src = "https://www.youtube.com/embed/iaoOp4lVLgs";
 
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
else if(partitura_param === "mariokartwii")
{
    video.src = "https://www.youtube.com/embed/uv9sUO36lkE";
 
    let img = document.createElement('img');
    img.src = 'img/partitura/mariokartwii-pag1.jpg';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/mariokartwii-pag2.jpg';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/mariokartwii-pag3.jpg';
    document.getElementById('partitura3').appendChild(img3)
    
}
else if(partitura_param === "redswan")
{
    video.src = "https://www.youtube.com/embed/sWcgKts80vM";
 
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
    video.src = "https://www.youtube.com/embed/lB4PRX737-0";   
 
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
else if(partitura_param === 'kiminonawa')
{
    video.src = "https://www.youtube.com/embed/LO_C_ZAGvoU" ;   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/kiminonawa-pag1.jpg';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/kiminonawa-pag2.jpg';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/kiminonawa-pag3.jpg';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/kiminonawa-pag4.jpg';
    document.getElementById('partitura4').appendChild(img4);

    let img5 = document.createElement('img');
    img5.src = 'img/partitura/kiminonawa-pag5.jpg';
    document.getElementById('partitura5').appendChild(img5);

    let img6 = document.createElement('img');
    img6.src = 'img/partitura/kiminonawa-pag6.jpg';
    document.getElementById('partitura6').appendChild(img6);

    let img7 = document.createElement('img');
    img7.src = 'img/partitura/kiminonawa-pag7.jpg';
    document.getElementById('partitura7').appendChild(img7);
}
else if(partitura_param === "flymetothemoon")
{
    video.src = "https://www.youtube.com/embed/TfgBHC5gvTI";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/flymetothemoon-pag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/flymetothemoon-pag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/flymetothemoon-pag3.png';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/flymetothemoon-pag4.png';
    document.getElementById('partitura4').appendChild(img4);
}
else if(partitura_param === "nevergonnagiveyouup")
{
    video.src = "https://www.youtube.com/embed/u9ZQK7p-Qvo";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/nevergonnagiveyouup-pag1.jpg';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/nevergonnagiveyouup-pag2.jpg';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/nevergonnagiveyouup-pag3.jpg';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/nevergonnagiveyouup-pag4.jpg';
    document.getElementById('partitura4').appendChild(img4);
}
else if(partitura_param === "amongusdrip")
{
    video.src = "https://www.youtube.com/embed/lX16L43bsK0";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/amongdrip-pag1.jpg';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/amongdrip-pag2.jpg';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/amongdrip-pag3.jpg';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/amongdrip-pag4.jpg';
    document.getElementById('partitura4').appendChild(img4);

    let img5 = document.createElement('img');
    img5.src = 'img/partitura/amongdrip-pag5.jpg';
    document.getElementById('partitura3').appendChild(img5);

    let img6 = document.createElement('img');
    img6.src = 'img/partitura/amongdrip-pag6.jpg';
    document.getElementById('partitura4').appendChild(img6);
}
else if(partitura_param === "roxxane")
{
    video.src = "https://www.youtube.com/embed/YsWjLA_06cY";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/roxxane-pag1.jpg';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/roxxane-pag2.jpg';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/roxxane-pag3.jpg';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/roxxane-pag4.jpg';
    document.getElementById('partitura4').appendChild(img4);

    let img5 = document.createElement('img');
    img5.src = 'img/partitura/roxxane-pag5.jpg';
    document.getElementById('partitura3').appendChild(img5);

    let img6 = document.createElement('img');
    img6.src = 'img/partitura/roxxane-pag6.jpg';
    document.getElementById('partitura4').appendChild(img6);
}
else if(partitura_param === "finalcountdown")
{
    video.src = "https://www.youtube.com/embed/y3Ga-d1JR0o";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/finalcountdown-pag1.jpg';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/finalcountdown-pag2.jpg';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/finalcountdown-pag3.jpg';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/finalcountdown-pag4.jpg';
    document.getElementById('partitura4').appendChild(img4);
}
else if(partitura_param === "lazytown")
{
    video.src = "https://www.youtube.com/embed/w_ACRn4Keww";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/lazytown-pag1.jpg';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/lazytown-pag2.jpg';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/lazytown-pag3.jpg';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/lazytown-pag4.jpg';
    document.getElementById('partitura4').appendChild(img4);
}

function linkpartitura(){
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
    else if(partitura_param === "flymetothemoon")
    {
        window.location.href = "partitura.html?partitura=flymetothemoon"
    }
    else if(partitura_param === "amongusdrip")
    {
        window.location.href = "partitura.html?partitura=amongusdrip"
    }
    else if(partitura_param === "finalcountdown")
    {
        window.location.href = "partitura.html?partitura=finalcountdown"
    }
    else if(partitura_param === "lazytown")
    {
        window.location.href = "partitura.html?partitura=lazytown"
    }
    else if(partitura_param === "kiminonawa")
    {
        window.location.href = "partitura.html?partitura=kiminonawa"
    }
    else if(partitura_param === "nevergonnagiveyouup")
    {
        window.location.href = "partitura.html?partitura=nevergonnagiveyouup"
    }
    else if(partitura_param === "mariokartwii")
    {
        window.location.href = "partitura.html?partitura=mariokartwii"
    }
    else if(partitura_param === "roxxane")
    {
        window.location.href = "partitura.html?partitura=roxxane"
    }
}

function downloadpartitura(){
    
    let part = document.getElementById("partitura-certa");

    if(partitura_param === "fallendown")
    {
        part.href = "pdf/fallendown_pdf.pdf";
    }
    else if(partitura_param === "zeldaocarinaoftime")
    {
        part.href = "pdf/zelda_pdf.pdf";
    }
    else if(partitura_param === "howlsmovingcastle")
    {
        part.href = "pdf/howls_pdf.pdf";
    }
    else if(partitura_param === "redswan")
    {
        part.href = "pdf/redswan_pdf.pdf";
    }
    else if(partitura_param === "flymetothemoon")
    {
        part.href = "pdf/flymetothemoon.pdf";
    }
    else if(partitura_param === "amongusdrip")
    {
        part.href = "pdf/amongusdrip.pdf";
    }
    else if(partitura_param === "finalcountdown")
    {
        part.href = "pdf/finalcountdown.pdf";
    }
    else if(partitura_param === "lazytown")
    {
        part.href = "pdf/lazytown.pdf";
    }
    else if(partitura_param === "kiminonawa")
    {
        part.href = "pdf/kiminonawa.pdf";
    }
    else if(partitura_param === "nevergonnagiveyouup")
    {
        part.href = "pdf/nevergonnagiveyouup.pdf";
    }
    else if(partitura_param === "mariokartwii")
    {
        part.href = "pdf/mariokartwii.pdf";
    }
    else if(partitura_param === "roxxane")
    {
        part.href = "pdf/roxxane.pdf";
    }
}