let navbar = document.querySelector(".navbar");

document.querySelector("#hotel-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

const content = document.querySelector('[data-shrink="yes"]');

const span = document.querySelector('[data-shrink="yes"] span');

span.classList.add("aparecer");

setInterval(() => {
  content.classList.toggle("shrink");
}, 5000);

setTimeout(() => {
  setInterval(() => {
    span.classList.toggle("aparecer");
  }, 5000);
}, 200);

const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 5.0;

function animaScroll() {
  const topoItem = scrollAnima.getBoundingClientRect().top;

  const itemVisivel = topoItem - metadeWindow < 0;

  if (itemVisivel) {
    scrollAnima.classList.add("show-button");
  } else {
    scrollAnima.classList.remove("show-button");
  }
}

window.addEventListener("scroll", animaScroll);

function iniciaModal(modalID) {
  if (localStorage.fechaModal !== modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
      modal.classList.add("mostrar");
      modal.addEventListener("click", (e) => {
        if (e.target.id == modalID || e.target.className == "fechar") {
          modal.classList.remove("mostrar");
          localStorage.fechaModal = modalID;
        }
      });
    }
  }
}

const home = document.querySelector(".home");
home.addEventListener("click", () => iniciaModal("modal-promocao"));

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    iniciaModal("modal-promocao");
  }
});

let time = 4000,
  currentImageIndex = 0,
  images = document.querySelectorAll("#slider img");
max = images.length;

function nextImage() {
  images[currentImageIndex].classList.remove("selected");
  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected");
}

function start() {
  setInterval(() => {
      nextImage();
  }, time)
}

window.addEventListener("load", start);
