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

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");

    // Limpar a lista antes de adicionar novos elementos
    lista.innerHTML = "";

    for (let amigo of amigos) {
        const item = document.createElement("li");
        item.textContent = amigo; 
        lista.appendChild(item); 
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Nenhum amigo disponível para sortear.</li>";
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `<li>O amigo sorteado foi: ${amigoSorteado}</li>`;
}