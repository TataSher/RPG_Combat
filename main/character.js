class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
    this.alive = true;
  }

  attack(enemy) {
    if (enemy === this) {
      throw "No Self Harm for You Today!"
    }
    enemy.health = enemy.health - 100
    if (enemy.health <= 0) {
      enemy.alive = false
      console.log('Enemy is dead!')
    }
  }
  heal() {
    if (this.health <= 0 || this.health >= 1000) {
      throw 'Character cannot be healed!';
    } else {
      this.health = this.health + 50
    }
    
    return this.health
  }
}


module.exports = Character;