function valCheck() {
    var menuClass = document.getElementById("menubar-icon");
    if (document.getElementById('menubar').checked) {
        menuClass.classList.remove("fa-xmark");
    } else {
        menuClass.classList.add("fa-xmark");
    }
}

function closeNavBar() {
    var menuClass = document.getElementById("menubar-icon");
    document.getElementById('menubar').checked = false;
    menuClass.classList.remove("fa-xmark");
    menuClass.classList.add("fa-solid-fa-bars");
}

window.addEventListener('scroll', function () {
    valCheck();
    closeNavBar();
});