const { TestWatcher } = require('jest');
const Prop = require('../main/prop');
const Character = require('../main/character');


beforeEach(() => {
  character1 = new Character
  prop1 = new Prop
});


test('props have a position and health', () => {

  expect(prop1.checkHealth()).toBe(100);
  expect(prop1.checkPosition()).toBe(0)
});
