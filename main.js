const owner = "Matheus-gs";
const repo = "comunidade-academica";
const dataDirectory = "contents";
const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${dataDirectory}`;
const linksContainer = document.getElementById("links");
const notFoundSection = document.getElementById("notFoundSection");
const notFoundDecription = document.getElementById("notFoundDescription");
const searchInput = document.getElementById("searchInput");

let data = [];

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
    renderNotFound(searchTerm);
  }
});

function renderLinks(files) {
  linksContainer.innerHTML = "";
  notFoundSection.style.display = "none";

  files.forEach((file) => {
    const linkCard = document.createElement("a");
    linkCard.className = "link-card";
    linkCard.href = file.html_url;
    linkCard.textContent = capitalize(file.name).replace(".md", "");
    linkCard.target = "_blank";
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

function capitalize(str) {
  if (!str) {
    return "";
  }

  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
