function bookmarkToggle() {
  const bookmarkToggle = document.querySelector('[data-js="bookmark-toggle"]');

  bookmarkToggle.addEventListener('click', () => {
    bookmarkToggle.classList.toggle('bookmark-aqua');
    console.log(bookmarkToggle.classList.toggle);
  });
}

export default bookmarkToggle;
