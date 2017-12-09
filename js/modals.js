

var link = document.querySelector(".login-link");
var basket = document.querySelector(".button-basket");
var feedback = document.querySelector(".feedback-form-button");
var overlay = document.querySelector(".overlay-dark");

var popup = document.querySelector(".modal-login");
var popupfeedback = document.querySelector(".modal-feedback");
var popupbasket = document.querySelector(".modal-basket");


var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var storage = localStorage.getItem("login");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});


basket.addEventListener("click", function (evt) {
  popupbasket.classList.add("modal-show");
  console.log("корзина появись");
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupbasket.classList.contains("modal-show")) {
      popupbasket.classList.remove("modal-show");
    }
  }
});



var close = popupfeedback.querySelector(".modal-close");


feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupfeedback.classList.add("modal-show-bounce");
  overlay.classList.add("modal-show");
  console.log("фон затемняется");
  if (storage) {
    login.value = storage;
    password.focus();
      } else {
    login.focus();

  }
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
  } else {
    localStorage.setItem("login", login.value);
  }
});





window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupfeedback.classList.contains("modal-show-bounce")) {
      popupfeedback.classList.remove("modal-show-bounce");
      overlay.classList.remove("modal-show");
    }
  }
});



close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupfeedback.classList.remove("modal-show-bounce");
  overlay.classList.remove("modal-show");
});


var mapLink = document.querySelector(".modal-map");
var mapPopup = document.querySelector(".modal-yandex-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});



var slide1 = document.querySelector("#slide1");
var slide2 = document.querySelector("#slide2");
var slide3 = document.querySelector("#slide3");
var green = document.querySelector(".overlay-color-green");
var pink = document.querySelector(".overlay-color-pink");
var choco = document.querySelector(".overlay-color-choco");


slide1.addEventListener("click", function (evt) {
  if (choco.classList.contains("modal-show")) {
    choco.classList.remove("modal-show");}
  if (pink.classList.contains("modal-show")) {
      pink.classList.remove("modal-show");  }  
    green.classList.add("modal-show");
  
});
slide2.addEventListener("click", function (evt) {
  if (green.classList.contains("modal-show")) {
      green.classList.remove("modal-show");}
  if (choco.classList.contains("modal-show")) {
      choco.classList.remove("modal-show");}
    pink.classList.add("modal-show");
    
});
slide3.addEventListener("click", function (evt) {
  if (pink.classList.contains("modal-show")) {
    pink.classList.remove("modal-show");  } 
  if (green.classList.contains("modal-show")) {
      green.classList.remove("modal-show");}
    choco.classList.add("modal-show");
    
});



