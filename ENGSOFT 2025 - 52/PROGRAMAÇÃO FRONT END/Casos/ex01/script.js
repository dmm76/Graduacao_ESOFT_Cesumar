document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector("#banner");
  banner.textContent = "Paty Gatinha";
});

const obterMensagem = () =>{
    return document.querySelector("#mensagem").innerHTML
}

console.log(obterMensagem())