const {
  checkMatch,
  calculateScore,
  isGameOver,
  shuffleDeck,
  validateCardsIntegrity
} = require('./gameLogic');

describe('Testes Unitários do Jogo da Memória - Proteção contra Golpes', () => {

  test('1. Deve validar acerto quando os IDs das cartas forem iguais', () => {
    expect(checkMatch(1, 1)).toBe(true);
  });

  test('2. Deve recusar correspondência para cartas com IDs diferentes', () => {
    expect(checkMatch(1, 2)).toBe(false);
  });

  test('3. Deve calcular a pontuação corretamente com base nas tentativas', () => {
    const score = calculateScore(8, 8);
    expect(score).toBe(100);
  });

  test('4. Deve identificar o fim do jogo quando todos os 8 pares forem encontrados', () => {
    expect(isGameOver(8, 8)).toBe(true);
    expect(isGameOver(7, 8)).toBe(false);
  });

  test('5. Deve validar a integridade estrutural das 16 cartas', () => {
    const mockCards = Array(16).fill({ id: 1, text: "Segurança" });
    expect(validateCardsIntegrity(mockCards)).toBe(true);
  });

});