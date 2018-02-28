function home(){
    document.getElementById("home").setAttribute("visible","true");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("voiceScene").setAttribute("visible","false");
    document.getElementById("heroesScene").setAttribute("visible","false");
    document.getElementById("birthScene").setAttribute("visible","false");
}

function borderWallButton(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","true");
    document.getElementById("voiceScene").setAttribute("visible","false");
    document.getElementById("heroesScene").setAttribute("visible","false");
    document.getElementById("birthScene").setAttribute("visible","false");
    document.getElementById("border").setAttribute("autoplay","true");
    $(document.getElementById("border")).prop('muted', false);
}

function voiceButton(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("voiceScene").setAttribute("visible","true");
    document.getElementById("heroesScene").setAttribute("visible","false");
    document.getElementById("birthScene").setAttribute("visible","false");
}

function birthButton(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("voiceScene").setAttribute("visible","false");
    document.getElementById("heroesScene").setAttribute("visible","false");
    document.getElementById("birthScene").setAttribute("visible","true");
}

function heroesButton(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("voiceScene").setAttribute("visible","false");
    document.getElementById("heroesScene").setAttribute("visible","true");
    document.getElementById("birthScene").setAttribute("visible","false");
}

function mutevideo(){
    document.getElementById("home-sky-video").setAttribute("muted", "true");
}

// Under Heroes of DACA

function ljobs(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("voiceScene").setAttribute("visible","false");
    document.getElementById("heroesScene").setAttribute("visible","true");
    document.getElementById("birthScene").setAttribute("visible","false");
    document.getElementById("ljobsBio").setAttribute("visible","true");
    document.getElementById("ljobs-plus").setAttribute("visible","false");
}

function jmurguia(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("voiceScene").setAttribute("visible","false");
    document.getElementById("heroesScene").setAttribute("visible","true");
    document.getElementById("birthScene").setAttribute("visible","false");
    document.getElementById("jmurguiaBio").setAttribute("visible","true");
    document.getElementById("jmurguia-plus").setAttribute("visible","false");
}