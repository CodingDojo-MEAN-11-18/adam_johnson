class Ninja {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(`Name: ${this.name}`);
  }
  showStats() {
    console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`);
  }
  drinkSake() {
    this.health += 10;
    return this;
  }
}

class Sensei extends Ninja {
  constructor(name){
    super(name);
    this.wisdom = 10;
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
  }
  speakWisdom(message) {
    super.drinkSake();
    message = 'What one programmer can do in one month, two programmers can do in two months.';
    console.log(message);
  }
}

const superSensei = new Sensei('Master Splinter');
superSensei.speakWisdom();
superSensei.showStats();
