// Recupero gli elementi del form e le azioni dei btn
const inputNome = document.getElementById("username");
const btnSalvea = document.getElementById("saveBtn");
const btnRimuovi = document.getElementById("removeBtn");
const displayNome = document.getElementById("nome-salvato");

// dichiaro una variabile per il form
const formKey = "nome-utente";

// Funzione per aggiornare il testo e salvataggi localstorage
const aggiornaschermo = () => {
  const nomeRecuperato = localStorage.getItem(formKey);
  if (nomeRecuperato) {
    displayNome.innerText = "Nome Salvato: " + nomeRecuperato;
  } else {
    displayNome.innerText = "Nessun nome salvato";
  }
};

// Aggiungo funzionalità al Salva
btnSalvea.addEventListener("click", () => {
  const valoreInserito = inputNome.value; // recupero il valore all'avvio del form
  localStorage.setItem(formKey, valoreInserito);
  aggiornaschermo(); // lancio la funzione per aggiornare la scritta
  inputNome.value = ""; // Svuoto il campo testo
});

// Aggiungo funzionalità al Rimuovi
btnRimuovi.addEventListener("click", () => {
  localStorage.removeItemItem(formKey);
  aggiornaschermo(); // lancio la funzione per aggiornare la scritta
});
aggiornaschermo();

// Recupero il numero dallo span
const displayTimer = document.getElementById("timer");
// Setto il session storage o lo faccio partire da 0 all'avvio della pagina (il text dato allo span)
let secondi = sessionStorage.getItem("tempo-contatore") || 0;
// Appena carico la pagina
displayTimer.innerText = secondi; // che lo vede come un numero

// Creo il timer crescente
// Utilizzo la funzione setInterval ogni 1000 (tempo in millisecondi)
setInterval(() => {
  // Aumento il numero di 1
  secondi++;
  // cambio l'innertext
  displayTimer.innerText = secondi;
  // lo salvo in session storage in modo tale che al refresh parta dal numero corrente
  sessionStorage.setItem("tempo-contatore", secondi);
}, 1000);
