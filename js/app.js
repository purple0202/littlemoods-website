const tabs = document.querySelector(".tabs");
const tab_btns = tabs.querySelectorAll(".tablinks");
const gallery = document.querySelector(".gallery");
const about = document.querySelector("#aboutPanel");

console.log(gallery, about);

console.log(tab_btns);

const home_btn = tab_btns[0];
const project_btn = tab_btns[1];
const about_btn = tab_btns[2];

home_btn.classList.add("active");

function on_about_click() {
    console.log(gallery, about);
    console.log(about_btn);
    gallery.classList.add("hidden");
    about.classList.remove("hidden");
    home_btn.classList.remove("active");
    about_btn.classList.add("active");
}

function on_home_click() {
    console.log(gallery, about);
    gallery.classList.remove("hidden");
    about.classList.add("hidden");
    home_btn.classList.add("active");
    about_btn.classList.remove("active");
}

home_btn.addEventListener("click", on_home_click);
about_btn.addEventListener("click", on_about_click);