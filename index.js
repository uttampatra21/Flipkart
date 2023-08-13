const menuBtn = document.getElementById("menuBar");
const hamburgerMenu = document.getElementById("hamburgerMenu");
menuBtn.addEventListener("click", () => {
  hamburgerMenu.style.display = "block";
});
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
});
