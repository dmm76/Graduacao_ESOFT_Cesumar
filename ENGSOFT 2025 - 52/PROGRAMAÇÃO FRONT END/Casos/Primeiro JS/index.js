const perguntas = [
  {
    enunciado: "Qual o maior planeta do sistema solar?",
    alternativa: ["Jupiter", "Saturno", "Urano", "Netuno"],
    resposta: "Jupiter"
  },
  {
    enunciado: "Qual o menor planeta do sistema solar?",
    alternativa: ["Marte", "Mercurio", "Terra", "Venus"],
    resposta: "Mercurio"
  }
];

let indicePergunta = 0;
let pontuacao = 0;

function exibirPergunta() {
  const pergunta = perguntas[indicePergunta];
  document.getElementById("enunciado").innerText = pergunta.enunciado;

  const botoes = document.querySelectorAll(".alternativa");
  botoes.forEach((botao, i) => {
    botao.innerText = pergunta.alternativa[i];
    botao.disabled = false; // reativa os botões
    botao.style.backgroundColor = ""; // limpa cor
  });

  document.getElementById("feedback").innerText = "";
  document.getElementById("contador").innerText = indicePergunta + 1;
}

function verificarResposta(botao) {
  const respostaSelecionada = botao.innerText;
  const respostaCorreta = perguntas[indicePergunta].resposta;

  if (respostaSelecionada === respostaCorreta) {
    botao.style.backgroundColor = "green";
    document.getElementById("feedback").innerText = "✅ Resposta correta!";
    pontuacao++;
    document.getElementById("pontuacao").innerText = pontuacao;
  } else {
    botao.style.backgroundColor = "red";
    document.getElementById("feedback").innerText = `❌ Errado! Resposta correta: ${respostaCorreta}`;
  }

  // Desativa todos os botões após resposta
  document.querySelectorAll(".alternativa").forEach(b => b.disabled = true);
}

function proximaPergunta() {
  indicePergunta++;

  if (indicePergunta < perguntas.length) {
    exibirPergunta();
  } else {
    document.getElementById("enunciado").innerText = "🏁 Fim do jogo!";
    document.getElementById("alternativas").innerHTML = "";
    document.getElementById("feedback").innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
    document.querySelector("button[onclick='proximaPergunta()']").disabled = true;
  }
}

// Inicia a primeira pergunta ao carregar
document.addEventListener("DOMContentLoaded", exibirPergunta);
