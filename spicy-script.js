onscroll = function() {scrollFunction()};

let opened = false;

function scrollFunction() {
    if (opened == false) {
        if (document.documentElement.scrollTop < 550) {
            document.getElementById("side-nav").style.width = "0"
            document.getElementById("nav-icon").style.right = "-105%";
        } else {
            document.getElementById("nav-icon").style.right = "-97%";
        }
    }
}

function controlNav(icon) {
    if (opened == false) {
        document.getElementById("side-nav").style.width = "225px";
        document.getElementById("nav-icon").style.right = "calc(-100% + 275px)";
        icon.classList.toggle("bar-change")
        opened = true;
    } else {
        document.getElementById("side-nav").style.width = "0";
        document.getElementById("nav-icon").style.right = "-97%";
        icon.classList.toggle("bar-change")
        opened = false;
    }
}