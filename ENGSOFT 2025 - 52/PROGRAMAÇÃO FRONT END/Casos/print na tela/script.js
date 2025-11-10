document.getElementById("texto").innerHTML="Hello,<strong>World</strong>!";

const form = document.getElementById("formulario");
const nomeInput = document.getElementById("nomeInput");
    const declaracaoInput = document.getElementById("declaracaoInput");
    const mensagem = document.getElementById("mensagem");
    const anoNascimentoInput = document.getElementById("idadeInput");
    

    form.addEventListener("onclick", function (event) {
      event.preventDefault();

      const nome = nomeInput.value.trim();
      const declaracao = declaracaoInput.value.trim();
      const anoNascimento = anoNascimentoInput.value.trim();
      const idade = 2025 - anoNascimento;

      if (nome === "" || declaracao === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
      } else {
        mensagem.textContent = `Olá, ${nome}. ${declaracao}! sua idade é de ${idade} anos`;
      }

      // Mostra a mensagem com fade
      mensagem.classList.add("visivel");

      // Limpa os campos

      nomeInput.value = "";
      declaracaoInput.value = "";

      // Oculta a mensagem após 5 segundos
      setTimeout(() => {
        mensagem.classList.remove("visivel");
      }, 5000);
    });


    let a = 10;
    let x = a++;

    {
      const y = 283
      
    }    
   // document.getElementById("texto").innerHTML = x;
   