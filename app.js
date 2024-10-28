let listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', ' jogo do numero secreto'); 
exibirTextoNaTela('p', 'escolha um numero de 1 a 10');

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reniciar').removeAttribute;
        ('disable');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero secreto e menor');
        } else {
            exibirTextoNaTela('p', 'o numero secreto e maior');
        }
        tentativas++;
        limparCampo()
    }

}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

if(quantidadeDeElementosNaLista ==3){
    listaNumerosSorteados = []
}

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
     limparCampo()
     tentativas = 1;
     exibirTextoNaTela('h1', ' jogo do numero secreto'); 
     exibirTextoNaTela('p', 'escolha um numero de 1 a 10');
}