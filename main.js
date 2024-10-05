const owner = "Matheus-gs";
const repo = "comunidade-academica";
const dataDirectory = "contents";
const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${dataDirectory}`;
const linksContainer = document.getElementById("links");

document.addEventListener("DOMContentLoaded", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        data.forEach((file) => {
          const linkCard = document.createElement("a");
          linkCard.className = "link-card";
          linkCard.href = file.html_url;
          linkCard.textContent = capitalize(file.name);
          linkCard.target = "_blank";
          linksContainer.appendChild(linkCard);
        });
      }
    })
    .catch((error) => {
      console.error(`Erro ao buscar os arquivos em: ${apiUrl}, erro =>`, error);
    });
});

document.querySelector(".github-icon").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "https://github.com/Matheus-gs/comunidade-academica";
  link.target = "_blank";
  link.click();
});

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
