document.addEventListener("DOMContentLoaded", function () {
  const sobreBtn = document.getElementById("sobre-btn");
  const sobreTexto = document.getElementById("textinho");

  sobreBtn.addEventListener("click", function () {
    if (
      sobreTexto.style.display === "none" ||
      sobreTexto.style.display === ""
    ) {
      sobreTexto.style.display = "block";
    } else {
      sobreTexto.style.display = "none";
    }
  });
});

const filmLink = document.getElementById("FilmAnim");

filmLink.addEventListener("click", function () {
  window.location.href = "./filme_animacao.html";
});

const gibiLink = document.getElementById("gibis");

gibiLink.addEventListener("click", function () {
  window.location.href = "./menuHqs.html";
});

const jogosLink = document.querySelector(".jogos");

jogosLink.addEventListener("click", function () {
  window.location.href = "./menuJogo.html";
});

const extrasLink = document.querySelector("#extras");

extrasLink.addEventListener("click", function () {
  window.location.href = "./menuExtras.html";
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("enviar").addEventListener("click", function (e) {
    e.preventDefault();
    const mensagem = document.getElementById("resposta");
    mensagem.classList.remove("hidden");
  });
});
