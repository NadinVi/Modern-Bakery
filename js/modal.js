// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');
// const modalBtnClose = document.querySelector('.modal-btn-close');

// const toogleModal = () => modal.classList.toggle('is-hidden');

// modalBtnClose.addEventListener('click', toogleModal);
// modalBtnOpen.addEventListener('click', toogleModal);

const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelectorAll(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.forEach((btn) => btn.addEventListener("click", toggleModal));
modalBtnClose.addEventListener("click", toggleModal);
