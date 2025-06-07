document.addEventListener("DOMContentLoaded", function () {
  const sobreBtn = document.querySelector(".sobre-btn");
  const sobreTexto = document.querySelector(".sobre");

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

const jogosLink = document.getElementById("jogos");

jogosLink.addEventListener("click", function () {
  window.location.href = "./menuJogo.html";
});

const extrasLink = document.getElementById("extras");

extrasLink.addEventListener("click", function () {
  window.location.href = "./menuExtras.html";
});
