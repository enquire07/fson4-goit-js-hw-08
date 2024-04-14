import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('ul.gallery');

const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>`;
    })
    .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', photosMarkup);
const galleryHandler = new SimpleLightbox('.gallery a', {
  captionData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
