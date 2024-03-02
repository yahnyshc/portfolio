function toggleMenu() {
    const menu = document.querySelector('.menu-links')
    const icon = document.querySelector('.hamburger-icon')
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function moveToCenter(id) {
    document.getElementById(id)
    document.getElementById(id).style.transform = "rotate(7deg)";
}