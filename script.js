const header = document.querySelector("[data-header]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const closeButton = document.querySelector("[data-close]");
const galleryItems = document.querySelectorAll(".gallery-item");
const transparentPixel = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 28);
};

const openLightbox = (button) => {
  const image = button.querySelector("img");
  lightboxImage.src = button.dataset.full;
  lightboxImage.alt = image.alt;
  lightbox.hidden = false;
  document.body.classList.add("is-locked");
  closeButton.focus();
};

const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxImage.src = transparentPixel;
  lightboxImage.alt = "";
  document.body.classList.remove("is-locked");
};

galleryItems.forEach((item) => {
  item.addEventListener("click", () => openLightbox(item));
});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeLightbox();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
