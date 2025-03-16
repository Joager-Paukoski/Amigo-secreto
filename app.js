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
    if(listaAmigos.length <= 1){
        alert('Adicione pelo menos dois nomes antes de sortear.');
    }
    else {
        let amigoSorteado = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
        let exibirResultado = document.getElementById('resultado');
        exibirResultado.innerText = `O amigo secreto sorteado foi: ${amigoSorteado}`
    }
}