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
        exibirTexto('ul', `${listaAmigos}`);
    }
    limparCampo();
}