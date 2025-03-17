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
