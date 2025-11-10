const APIKEY = "45bd1094";
const url = `https://www.omdbapi.com/?apikey=${APIKEY}`;

const buscaTitulos = async (titulo) => {
  const response = await fetch(`${url}&s=${titulo}&type=movie`);
  const data = await response.json();
  return data.Search;
};

const buscaDetalhes = async (id) => {
  const response = await fetch(`${url}&i=${id}`);
  const data = await response.json();
  return data;
};

const criaCard = (filme) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${filme.Poster}" alt="${filme.Title}" />
    <h3>${filme.Title}</h3>
    <p>${filme.Year}</p>
    <button onclick="mostraDetalhes('${filme.imdbID}')">Detalhes</button>
    `;
  return card;
};

const mostraDetalhes = async (id) => {
  const detalhes = await buscaDetalhes(id);
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
        <h3>${detalhes.Title}</h3>
        <p>${detalhes.Plot}</p>
        <p>Diretor: ${detalhes.Director}</p>
        <p>Elenco: ${detalhes.Actors}</p>
        <button onclick="fechaDetalhes()">Fechar</button>
    </div>
    `;
  modal.addEventListener("click", fechaDetalhes);
  document.body.appendChild(modal);
};

const fechaDetalhes = () => {
  document.querySelector(".modal").remove();
};

window.onload = async () => {
  const categorias = [
    {
      titulo: "Filmes do Batman",
      termo: "batman",
    },
    {
      titulo: "Filmes do Superman",
      termo: "superman",
    },
    {
      titulo: "Filmes do Homem-Aranha",
      termo: "spider man",
    },
    {
      titulo: "Filmes do Star Wars",
      termo: "star wars",
    },
    {
      titulo: "Filmes Gospel",
      termo: "Jesus",
    },
  ];
  const mainArea = document.querySelector("main");

  categorias.forEach(async (categoria) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = categoria.titulo;
    mainArea.appendChild(h2);

    const cards = document.createElement("div");
    cards.classList.add("cards");
    mainArea.appendChild(cards);

    const titulos = await buscaTitulos(categoria.termo);
    titulos.forEach((filme) => {
      cards.appendChild(criaCard(filme));
    });
  });
};

document.getElementById("form-busca").addEventListener("submit", async function (event) {
  event.preventDefault();

  const input = document.getElementById("input-busca");
  const termo = input.value.trim();

  if (!termo) {
    alert("Digite algo para buscar.");
    return;
  }

  const mainArea = document.querySelector("main");
  mainArea.innerHTML = ""; // Limpa resultados anteriores

  const h2 = document.createElement("h2");
  h2.innerText = `Resultados para: ${termo}`;
  mainArea.appendChild(h2);

  const cards = document.createElement("div");
  cards.classList.add("cards");
  mainArea.appendChild(cards);

  try {
    const titulos = await buscaTitulos(termo);

    if (!titulos || titulos.length === 0) {
      cards.innerHTML = "<p>Nenhum filme encontrado.</p>";
    } else {
      titulos.forEach((filme) => {
        cards.appendChild(criaCard(filme));
      });
    }
  } catch (erro) {
    cards.innerHTML = "<p>Erro ao buscar filmes. Tente novamente mais tarde.</p>";
  }

  input.value = "";
});