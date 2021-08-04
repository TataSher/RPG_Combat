const { TestWatcher } = require('jest');
const Prop = require('../main/prop');
const Character = require('../main/character');
// const { jest, beforeEach, test, expect } = require('@jest/globals');
jest.mock('../main/character');

beforeEach(() => {
  Character.mockClear()
  character1 = new Character
  prop1 = new Prop
});

test('props can be attacked by a character', () => {
  character1.attack(prop1);
  
  expect(prop1.health).toBe(400);
});
