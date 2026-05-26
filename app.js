let listaNumerosSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// let titulo = document.querySelector ('h1');
// titulo.innerHTML = 'Jogo do numero secreto';
// let paragrafo = document.querySelector ('p');
// paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

//isso faz uma funcao que pode resumir o codigo acima
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
   //chama a funcao e define os valores da tag e texto
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
 
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = `Voce descobriu o numero secreto!! com ${tentativas} ${palavraTentativa}!!`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero e menor');
        }
        else {
            exibirTextoNaTela('p', 'O numero e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElemntosNaLista = listaNumerosSorteado.length;

    if (quantidadeDeElemntosNaLista == numeroLimite) {
        listaNumerosSorteado = [];
    }

    if (listaNumerosSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaNumerosSorteado.push(numeroEscolhido);
        console.log(listaNumerosSorteado);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    //desativa o botao de novo jogo antes de acertar
}