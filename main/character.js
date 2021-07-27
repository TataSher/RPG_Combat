class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
    this.alive = true;
  }

  attack(enemy) {
    enemy.health = enemy.health - 100
    return enemy.health
  }
}

const char1 = new Character();
const char2 = new Character();

console.log(char1.attack(char2))

module.exports = Character;