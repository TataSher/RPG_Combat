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


test('character cannot heal dead characters', () => {
  times (10) (() => character1.attack(character2));

  expect(() => 
  character2.heal()).toThrow("Character cannot be healed!");
  expect(character2.health).toBe(0);
});

test('characters health cannot exceed 1000', () => {

  expect(() => 
    character1.heal()).toThrow("Character cannot be healed!");
});

test('character cannot deal damage to itself', () => {
  expect(() => 
    character1.attack(character1)).toThrow("No Self Harm for You Today!");
});

test('character cannot heal another character', () => {
  character2.attack(character1);
  character1.heal();

  expect(character1.health).toBe(950);
})

test('character can only heal itself', () => {
  character1.attack(character2);
  
  expect(() => 
  character1.heal(character2)).toThrow("Character cannot be healed!");
});

test('character gains a level when it kills another character', () => {
  times (10) (() => character1.attack(character2));

  expect(character1.level).toBe(2);
});

test('characters 5 levels above taken 50% less dmg', () => {
  character1.level = 10;
  character2.attack(character1);

  expect(character1.health).toBe(950);
});

const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}