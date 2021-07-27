class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
    this.alive = true;
  }
}

const char = new Character();

console.log(char.alive)

module.exports = Character;