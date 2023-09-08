import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryCont = document.querySelector(".gallery");
const galleryFun = createImg(galleryItems);

galleryCont.insertAdjacentHTML("afterbegin", galleryFun);

function createImg(galleryItems) {
  const imgEl = galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`;
    })
    .join("");

  return imgEl;
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
