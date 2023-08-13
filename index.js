const menuBtn = document.getElementById("menuBar");
const hamburgerMenu = document.getElementById("hamburgerMenu");
menuBtn.addEventListener("click", () => {
  hamburgerMenu.style.display = "block";
});
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
});
const activeLogin = document.getElementById("active-login");
const loginMenu = document.getElementById("login-menu");
loginMenu.addEventListener("click", () => {
  activeLogin.style.display = "block";
  loginMenu.style.display = "none";
});
