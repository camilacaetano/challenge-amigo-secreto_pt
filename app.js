let amigos = []

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação do Campo
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    // Adicionar o nome a lista
    amigos.push(nome);
    atualizarLista();

    console.log(nome)

    // Limpar o campo de entrada
    input.value = "";
}
