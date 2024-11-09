// API variables
const owner = "Matheus-gs";
const repo = "comunidade-academica";
const dataDirectory = "contents";
const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${dataDirectory}`;
const projectRepo = "https://github.com/matheus-gs/comunidade-academica";

// Element references
const linksContainer = document.getElementById("links");
const notFoundSection = document.getElementById("notFoundSection");
const notFoundDecription = document.getElementById("notFoundDescription");
const searchInput = document.getElementById("searchInput");
const githubLink = document.getElementById("githubLink");

let data = [];

// Events
document.addEventListener("DOMContentLoaded", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((repositoryData) => {
      if (Array.isArray(repositoryData)) {
        data = repositoryData;
        renderLinks(data);
      }
    })
    .catch((error) => {
      console.error(`Erro ao buscar os arquivos em: ${apiUrl}, erro =>`, error);
    });
});

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = data.filter((file) =>
    file.name.toLowerCase().includes(searchTerm)
  );
  if (filteredData.length) {
    renderLinks(filteredData);
  } else {
    debounce(renderNotFound(searchTerm), 1500);
  }
});

githubLink.addEventListener("click", () => {
  const linkEl = document.createElement("a");
  linkEl.href = projectRepo;
  linkEl.target = "_blank";
  linkEl.click();
});

// Render functions
function renderLinks(files) {
  linksContainer.innerHTML = "";
  notFoundSection.style.display = "none";

  files.forEach((file) => {
    const linkEl = document.createElement("a");
    linkEl.href = file.html_url;
    linkEl.target = "_blank";
    linkEl.textContent = "Leia aqui";

    const linkCard = document.createElement("span");
    linkCard.className = "link-card";
    linkCard.innerHTML = `<h5>${capitalize(file.name).replace(".md", "")}</h5>`;

    linkCard.appendChild(linkEl);

    linksContainer.appendChild(linkCard);
  });
}

function renderNotFound(searchTerm) {
  linksContainer.innerHTML = "";
  notFoundSection.style.display = "flex";
  notFoundDecription.innerText = `Ooops, não encontramos nenhum conteúdo ${
    searchTerm ? `relacionado a: "${searchTerm}"` : ""
  } 🥹`;
}
