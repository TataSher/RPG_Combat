const { TestWatcher } = require('jest');
const Prop = require('../main/prop');
const Character = require('../main/character');
// const { jest, beforeEach, test, expect } = require('@jest/globals');
// jest.mock('../main/character');

beforeEach(() => {
  character1 = new Character
  prop1 = new Prop
});


test('props can be attacked by a character', () => {
  Character.attack = jest.fn()
  // const loglog = Character.attack
  // console.log(loglog)
  // const attackProp = jest.spyOn(character, "attack")
  character1.attack(prop1);
  // console.log(character1.attack)
  expect(prop1.health).toBe(400);
});
