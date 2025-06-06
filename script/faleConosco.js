document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sugestaoForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio padrão

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    const avaliacaoSelecionada = document.querySelector('input[name="avaliacao"]:checked');

    if (nome !== "" && email !== "" && mensagem !== "" && avaliacaoSelecionada) {
      alert("Enviado com sucesso!");
      form.reset(); // Limpa o formulário
    }
  });
});
