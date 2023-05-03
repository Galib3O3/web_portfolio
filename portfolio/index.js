
var tablinks= document.getElementsByClassName("tab-links");
var contents= document.getElementsByClassName("contents");
function opentab(active){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(content of contents){
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(active).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


