const tabs = document.querySelector(".tabs");
const tab_btns = tabs.querySelectorAll(".tablinks");
const gallery = document.querySelector(".gallery");
const gallery_panel = document.querySelector(".gallery panel")
const about = document.querySelector("#aboutPanel");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("close");
const images = gallery.querySelectorAll('img');
const gallery_size = 24;

let galleryActive = true;

console.log(gallery, about);

console.log(tab_btns);

function add_to_gallery(i, ){
    const gallery_img = document.createElement("img");
    gallery_img.src = ``;

}

images.forEach(img => {
  img.addEventListener("click", () => {
    if(!galleryActive) {
        return;
    }
    lightboxImg.src = img.src;
    lightbox.classList.add("active");

    // Disable gallery interaction underneath
    images.forEach(i => i.style.pointerEvents = "none");
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");

  if(!galleryActive) {
    images.forEach(i => i.style.pointerEvents = "none")
    return;
    }
  // Re-enable gallery interaction
  images.forEach(i => i.style.pointerEvents = "auto");
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// images.forEach(img => {
//   img.addEventListener("click", () => {
//     lightboxImg.src = img.src;       // show clicked image in lightbox
//     lightbox.classList.remove("hidden");

//     // Disable hover zoom while lightbox is open
//     images.forEach(i => i.style.pointerEvents = "none");
//   });
// });

// function closeLightbox() {
//   lightbox.classList.add("hidden");
//   images.forEach(i => i.style.pointerEvents = "auto"); // re-enable hover zoom
// }

// closeBtn.addEventListener("click", closeLightbox);

// // Close by clicking outside the image
// lightbox.addEventListener("click", (e) => {
//   if (e.target === lightbox) {
//     closeLightbox();
//   }
// });

// // Optional: close with Escape key
// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     closeLightbox();
//   }
// });

const home_btn = tab_btns[0];
// const project_btn = tab_btns[1];
const about_btn = tab_btns[1];

home_btn.classList.add("active");

function on_about_click() {
    galleryActive = false;
    console.log(gallery, about);
    console.log(about_btn);
    gallery.classList.add("hidden");
    about.classList.remove("hidden");
    home_btn.classList.remove("active");
    about_btn.classList.add("active");
    about.style.zIndex = '0';
    gallery.style.zIndex = '2';
    closeLightbox();
    
}

function on_home_click() {
    galleryActive = true;
    console.log(gallery, about);
    about.classList.add("hidden");
    gallery.classList.remove("hidden");
    home_btn.classList.add("active");
    about_btn.classList.remove("active");
    about.style.zIndex = '2';
    gallery.style.zIndex = '0';
    closeLightbox();
}

home_btn.addEventListener("click", on_home_click);
about_btn.addEventListener("click", on_about_click);