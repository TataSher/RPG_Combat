class Prop {
  constructor() {
    this.health = 100;
    this.position = 0;
    this.destroyed = false
  }

  checkHealth = () => this.health

  checkPosition = () => this.position

  isDestroyed() {
    console.log(this.health)
    if (this.health <= 0) {
      
    this.destroyed = true
    }
    return this.destroyed
  }

  setHealth(number) {
    this.health = number
  }
};

module.exports = Prop;