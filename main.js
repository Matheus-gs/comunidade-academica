document
.querySelector(".github-icon")
.addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "https://github.com/Matheus-gs/comunidade-academica";
  link.target = "_blank";
  link.click();
});

const linkList = [
{
  id: 0,
  label: "Agenda de Eventos",
  href: "https://google.com/search?q=eventos+do+udf",
},
{
  id: 1,
  label: "Notificações",
  href: "https://google.com/search?q=notificacoes+udf",
},
{
  id: 2,
  label: "Espaço para Networking",
  href: "https://google.com/search?q=networking+udf",
},
{
  id: 3,
  label: "Recursos Educacionais",
  href: "https://google.com/search?q=recursos+udf",
},
];

const linksContainer = document.getElementById("links");

linkList.forEach((link) => {
const linkCard = document.createElement("a");
linkCard.className = "link-card";
linkCard.href = link.href;
linkCard.textContent = link.label;
linksContainer.appendChild(linkCard);
});