const meuJson = '{"nome" : "Douglas","idade" : 49}';

console.log(meuJson)

const meuObjeto = JSON.parse(meuJson);

console.log(meuObjeto)

console.log(meuObjeto.nome)
console.log(meuObjeto.idade)


const minhaString = JSON.stringify(meuObjeto);

console.log(minhaString)

const nomeIdade = JSON.parse('{"nome":"Douglas"}')
console.log(nomeIdade)



const cep = document.getElementById("cep"); 

const logradouro = document.getElementById("logradouro"); 

const bairro = document.getElementById("bairro"); 

const localidade = document.getElementById("localidade"); 

const estado = document.getElementById("estado"); 

  

cep.addEventListener("blur", function () { 

  fetch(`https://viacep.com.br/ws/${cep.value}/json/`) 

     .then((response) => response.json()) 

     .then((data) => { 

       logradouro.value = data.logradouro;

       bairro.value = data.bairro; 

       localidade.value = data.localidade; 

       estado.value = data.uf; 
       
    }); 
    
}); 


