const buttonElem = document.querySelector(".intro__button");
const modalElem = document.querySelector(".modal");
const buttonCloseElem = document.querySelector(".modal__button");

const openModal = () => {
  modalElem.style.visibility = "visible";
  modalElem.style.opacity = 1;
  modalElem.style.zIndex = 1;
};

const closeModal = (event) => {
  const target = event.target;

  if (target === modalElem) {
    modalElem.style.visibility = "hidden";
    modalElem.style.opacity = 0;
    modalElem.style.zIndex = -1;
  }
};

buttonElem.addEventListener("click", openModal);
modalElem.addEventListener("click", closeModal);
buttonCloseElem.addEventListener("click", closeModal);
