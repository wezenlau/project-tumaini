onscroll = function() {scrollFunction()};

let navOpened = false;
let socialsOpened = false

function scrollFunction() {
    if (document.documentElement.scrollTop < 550) {
        document.getElementById("side-nav").style.width = "0"
        document.getElementById("nav-icon").style.right = "-105%";
        document.getElementById("icon1").classList.remove("bar-change")
        navOpened = false
    } else if (navOpened == false) {
        document.getElementById("nav-icon").style.right = "calc(-100% + 45px)";
    }
}

function controlNav() {
    if (navOpened == false) {
        document.getElementById("side-nav").style.width = "225px";
        document.getElementById("nav-icon").style.right = "calc(-100% + 275px)";
        document.getElementById("icon1").classList.add("bar-change")
        navOpened = true;
    } else {
        document.getElementById("side-nav").style.width = "0";
        document.getElementById("nav-icon").style.right = "calc(-100% + 45px)";
        document.getElementById("icon1").classList.remove("bar-change")
        navOpened = false;
    }
}

function arrowLoader() {
    document.getElementById("icon2").classList.add("arrow-loader")
}

function arrowSwitch() {
    if (socialsOpened == false) {
        document.getElementById("socials").style.width = "425px"
        document.getElementById("socials").style.opacity = "1"
        document.getElementById("icon2").classList.toggle("arrow-switch")
        document.getElementById("arrow-icon").style.width = "480px"
        socialsOpened = true
    } else {
        document.getElementById("socials").style.width = "0"
        document.getElementById("socials").style.opacity = "0"
        document.getElementById("icon2").classList.toggle("arrow-switch")
        document.getElementById("arrow-icon").style.width = "45px"
        socialsOpened = false
    }
}
