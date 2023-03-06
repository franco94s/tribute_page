const menu = document.querySelector(".menu");
const cruz = document.querySelector(".cruz");

menu.onclick = function() {
    navbar = document.querySelector(".navbar");
    icon = document.querySelector(".icon");
    burguer = document.querySelector(".menu");
    links = document.querySelector(".links");
    socialMedia = document.querySelector(".socialMedia");

    navbar.classList.toggle("active");
    icon.classList.toggle("active");
    menu.classList.toggle("active");
    cruz.classList.toggle("active");
    links.classList.toggle("active");
    socialMedia.classList.toggle("active");
}

cruz.onclick = function() {
    navbar.classList.toggle("active");
    icon.classList.toggle("active");
    menu.classList.toggle("active");
    cruz.classList.toggle("active");
    links.classList.toggle("active");
    socialMedia.classList.toggle("active");
}
