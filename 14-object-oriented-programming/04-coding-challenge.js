/*
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the
'brake' method in the 'CarCl' class. Then experiment with chaining!

Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
 */

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
}

class ElectricCarCl extends CarCl {
  #currentBattery;

  constructor(make, speed, currentBattery) {
    super(make, speed);
    this.#currentBattery = currentBattery;
  }

  chargeBattery (chargeTo) {
    this.#currentBattery = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#currentBattery -= 1;
    console.log(`${this.make} going at ${this.speed}km/h with a charge of ${this.#currentBattery}%`);
    return this;
  }
}

const rivian = new ElectricCarCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().brake().chargeBattery(90).accelerate();
console.log(rivian);
