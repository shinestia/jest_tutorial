//import sum from './sum.js';

test('2 plus 2 = 4', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = -1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});