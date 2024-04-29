

// navbar home..
let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

// Slider JavaScript
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-slide');
const nextBtn = document.querySelector('.next-slide');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    
}



// Auto-play functionality
let autoPlayInterval = setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 3000);

// Pause auto-play on hover





// navbar
let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("showData");

  if (ul.classList.contains("showData")) {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

