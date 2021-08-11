class Prop {
  constructor() {
    this.health = 100;
    this.position = 0;
  }

  checkHealth = () => this.health

  checkPosition = () => this.position
};

module.exports = Prop;