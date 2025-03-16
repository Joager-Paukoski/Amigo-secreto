let listaAmigos = [];

function exibirTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    amigoAdicionado = document.querySelector('input');
    amigoAdicionado.value = '';
}

function adicionarAmigo() {
    let amigoAdicionado = document.querySelector('input').value;
    if (amigoAdicionado == '') {
        alert ('Por favor, insira algum nome.');
    }
    else {
        listaAmigos.push(amigoAdicionado);
    }
    limparCampo();
    atualizarLista();
}

function atualizarLista() {
    let listaAmigosAtual = document.querySelector('ul');
    listaAmigosAtual.innerHTML = '';
    listaAmigos.forEach((nome,index) => {
        let li = document.createElement('li');
        li.textContent = nome;
        listaAmigosAtual.appendChild(li);
    });
}
