let pessoa = ["Douglas", "Marcelo", 49];
let pessoa2 = ["Patricia", "Oliveira", 49]
let add = ["Engenheiros de Software"]

function atualizarArray() {
  document.getElementById("array").textContent = JSON.stringify(pessoa);
  document.getElementById("array2").textContent = JSON.stringify(pessoa2);
  document.getElementById("array3").textContent = JSON.stringify(add);
  const atualiza = pessoa.concat(pessoa2, add);
  let atualiza2 = "";
  if(pessoa.length > 3){
        atualiza2 = pessoa.slice(3);
    }
  document.getElementById("teste").textContent = JSON.stringify(atualiza);
  document.getElementById("teste2").innerHTML = atualiza2;
}

function adicionarElemento() {
  pessoa.push("TI");
  pessoa2.push("TI")
  atualizarArray();
}

function removerUltimo() {
  pessoa.pop();
  pessoa2.pop();
  atualizarArray();
}

function removerPrimeiro() {
  pessoa.shift();
  pessoa2.shift();
  atualizarArray();
}

function adicionarInicio() {
  pessoa.unshift("Início");
  pessoa2.unshift("Início");
  atualizarArray();
}

function deletarElemento() {
  delete pessoa[1]; // remove o segundo item (deixa undefined)
  delete pessoa2[1];
  atualizarArray();
}

function resetarArray() {
  pessoa = ["Douglas", "Marcelo", 49];
  pessoa2 = ["Patricia", "Oliveira", 49];
  atualizarArray();
}

function fatiar(){
    if(atualiza.length > 3){
        const atualiza2 = atualiza.slice(2);
    }
}

document.addEventListener("DOMContentLoaded", atualizarArray);
