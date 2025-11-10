// Banco de perguntas
const perguntas = [
  {
    enunciado: "Qual é o maior planeta do sistema solar?",
    alternativas: ["Júpiter", "Saturno", "Urano", "Netuno"],
    resposta: "Júpiter",
  },
  {
    enunciado: "Qual é o menor planeta do sistema solar?",
    alternativas: ["Mercúrio", "Vênus", "Marte", "Plutão"],
    resposta: "Mercúrio",
  },
];

// Selecionando elementos HTML
const enunciado = document.getElementById("enunciado");
const alternativas = document.querySelectorAll(".alternativas li");
const btnPerguntar = document.getElementById("btnPerguntar");
const btnParar = document.getElementById("btnParar");

// Criar div para exibir mensagens (caso não exista no HTML)
const mensagem = document.querySelector(".right");

// Elementos das pontuações
const boxErrar = document.getElementById("pontuacaoErrar");
const boxParar = document.getElementById("pontuacaoParar");
const boxAcertar = document.getElementById("pontuacaoAcertar");

// Variáveis para controlar o jogo
let numPergunta = geraNumeroAleatorio();
let alternativaSelecionada = null;
let pontosAtuais = 0;
let valorPorAcerto = 1000;

// Exibição inicial
exibePergunta(numPergunta);
atualizaPontuacao();

// Função para exibir perguntas na tela
function exibePergunta(numero) {
  alternativaSelecionada = null;
  alternativas.forEach((alt) => alt.classList.remove('selecionada'));

  enunciado.innerText = perguntas[numero].enunciado;
  alternativas.forEach((alt, index) => {
    alt.innerText = perguntas[numero].alternativas[index];
  }); 
}

// Gera um número aleatório entre 0 e total de perguntas
function geraNumeroAleatorio() {
  return Math.floor(Math.random() * perguntas.length);
}

// Atualiza valores das caixas de pontuação
function atualizaPontuacao() {
  boxAcertar.innerText = `R$ ${pontosAtuais + valorPorAcerto}`;
  boxParar.innerText = `R$ ${pontosAtuais / 2}`;
  boxErrar.innerText = `R$ 0`;
}

// Evento de clique nas alternativas
alternativas.forEach((alt) => {
  alt.addEventListener("click", () => {
    alternativas.forEach((a) => a.classList.remove("selecionada"));
    alt.classList.add("selecionada");
    alternativaSelecionada = alt.innerText;
  });
});

// Evento botão "Parar"
btnParar.addEventListener("click", () => {
  let premioParar = pontosAtuais / 2;
  mensagem.innerText = `Você parou o jogo! Pontuação final: R$ ${premioParar}`;
  pontosAtuais = 0;
  atualizaPontuacao();
  numPergunta = geraNumeroAleatorio();
  exibePergunta(numPergunta);
});

// Evento botão "Perguntar"
btnPerguntar.addEventListener("click", () => {
  if (!alternativaSelecionada) {
    mensagem.innerText = "Selecione uma alternativa antes de responder!";
    return;
  }

  const respostaCorreta = perguntas[numPergunta].resposta;

  if (alternativaSelecionada === respostaCorreta) {
    pontosAtuais += valorPorAcerto;
    mensagem.innerText = `Você acertou! Pontos: R$ ${pontosAtuais}`;
  } else {
    mensagem.innerText = `Você errou! Pontuação final: R$ 0`;
    pontosAtuais = 0;
  }

  atualizaPontuacao();
  numPergunta = geraNumeroAleatorio();
  exibePergunta(numPergunta);
});
