class Character {
  constructor() {
    this.health = 1000;
    this.level = 1;
    this.alive = true;
    this.maxRange = 0;
    this.class 
  }

  selfAttack(enemy) {
    if (enemy === this) { throw "No Self Harm for You Today!" }
  };

  levelAttackCheck(enemy) {
    if (enemy.level >= this.level + 5) {
      enemy.health = enemy.health - 50
    } else if (enemy.level <= this.level - 5) {
      enemy.health = enemy.health - 150
    } else {
    enemy.health = enemy.health - 100
    }
  };

  isDead(enemy) {
    if (enemy.health <= 0) {
      enemy.alive = false;
      this.level += 1 ;
      console.log('Enemy is dead!');
    }
  };

  attack(enemy) {
    this.selfAttack(enemy);
    this.levelAttackCheck(enemy);
    this.isDead(enemy);
  };

  heal() {
    if (this.health <= 0 || this.health >= 1000) {
      throw 'Character cannot be healed!';
    } else {
      this.health = this.health + 50
    }
    
    return this.health
  }

  pickClass(playerClass) {
    if (playerClass === 'Melee') {
      this.class = 'Melee';
      this.maxRange = 2;
    } else if (playerClass === 'Ranged') {
       this.class = 'Ranged';
       this.maxRange = 20
    } else {
      throw "That's not a valid class"
    }
  }
}


module.exports = Character;