// script.js — Ne touchez plus à ce fichier une fois en place !

function showRandomIdea() {
  const ideaEl = document.getElementById('idea');
  if (!window.ideas || !window.ideas.length) {
    ideaEl.textContent = 'Aucune idée disponible.';
    return;
  }
  const c = window.ideas[
    Math.floor(Math.random() * window.ideas.length)
  ];
  ideaEl.innerHTML =
    `<strong>${c.categorie}</strong> (${c.abstraction})<br>${c.consigne}`;
}

// Au clic, on génère une idée
document
  .getElementById('generate-idea-btn')
  .addEventListener('click', showRandomIdea);

// Au chargement de la page, on affiche directement une idée
window.addEventListener('DOMContentLoaded', showRandomIdea);
