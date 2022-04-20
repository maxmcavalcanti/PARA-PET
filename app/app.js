// Passador automatico do carrosel
let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// Pagina de login e criação de conta
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const containerLogin = document.querySelector(".containerLogin");

sign_up_btn.addEventListener("click", () => {
  containerLogin.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  containerLogin.classList.remove("sign-up-mode");
});
