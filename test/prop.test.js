const { TestWatcher } = require('jest');
const Prop = require('../main/prop');
const Character = require('../main/character');
// jest.mock('../main/character');


beforeEach(() => {
  // Character.mockClear();
  character1 = new Character
  prop1 = new Prop
});


test('props have a position and health', () => {

  expect(prop1.checkHealth()).toBe(100);
  expect(prop1.checkPosition()).toBe(0);
});

test('When reduced to 0 Health, prop is destroyed', () => {
  // character1.attack = jest.fn()

  times (5) (() => character1.attack(prop1));

  expect(prop1.isDestroyed()).toBe(true);

});

test('can set prop health to be a custom number', () => {
  prop1.setHealth(2000);
  expect(prop1.checkHealth()).toBe(2000)
});

const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}