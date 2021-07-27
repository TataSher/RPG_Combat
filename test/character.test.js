const { TestWatcher } = require('jest');
const Character = require('../main/character');

beforeEach(() => {
  character1 = new Character();
  character2 = new Character();
});


test('health to have 1000', () => {
  
  expect(character1.health).toBe(1000);
});

test('set level to 1 by default', () => {
  expect(character1.level).toBe(1);
});

test('set character status to Alive by default', () => {
  expect(character1.alive).toBe(true);
});

test('when character attacks another character health gets subtracted', () =>{
  
  character1.attack(character2);
  expect(character2.health).toBe(900);
});

test('when character damage exceeds character health, character dies', () => {
  times (10) (() => character1.attack(character2));

  expect(character2.alive).toBe(false);
});

test('character can heal a character giving back 50 health points', () => {
   character1.attack(character2);
   character1.heal(character2);
   
   expect(character2.health).toBe(950);
});

const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}