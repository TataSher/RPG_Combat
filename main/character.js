class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
    this.alive = true;
  }

  attack(enemy) {
    enemy.health = enemy.health - 100
    if (enemy.health <= 0) {
      enemy.alive = false
      console.log('Enemy is dead!')
    }
  }
  heal(enemy) {
    if (enemy.health <= 0) {
      console.log('Character cannot be healed!');
    } else {
      enemy.health = enemy.health + 50
    }
    return enemy.health
  }
}


module.exports = Character;