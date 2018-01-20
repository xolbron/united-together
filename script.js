function succeed(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("panda").setAttribute("visible","true");
    document.getElementById("fracking").setAttribute("visible","false");
        document.getElementById("sceneAfrica-water").setAttribute("visible","false");
}

function rac(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("panda").setAttribute("visible","false");
    document.getElementById("fracking").setAttribute("visible","true");
        document.getElementById("sceneAfrica-water").setAttribute("visible","false");
}


function (){
    document.getElementById("panda").setAttribute("visible","false");
    document.getElementById("home").setAttribute("visible","true");
    document.getElementById("fracking").setAttribute("visible","false");
        document.getElementById("sceneAfrica-water").setAttribute("visible","false");
}

function travelToAfricawater(){
    document.getElementById("home").setAttribute("visible","false");
    document.getElementById("sceneAfrica-water").setAttribute("visible","true");
    document.getElementById("fracking").setAttribute("visible","false");
    document.getElementById("panda").setAttribute("visible","false");
}