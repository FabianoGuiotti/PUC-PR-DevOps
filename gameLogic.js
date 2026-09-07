function checkMatch(cardAId, cardBId) {
  if (!cardAId || !cardBId) return false;
  return cardAId === cardBId;
}

function calculateScore(moves, totalPairs = 8) {
  if (moves < totalPairs) return 0;
  return Math.max(10, Math.round((totalPairs / moves) * 100));
}

function isGameOver(matchedPairs, totalPairs = 8) {
  return matchedPairs === totalPairs;
}

function shuffleDeck(cards) {
  if (!Array.isArray(cards)) return [];
  return [...cards].sort(() => 0.5 - Math.random());
}

function validateCardsIntegrity(cards) {
  return cards.length === 16 && cards.every(c => c.id && c.text);
}

module.exports = {
  checkMatch,
  calculateScore,
  isGameOver,
  shuffleDeck,
  validateCardsIntegrity
};