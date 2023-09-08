import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Завдання 1.1----------------------------------------------------------------------

const galleryCont = document.querySelector(".gallery");
const galleryFun = createImg(galleryItems);

galleryCont.insertAdjacentHTML("afterbegin", galleryFun);

function createImg(galleryItems) {
  const imgEl = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");

  return imgEl;
}

// Завдання 1.2 ----------------------------------------------------------------------

galleryCont.addEventListener("click", galleryFunListen);

function galleryFunListen(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const orginalImg = event.target.dataset.source;
  console.log(orginalImg);
  const instance = basicLightbox.create(`
    <img src="${orginalImg}" width="800" height="600">
`);

  instance.show();
}

// Завдання 1.3 ----------------------------------------------------------------------

// Add -
/* <script src="
https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js
"></script>
<link href="
https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css
" rel="stylesheet"> */

// Завдання 1.4 ----------------------------------------------------------------------
