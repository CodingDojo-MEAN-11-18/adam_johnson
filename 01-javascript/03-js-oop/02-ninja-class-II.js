function Ninja(name){
  if (!(this instanceof Ninja)){
    console.log(name + ' is not a Ninja');
    return new Ninja(name);
  }
  this.name = name;
  this.health = 100;
  this.speed = 3;
  this.strength = 3;
  this.sayName = sayName;
  this.showStats = showStats;
  this.drinkSake = drinkSake;

  function sayName(){
    console.log('My ninja name is ' + this.name);
    return this;
  }

  function showStats(){
    console.log('Name: ' + this.name);
    console.log('Health: ' + this.health);
    console.log('Speed: ' + this.speed);
    console.log('Strength: ' + this.strength);
    return this;
  }
  function drinkSake(){
    this.health += 10;
    return this;
  }
}

Ninja.prototype.punch = function(target){
  if (!(this instanceof Ninja)){
    console.log('Ninja not found!');
    return false;
  }
  target.health -= 5;
  console.log(`${target.name} was punched by ${this.name} and lost 5 Health.`);
  return true;
};

Ninja.prototype.kick = function(target){
  if (!(target instanceof Ninja) || (this instanceof Ninja)){
    console.log('Ninja not found!');
    return false;
  }
  target.health -= 10;
  console.log(`${target.name} was kicked by ${this.name} and lost 10 Health.`);
  return true;
};

const sam = new Ninja('sam');
const gary = new Ninja('gary');

// sam.drinkSake();
// sam.drinkSake();
// sam.punch(gary);
// gary.showStats();
// gary.punch(sam);
// gary.kick(sam);
// sam.showStats();
// gary.showStats();
