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
else if(partitura_param === "azuldacordomar")
{
    video.src = "https://www.youtube.com/embed/APnJ0ZVnZ0c";

    let img = document.createElement('img');
    img.src = 'img/partitura/azuldacordomarpag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/azuldacordomarpag2.png';
    document.getElementById('partitura2').appendChild(img2);
}
else if(partitura_param === "jinglebell")
{
    video.src = "https://www.youtube.com/embed/9bGH2IBz1KY";

    let img = document.createElement('img');
    img.src = 'img/partitura/jinglebellpag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/jinglebellpag2.png';
    document.getElementById('partitura2').appendChild(img2);
}
else if(partitura_param === "herecomesthesun")
{
    video.src = "https://www.youtube.com/embed/pvStaSjnPAI";

    let img = document.createElement('img');
    img.src = 'img/partitura/herecomesthesunpag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/herecomesthesunpag2.png';
    document.getElementById('partitura2').appendChild(img2);
}
else if(partitura_param === "believer")
{
    video.src = "https://www.youtube.com/embed/hwXfLVkE_-c";

    let img = document.createElement('img');
    img.src = 'img/partitura/believerpag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/believerpag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/believerpag3.png';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/believerpag4.png';
    document.getElementById('partitura4').appendChild(img4);
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
else if(partitura_param === "furelise")
{
    video.src = "https://www.youtube.com/embed/wfF0zHeU3Zs";
 
    let img = document.createElement('img');
    img.src = 'img/partitura/furelisepag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/furelisepag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/furelisepag3.png';
    document.getElementById('partitura3').appendChild(img3)
    
}
else if(partitura_param === "supermariobross")
{
    video.src = "https://www.youtube.com/embed/XDmczii5-R0";
 
    let img = document.createElement('img');
    img.src = 'img/partitura/supermariobrosspag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/supermariobrosspag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/supermariobrosspag3.png';
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
else if(partitura_param === "lampshade")
{
    video.src = "https://www.youtube.com/embed/3A9dc-NP9ao";
 
    let img = document.createElement('img');
    img.src = 'img/partitura/bluelampshadepag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/bluelampshadepag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/bluelampshadepag3.png';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/bluelampshadepag4.png';
    document.getElementById('partitura4').appendChild(img4);

    let img5 = document.createElement('img');
    img5.src = 'img/partitura/bluelampshadepag5.png';
    document.getElementById('partitura5').appendChild(img5);

    let img6 = document.createElement('img');
    img6.src = 'img/partitura/bluelampshadepag6.png';
    document.getElementById('partitura6').appendChild(img6);

    let img7 = document.createElement('img');
    img7.src = 'img/partitura/bluelampshadepag7.png';
    document.getElementById('partitura7').appendChild(img7);

    let img8 = document.createElement('img');
    img8.src = 'img/partitura/bluelampshadepag8.png';
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
else if(partitura_param === "happybirthday")
{
    video.src = "https://www.youtube.com/embed/4sZmPHJPvZE";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/happybirthdayjazzpag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/happybirthdayjazzpag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/happybirthdayjazzpag3.png';
    document.getElementById('partitura3').appendChild(img3);
}
else if(partitura_param === "takefive")
{
    video.src = "https://www.youtube.com/embed/aqMTYInLfuA";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/takefivejazzpag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/takefivejazzpag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/takefivejazzpag3.png';
    document.getElementById('partitura3').appendChild(img3);
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
else if(partitura_param === "tetris")
{
    video.src = "https://www.youtube.com/embed/ZSLnkyPSlEM";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/tetrisragtimepag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/tetrisragtimepag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/tetrisragtimepag4.png';
    document.getElementById('partitura4').appendChild(img4);

    let img5 = document.createElement('img');
    img5.src = 'img/partitura/tetrisragtimepag5.png';
    document.getElementById('partitura3').appendChild(img5);
}
else if(partitura_param === "nothingelsematters")
{
    video.src = "https://www.youtube.com/embed/DmL12NRE4hQ";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/nothingelsematterspag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/nothingelsematterspag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/nothingelsematterspag3.png';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/nothingelsematterspag4.png';
    document.getElementById('partitura4').appendChild(img4);

    let img5 = document.createElement('img');
    img5.src = 'img/partitura/nothingelsematterspag5.png';
    document.getElementById('partitura3').appendChild(img5);

    let img6 = document.createElement('img');
    img6.src = 'img/partitura/nothingelsematterspag6.png';
    document.getElementById('partitura4').appendChild(img6);
}
else if(partitura_param === "supermarioworldthemeragtime")
{
    video.src = "https://www.youtube.com/embed/b9IkpUYlOx8";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/supermarioworldendthemepag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/supermarioworldendthemepag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/supermarioworldendthemepag3.png';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/supermarioworldendthemepag4.png';
    document.getElementById('partitura4').appendChild(img4);

    let img5 = document.createElement('img');
    img5.src = 'img/partitura/supermarioworldendthemepag5.png';
    document.getElementById('partitura3').appendChild(img5);

    let img6 = document.createElement('img');
    img6.src = 'img/partitura/supermarioworldendthemepag6.png';
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
else if(partitura_param === "nocturnechopin")
{
    video.src = "https://www.youtube.com/embed/p29JUpsOSTE";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/nocturnepag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/nocturnepag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/nocturnepag3.png';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/nocturnepag4.png';
    document.getElementById('partitura4').appendChild(img4);
}
else if(partitura_param === "moonlightsonata")
{
    video.src = "https://www.youtube.com/embed/k2O9icjMmSw  ";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/moonlightsonatapag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/moonlightsonatapag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/moonlightsonatapag3.png';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/moonlightsonatapag4.png';
    document.getElementById('partitura4').appendChild(img4);
}
else if(partitura_param === "intheend")
{
    video.src = "https://www.youtube.com/embed/4yKeIhxo";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/intheendpag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/intheendpag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/intheendpag3.png';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/intheendpag4.png';
    document.getElementById('partitura4').appendChild(img4);
}
else if(partitura_param === "magelovaniaragtime")
{
    video.src = "https://www.youtube.com/embed/q90OiB8KehM";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/megalovaniaragtimepag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/megalovaniaragtimepag2.png';
    document.getElementById('partitura2').appendChild(img2);

    let img3 = document.createElement('img');
    img3.src = 'img/partitura/megalovaniaragtimepag3.png';
    document.getElementById('partitura3').appendChild(img3);

    let img4 = document.createElement('img');
    img4.src = 'img/partitura/megalovaniaragtimepag4.png';
    document.getElementById('partitura4').appendChild(img4);
}
else if(partitura_param === "ocaderno")
{
    video.src = "https://www.youtube.com/embed/p016zeBXFSs";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/ocadernopag1.png';
    document.getElementById('partitura').appendChild(img);
}
else if(partitura_param === "sweden")
{
    video.src = "https://www.youtube.com/embed/7jFJbp8rYDA";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/swedenpag1.png';
    document.getElementById('partitura').appendChild(img);
}
else if(partitura_param === "zelda")
{
    video.src = "https://www.youtube.com/embed/nhIriLZUXX0";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/greatfairyfountainpag1.png';
    document.getElementById('partitura').appendChild(img);
}
else if(partitura_param === "miitheme")
{
    video.src = "https://www.youtube.com/embed/qGPqRf6PTHI";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/miichanelpag1.png';
    document.getElementById('partitura').appendChild(img);
}
else if(partitura_param === "dejaneiroajaneiro")
{
    video.src = "https://www.youtube.com/embed/fk6Kl7GZZzA";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/dejaneiropag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/dejaneiropag2.png';
    document.getElementById('partitura2').appendChild(img2);
}
else if(partitura_param === "swanlake")
{
    video.src = "https://www.youtube.com/embed/vAeRzW98IFw";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/swanlakepag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/swanlakepag2.png';
    document.getElementById('partitura2').appendChild(img2);
}
else if(partitura_param === "euseiquevouteamar")
{
    video.src = "https://www.youtube.com/embed/qhZNL7OOVUg";   
 
    let img = document.createElement('img');
    img.src = 'img/partitura/partitura_euseiquepag1.png';
    document.getElementById('partitura').appendChild(img);

    let img2 = document.createElement('img');
    img2.src = 'img/partitura/partitura_euseiquepag1.png';
    document.getElementById('partitura2').appendChild(img2);
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
    else if(partitura_param === "azuldacordomar")
    {
        window.location.href = "partitura.html?partitura=azuldacordomar"
    }
    else if(partitura_param === "ocaderno")
    {
        window.location.href = "partitura.html?partitura=ocaderno"
    }
    else if(partitura_param === "dejaneiroajaneiro")
    {
        window.location.href = "partitura.html?partitura=dejaneiroajaneiro"
    }
    else if(partitura_param === "euseiquevouteamar")
    {
        window.location.href = "partitura.html?partitura=euseiquevouteamar"
    }
    else if(partitura_param === "furelise")
    {
        window.location.href = "partitura.html?partitura=furelise"
    }
    else if(partitura_param === "nocturnechopin")
    {
        window.location.href = "partitura.html?partitura=nocturnechopin"
    }
    else if(partitura_param === "swanlake")
    {
        window.location.href = "partitura.html?partitura=swanlake"
    }
    else if(partitura_param === "moonlightsonata")
    {
        window.location.href = "partitura.html?partitura=moonlightsonata"
    }
    else if(partitura_param === "miitheme")
    {
        window.location.href = "partitura.html?partitura=miitheme"
    }
    else if(partitura_param === "supermariobross")
    {
        window.location.href = "partitura.html?partitura=supermariobross"
    }
    else if(partitura_param === "sweden")
    {
        window.location.href = "partitura.html?partitura=sweden"
    }
    else if(partitura_param === "zelda")
    {
        window.location.href = "partitura.html?partitura=zelda"
    }
    else if(partitura_param === "herecomesthesun")
    {
        window.location.href = "partitura.html?partitura=herecomesthesun"
    }
    else if(partitura_param === "believer")
    {
        window.location.href = "partitura.html?partitura=believer"
    }
    else if(partitura_param === "nothingelsematters")
    {
        window.location.href = "partitura.html?partitura=nothingelsematters"
    }
    else if(partitura_param === "intheend")
    {
        window.location.href = "partitura.html?partitura=intheend"
    }
    else if(partitura_param === "happybirthday")
    {
        window.location.href = "partitura.html?partitura=happybirthday"
    }
    else if(partitura_param === "jinglebell")
    {
        window.location.href = "partitura.html?partitura=jinglebell"
    }
    else if(partitura_param === "takefive")
    {
        window.location.href = "partitura.html?partitura=takefive"
    }
    else if(partitura_param === "lampshade")
    {
        window.location.href = "partitura.html?partitura=lampshade"
    }
    else if(partitura_param === "tetris")
    {
        window.location.href = "partitura.html?partitura=tetris"
    }
    else if(partitura_param === "magelovaniaragtime")
    {
        window.location.href = "partitura.html?partitura=magelovaniaragtime"
    }
    else if(partitura_param === "supermarioworldthemeragtime")
    {
        window.location.href = "partitura.html?partitura=supermarioworldthemeragtime"
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
    else if(partitura_param === "azuldacordomar")  //COMEÇA AQUI AS PARTITURAS QUE NAO FIZ
    {
        part.href = "pdf/azuldacordomar.pdf";
    }
    else if(partitura_param === "ocaderno")
    {
        part.href = "pdf/ocaderno.pdf";
    }
    else if(partitura_param === "dejaneiroajaneiro")
    {
        part.href = "pdf/dejaneiroajaneiro.pdf";
    }
    else if(partitura_param === "euseiquevouteamar")
    {
        part.href = "pdf/euseiquevouteamar.pdf";
    }
    else if(partitura_param === "furelise")
    {
        part.href = "pdf/furelise.pdf";
    }
    else if(partitura_param === "nocturnechopin")
    {
        part.href = "pdf/nocturnechopin.pdf";
    }
    else if(partitura_param === "swanlake")
    {
        part.href = "pdf/swanlake.pdf";
    }
    else if(partitura_param === "moonlightsonata")
    {
        part.href = "pdf/moonlightsonata.pdf";
    }
    else if(partitura_param === "miitheme")
    {
        part.href = "pdf/miitheme.pdf";
    }
    else if(partitura_param === "supermariobross")
    {
        part.href = "pdf/supermariobross.pdf";
    }
    else if(partitura_param === "sweden")
    {
        part.href = "pdf/sweden.pdf";
    }
    else if(partitura_param === "zelda")
    {
        part.href = "pdf/zelda.pdf";
    }
    else if(partitura_param === "zelda")
    {
        part.href = "pdf/zelda.pdf";
    }
    else if(partitura_param === "herecomesthesun")
    {
        part.href = "pdf/herecomesthesun.pdf";
    }
    else if(partitura_param === "believer")
    {
        part.href = "pdf/believer.pdf";
    }
    else if(partitura_param === "nothingelsematters")
    {
        part.href = "pdf/nothingelsematters.pdf";
    }
    else if(partitura_param === "intheend")
    {
        part.href = "pdf/intheend.pdf";
    }
    else if(partitura_param === "happybirthday")
    {
        part.href = "pdf/happybirthday.pdf";
    }
    else if(partitura_param === "jinglebell")
    {
        part.href = "pdf/jinglebell.pdf";
    }
    else if(partitura_param === "takefive")
    {
        part.href = "pdf/takefive.pdf";
    }
    else if(partitura_param === "lampshade")
    {
        part.href = "pdf/lampshade.pdf";
    }
    else if(partitura_param === "tetris")
    {
        part.href = "pdf/tetris.pdf";
    }
    else if(partitura_param === "magelovaniaragtime")
    {
        part.href = "pdf/magelovaniaragtime.pdf";
    }
    else if(partitura_param === "supermarioworldthemeragtime")
    {
        part.href = "pdf/supermarioworldthemeragtime.pdf";
    }
}