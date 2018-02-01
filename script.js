function home(){
    document.getElementById("home").setAttribute("visible","true");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("gsScene").setAttribute("visible","false");
    document.getElementById("ActivScene").setAttribute("visible","false");
    document.getElementById("storiesScene").setAttribute("visible","false");
}

function borderWallScene(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","true");
    document.getElementById("gsScene").setAttribute("visible","false");
    document.getElementById("ActivScene").setAttribute("visible","false");
    document.getElementById("storiesScene").setAttribute("visible","false");
}

function gsLink(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("gsScene").setAttribute("visible","true");
    document.getElementById("ActivScene").setAttribute("visible","false");
    document.getElementById("storiesScene").setAttribute("visible","false");
}

function storiesButton(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("gsScene").setAttribute("visible","false");
    document.getElementById("ActivScene").setAttribute("visible","false");
    document.getElementById("storiesScene").setAttribute("visible","true");
}

function ActivButton(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("gsScene").setAttribute("visible","false");
    document.getElementById("ActivScene").setAttribute("visible","true");
    document.getElementById("storiesScene").setAttribute("visible","false");
}

function mutevideo(){
    document.getElementById("home-sky-video").setAttribute("muted", "true");
}

function ljobs(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("gsScene").setAttribute("visible","false");
    document.getElementById("ActivScene").setAttribute("visible","true");
    document.getElementById("storiesScene").setAttribute("visible","false");
    document.getElementById("ljobsBio").setAttribute("visible","true");
    document.getElementById("ljobs-plus").setAttribute("visible","false");
}

function jmurguia(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("the-border-wall").setAttribute("visible","false");
    document.getElementById("gsScene").setAttribute("visible","false");
    document.getElementById("ActivScene").setAttribute("visible","true");
    document.getElementById("storiesScene").setAttribute("visible","false");
    document.getElementById("jmurguiaBio").setAttribute("visible","true");
    document.getElementById("jmurguia-plus").setAttribute("visible","false");

}