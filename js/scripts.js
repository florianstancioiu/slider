'use strict';

const mainImage = document.querySelector('.main-image');
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');
const thumbnails = document.querySelectorAll('.thumbnail');

rightSide.addEventListener('click', () => {
  const activeImage = document.querySelector('.thumbnail.active');
  const thumbnails = document.querySelectorAll('.thumbnail');

  // retrieve the next sibling or the first element
  let nextImageElement = activeImage.nextElementSibling;
  if (!nextImageElement) {
    nextImageElement = thumbnails[0];
  }

  // clear the active class from thumbnails
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('active');
  });
  nextImageElement.classList.add('active');

  // set the main image to the next image
  mainImage.setAttribute('src', nextImageElement.getAttribute('src'));
});

leftSide.addEventListener('click', () => {
  const activeImage = document.querySelector('.thumbnail.active');
  const thumbnails = document.querySelectorAll('.thumbnail');

  // retrieve the previous or last thumbnail
  let previousImageElement = activeImage.previousElementSibling;
  if (!previousImageElement) {
    previousImageElement = thumbnails[thumbnails.length - 1];
  }

  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove('active');
  });

  previousImageElement.classList.add('active');

  mainImage.setAttribute('src', previousImageElement.getAttribute('src'));
});

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', (event) => {
    const currentTarget = event.target;

    // remove active class from every single thumbnail
    thumbnails.forEach((thumb) => {
      thumb.classList.remove('active');
    });
    currentTarget.classList.add('active');

    // set the main image src to the current target src
    mainImage.setAttribute('src', currentTarget.getAttribute('src'));
  });
});
