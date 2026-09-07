const cardsData = [
  { id: 1, text: "Phishing" },
  { id: 1, text: "Desconfiar de links e remetentes falsos" },
  { id: 2, text: "Golpe do Pix" },
  { id: 2, text: "Conferir destinatário antes do envio" },
  { id: 3, text: "2FA (MFA)" },
  { id: 3, text: "Autenticação em dois fatores ativa" },
  { id: 4, text: "Engenharia Social" },
  { id: 4, text: "Não ceder dados sob pressão ou urgência" },
  { id: 5, text: "Smishing" },
  { id: 5, text: "Ignorar SMS com links suspeitos" },
  { id: 6, text: "Senha Forte" },
  { id: 6, text: "Caracteres variados e frases longas" },
  { id: 7, text: "Site Seguro" },
  { id: 7, text: "Checar HTTPS e domínio oficial" },
  { id: 8, text: "Criptografia" },
  { id: 8, text: "Proteção contra interceptação de rede" }
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matches = 0;

const grid = document.getElementById("grid");
const movesEl = document.getElementById("moves");
const matchesEl = document.getElementById("matches");
const restartBtn = document.getElementById("restart-btn");

function initGame() {
  grid.innerHTML = "";
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  moves = 0;
  matches = 0;
  movesEl.textContent = moves;
  matchesEl.textContent = "0/8";

  const shuffled = [...cardsData].sort(() => 0.5 - Math.random());

  shuffled.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = item.id;
    card.dataset.text = item.text;
    card.textContent = "?";
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard || this === firstCard || this.classList.contains("matched")) return;

  this.classList.add("flipped");
  this.textContent = this.dataset.text;

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  moves++;
  movesEl.textContent = moves;
  checkMatch();
}

function checkMatch() {
  const isMatch = firstCard.dataset.id === secondCard.dataset.id;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.classList.add("matched");
  secondCard.classList.add("matched");
  matches++;
  matchesEl.textContent = `${matches}/8`;
  resetBoard();

  if (matches === 8) {
    setTimeout(() => alert(`Parabéns! Você concluiu o jogo em ${moves} tentativas.`), 300);
  }
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    firstCard.textContent = "?";
    secondCard.textContent = "?";
    resetBoard();
  }, 1000);
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

restartBtn.addEventListener("click", initGame);
initGame();