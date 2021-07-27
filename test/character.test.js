const { TestWatcher } = require('jest');
const Character = require('../main/character');

test('health to have 1000', () => {
  character = new Character();
  expect(character.health).toBe(1000);
});

test('set level to 1 by default', () => {
  character = new Character();
  expect(character.level).toBe(1);
});

test('set character status to Alive by default', () => {
  character = new Character();
  expect(character.alive).toBe(true);
});

test('when character attacks another character health gets subtracted', () =>{
  character1 = new Character();
  character2 = new Character();
  character1.attack(character2);
  expect(character2.health).toBe(900);
})