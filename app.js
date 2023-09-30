let listaDeNumerosSorteados = [];
let numeroLimiteSorteados = 100;
let numeroSecreto = gerarNumeroAleatorio();
console.log (numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, `Brazilian Portuguese Female`);
    {rate:1.2};
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', ` Escolha um número entre 1 e ${numeroLimiteSorteados}`);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }   else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteSorteados + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimiteSorteados) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
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
    console.log (numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}




//Desafios

/* let numeroX2 = 10



let resultadoDobro = calcularDobro(5);
console.log (resultadoDobro);
let media = calcularMedia (25, 10, 15);
console.log (media);
let maiorNumero = encontrarMaior(77, 66)
console.log (maiorNumero);
let numero = calcularNumero(5);
console.log (numero);

olaMundo();
exibirNomeConsole("Lucas");
exibirNumeroConsolex2(numeroX2);

function olaMundo() {
    console.log ('Olá Mundo!');
}

function exibirNomeConsole(nome) {
    console.log (`Olá, ${nome}!`);
}

function calcularDobro(numeroX2) {
    return numeroX2 * 2;
}

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

function encontrarMaior (a, b) {
    return a > b ? a : b;
}

function calcularNumero (a) {
    return a * a;
} */

/* let imcAltura;
let imcPeso;

imcAltura = prompt (`Informe a sua Altura:`);
imcPeso = prompt (`Informe o seu peso:`);

let IMC= indiceIMC(imcAltura, imcPeso);
alert (`O seu IMC é: ${IMC}`)

function indiceIMC(a, b) {
    return b / (a * a);
} */

/* let numero;
numero = prompt (`Digite um valor para calculado o fatorial`);
let resultadoFatorial = calcularFatorial(numero);
alert (`O fatorial de ${numero} é ${resultadoFatorial}`);


function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  } */

/* let dolar;
dolar = prompt (`Quantos dolares você vai converter?`);
let real;
real = prompt (`Informe a cotação do real:`);
let conversao = converterDolarReal(dolar, real);
alert (`O valor dos $${dolar} dolare(s) em real é de: R$${conversao}`);

function converterDolarReal(dolar, real) {
    return real * dolar;
} */

/* Crie uma lista vazia, com o nome listaGenerica.
Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
Crie uma função que mostre no console todos os elementos da lista linguagensDeProgamacao.
Crie uma função que mostre no console todos os elementos da lista linguagensDeProgamacao de maneira inversa.
Crie uma função que calcule a média dos elementos em uma lista de números.
Crie uma função que mostre no console o maior e o menor número em uma lista.
Crie uma função que retorna a soma de todos os elementos em uma lista
Crie uma função que retorna a posição da lista onde está um elemento passado como parâmetro, ou -1 caso ele não exista na lista.
Crie uma função que recebe duas listas de números do mesmo tamanho e retorna uma nova lista com a soma elemento a elemento.
Crie uma função que recebe uma lista de números e retorna uma nova lista com o quadrado de cada número.

Resolução: https://github.com/alura-cursos/js-curso-2/tree/desafio_4 */