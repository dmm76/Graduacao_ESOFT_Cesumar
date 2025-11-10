aluno = {
  nome: "",
  matricula: 0,
  notas: [],
  media : ()=>
    (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) /
    aluno.notas.length  
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", enviarNotas);
});

function enviarNotas(event) {
  event.preventDefault();

  aluno.nome = document.getElementById("nomeAluno").value;
  aluno.matricula = document.getElementById("matriculaAluno").value;
  aluno.notas[0] = parseFloat(document.getElementById("nota01").value);
  aluno.notas[1] = parseFloat(document.getElementById("nota02").value);
  aluno.notas[2] = parseFloat(document.getElementById("nota03").value);
  aluno.notas[3] = parseFloat(document.getElementById("nota04").value);
  if (!aluno.nome || !aluno.matricula || aluno.notas.some(isNaN)) {
    alert("Preencha todos os campos corretamente.");
    return;
  }
  const media = aluno.media();

  document.getElementById("impressao").textContent = `Aluno ${aluno.nome} (Matrícula: ${aluno.matricula}) - Média: ${media.toFixed(2)}`;
  const tabela = document.getElementById("tabelaAlunos").querySelector("tbody");
  const novaLinha = tabela.insertRow();

  const celulaNome = novaLinha.insertCell(0);
  const celulaMatricula = novaLinha.insertCell(1);
  const celulaMedia = novaLinha.insertCell(2);

  celulaNome.textContent = aluno.nome;
  celulaMatricula.textContent = aluno.matricula;
  celulaMedia.textContent = media.toFixed(2);
  document.querySelector("form").reset();

  console.log(aluno);
}
