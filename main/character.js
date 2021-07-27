class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
  }
}

const char = new Character();

console.log(char.level)

module.exports = Character;