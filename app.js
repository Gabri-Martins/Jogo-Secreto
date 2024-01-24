let numeroSecreto = geraNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function geraNumeroAleatorio() {
    return parseInt(Math.random()*10 + 1);
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!!');
        exibirTextoNaTela('p', 'Você Acertou o Numero secreto!');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
    }

}
