import galleryItems from './gallery-items.js'

const refs = {
    gallery: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.js-lightbox'),
    lightboxImage: document.querySelector('.lightbox__image'),
    closeButton: document.querySelector('.lightbox__button'),
    lightBoxOverlay: document.querySelector('.lightbox__overlay')
}

function createGalleryItem(element) {
    const galleryItem = document.createElement('li')
    const galleryLink = document.createElement('a')
    const galleryImg = document.createElement('img')

    galleryLink.classList.add('gallery__link')
    // galleryLink.setAttribute('href', element.original)
    galleryItem.classList.add('gallery__item')
    galleryImg.classList.add('gallery__image')
    galleryImg.setAttribute('src', element.preview)
    galleryImg.setAttribute('data-source', element.original)
    galleryImg.setAttribute('alt', element.description)

    galleryLink.append(galleryImg)
    galleryItem.append(galleryLink)

    return galleryItem
}

refs.gallery.append(...galleryItems.map(element => createGalleryItem(element)))

refs.gallery.addEventListener('click', event => {
    refs.lightbox.classList.add('is-open')
    refs.lightboxImage.src = event.target.getAttribute('data-source')
})

refs.closeButton.addEventListener('click', event => {
    refs.lightbox.classList.remove('is-open')
    refs.lightboxImage.src = ''
})

refs.lightBoxOverlay.addEventListener('click', event => {
    refs.lightbox.classList.remove('is-open')
    refs.lightboxImage.src = ''
})