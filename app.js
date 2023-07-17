const nav = document.querySelector(".nav");
const btn = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu i");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
});
