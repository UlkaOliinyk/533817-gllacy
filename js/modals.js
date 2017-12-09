

var link = document.querySelector(".login-link");
var basket = document.querySelector(".button-basket");
var feedback = document.querySelector(".feedback-form-button");
var overlay = document.querySelector(".overlay-dark");

var popup = document.querySelector(".modal-login");
var popupfeedback = document.querySelector(".modal-feedback");
var popupbasket = document.querySelector(".modal-basket");
var close = popupfeedback.querySelector(".modal-close");

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



