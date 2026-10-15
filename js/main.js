const openButton = document.querySelector("#open-letter");
const letter = document.querySelector("#mensagem");
const backButton = document.querySelector("#back-to-top");

openButton.addEventListener("click", () => {
  letter.hidden = false;
  letter.scrollIntoView({ behavior: "smooth", block: "start" });
});

backButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  // A carta permanece disponível ao rolar para baixo novamente.
});
