function openLightbox(imageSrc) {
    document.getElementById("lightbox-img").src = imageSrc;
    document.getElementById("lightbox").classList.add("show");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("show");
}
