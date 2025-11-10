const carro = [
  {
    marca: "VW",
    modelo: "Gol",
    ano: 2025,
    andar() {
       console.log(this.modelo + " andando");
    }
  },
  {
    marca: "Fita",
    modelo: "147",
    ano: 1980,
     andar() {
       console.log(this.modelo + " andando");
    }
  },
];

document.getElementById("botao").addEventListener("click", function () {
  const input = document.getElementById("entrada");
  const texto = input.value;
  const indice = parseInt(texto);
  
  const objeto = carro[indice];
    let recebe;
  if(objeto == null){
    recebe = "objeto deu ruim"
  }else{
    recebe = `
    Marca: ${objeto.marca}<br>
    Modelo: ${objeto.modelo}<br>
    Ano: ${objeto.ano}
  `;
  }

  document.getElementById("texto").innerHTML = recebe;
});
