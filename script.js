
const buttonEl = document.querySelector('.box-top__input');
const blockEntrance = document.querySelector('.entrance');

const secondButton = document.querySelector('entrance__button');

buttonEl.addEventListener('click', function (e) {
    blockEntrance.classList.toggle("visible");
});

secondButton.addEventListener('click', function (e) {
    blockEntrance.classList.toggle("visible");
});


