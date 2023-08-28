// popup
const buttonEl = document.querySelector('.box-top__input');
const blockEntrance = document.querySelector('.entrance');

const secondButton = document.querySelector('.entrance__button');

buttonEl.addEventListener('click', function (e) {
    blockEntrance.classList.toggle("visible");
});

secondButton.addEventListener('click', function (e) {
    blockEntrance.classList.toggle("visible");
});

// слайдер
window.onload = function () {
    var box1 = document.querySelector('.box1'); //выбор боксов по классу//
    var box2 = document.querySelector('.box2');
    var box5 = document.querySelector('.box5');

    // переключение блоков слайдера
    var elements1 = document.querySelectorAll('.box2, .box5');
    var hiddenElements1 = document.querySelectorAll('.box4, .box6');
    var visibleElements1 = document.querySelectorAll('.box3');

    // номера слайдов/изменеие цвета
    var num01White = document.querySelectorAll('.num02, .num03');
    var num02White = document.querySelectorAll('.num01, .num03');
    var num03White = document.querySelectorAll('.num01, .num02');

    var num01Black = document.querySelector('.num01');
    var num02Black = document.querySelector('.num02');
    var num03Black = document.querySelector('.num03');

    // надписи при переключении
    var label01On = document.querySelectorAll('.label02, .label03');
    var label02On = document.querySelectorAll('.label01, .label03');
    var label03On = document.querySelectorAll('.label01, .label02');

    var label01Off = document.querySelector('.label01');
    var label02Off = document.querySelector('.label02');
    var label03Off = document.querySelector('.label03');

    box1.onmouseover = function (e) {                  // box1.onmouseover = function (e) работает при 
        box1.style.maxWidth = '1132px';               //наведении курсора
        elements1.forEach(function (element) {       //box1.onmouseout = function (e) при отведении  
            element.style.maxWidth = '320px';        //курсора.
        });
        hiddenElements1.forEach(function (element) {
            element.style.display = 'none';
        });
        visibleElements1.forEach(function (element) {
            element.style.display = 'flex';

        });
        num01White.forEach(function (element) {
            element.style.color = '#fff';
        });
        num01Black.style.color = '#433C3C';

        label01On.forEach(function (element) {
            element.style.display = 'flex';
        });
        label01Off.style.display = 'none';

    };

    var elements2 = document.querySelectorAll('.box1, .box5');
    var hiddenElements2 = document.querySelectorAll('.box3, .box6');
    var visibleElements2 = document.querySelectorAll('.box4');



    box2.onmouseover = function (e) {
        box2.style.maxWidth = '1132px';
        elements2.forEach(function (element) {
            element.style.maxWidth = '320px';
        });
        hiddenElements2.forEach(function (element) {
            element.style.display = 'none';
        });
        visibleElements2.forEach(function (element) {
            element.style.display = 'flex';
        });
        num02White.forEach(function (element) {
            element.style.color = '#fff';
        });
        num02Black.style.color = '#433C3C';

        label02On.forEach(function (element) {
            element.style.display = 'flex';
        });
        label02Off.style.display = 'none';
    };
    var elements5 = document.querySelectorAll('.box1, .box2');
    var hiddenElements5 = document.querySelectorAll('.box3, .box4');
    var visibleElements5 = document.querySelectorAll('.box6');

    box5.onmouseover = function (e) {
        box5.style.maxWidth = '1132px';
        elements5.forEach(function (element) {
            element.style.maxWidth = '320px';
        });
        hiddenElements5.forEach(function (element) {
            element.style.display = 'none';
        });
        visibleElements5.forEach(function (element) {
            element.style.display = 'flex';
        });
        num03White.forEach(function (element) {
            element.style.color = '#fff';
        });
        num03Black.style.color = '#433C3C';

        label03On.forEach(function (element) {
            element.style.display = 'flex';
        });
        label03Off.style.display = 'none';

    }; //     // box5.onmouseout = function (e) {  }; //при отведении курсора 
};  

//слайдер-карусель
var fragPre = document.createDocumentFragment(),
fragPost = document.createDocumentFragment(),
clonedPre, clonedPost,
selectSlide = document.getElementById("numberOfSlides"),

//options
numberOfSlides = 4;


var items   = document.querySelectorAll("#gallery .events-box .events-box__item"),
len     = items.length,
current = 1,  /* текущий элемент, который мы ищем */
wrapper = document.getElementById("wrapper"),
transformVal = 0;


/* 1. Клонирование последних элементов и добавление к первым */  

for(var i=numberOfSlides ; i > 0 ; i--) {
clonedPre = items[items.length-i].cloneNode(true);
fragPre.append(clonedPre);
}

wrapper.insertBefore(fragPre , items[0]);

/* . Клонирование первых элементов и добавление к первым */  

for(var j = 0 ; j <= numberOfSlides-1 ; j++) {
clonedPost = items[j].cloneNode(true);
fragPost.append(clonedPost);
}

wrapper.appendChild(fragPost);

/* Slider arrow click function */  

var slideWidth=items[0].offsetWidth;
var counter = 0;
var timer = null;
var timeout = null;
wrapper.style.transform = "translate3d(" + (-slideWidth) * (numberOfSlides) + "px,0,0)";

function arrowClick(dir) {
// если тайм-аут || таймер не равен нулю, чем сейчас обрабатывается скольжение, в этом случае запретите обработку действий пользователя
if (timeout || timer) {
  return;
}
timeout = setTimeout(function() {
    counter = 0;
    direction = dir;
    var str = wrapper.style.transform;
    var left = str.substring(12, str.length - 11);
    console.log(left);
    animateSlide(current, left);
    timeout = null; // <-- установка таймаута в ноль, что будет означать, что функция частично (также проверит таймер) готова к действиям нового пользователя
}, 100);
}

/* slide number click function */  

function changeCurrent(curr) {
current = curr;
wrapper.style.transform =  "translate3d(" + -(slideWidth) * (current + (numberOfSlides-1)) + "px,0,0)";
}


/* actual sliding effect */  

function animateSlide(curr, left) {
// if timer is not prevent processing new animation
if (timer) {
  return;
}
timer = setInterval(function() {
    if(counter < slideWidth) {
        counter += 2; // <-- this is the speed of animation. bigger number faster animating
        transformVal = parseInt(left, 10) + (-(counter) * direction);
        wrapper.style.transform = "translate3d(" + transformVal + "px,0,0)";
    } else {
        current += direction;
        cycle = !!(current === 0 || current > len);
        if (cycle) {
          current = (current === 0)? len : 1;
          wrapper.style.transform ="translate3d(" + (-(slideWidth) * (current + (numberOfSlides-1))) + "px,0,0)";
        }
        counter = 0;
        clearInterval(timer);
        timer = null; // <-- setting timer to null and now it's ready for another animaton
    }
}, 0);  
}


