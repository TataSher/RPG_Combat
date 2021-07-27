class Character {
  constructor() {
    this.health = 200;
    this.level = 1;
    this.alive = true;
  }

  attack(enemy) {
    enemy.health = enemy.health - 100
    if (enemy.health === 0) {
      enemy.alive = false
    }
    return enemy.alive
  }
}

const char1 = new Character();
const char2 = new Character();

console.log(char1.attack(char2), char1.attack(char2));



module.exports = Character;