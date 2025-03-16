let listaAmigos = [];

function limparCampo(){
    let amigoAdicionado = document.querySelector('input');
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
    exibirLista();
}

function exibirLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaAmigos.forEach((nome,index) => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if(listaAmigos.length == 0){
        alert('Adicione pelo menos um nome antes de sortear.');
    }
    else {
        let indiceSorteado = Math.floor(Math.random()*listaAmigos.length);
        let amigoSorteado = listaAmigos[indiceSorteado];
        let exibirResultado = document.getElementById('resultado');
        exibirResultado.innerHTML = `O amigo secreto sorteado foi: ${amigoSorteado}`
    }
}