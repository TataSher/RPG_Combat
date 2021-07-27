const { TestWatcher } = require('jest');
const Character = require('../main/character');

test('health to have 1000', () => {
  character = new Character()
  expect(character.health).toBe(1000);
});
