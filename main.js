document.addEventListener('DOMContentLoaded', function () {
  console.log('The script is loaded and running!');
});

function d20() {
  //We are trying to get a random int between zero and 20
  const randomNumber = Math.random(); //return a number equal or greater to zero and less than 1.  0 <= x < 1
  const randomProduct = randomNumber * 20; //0*20 = 0 0.9999 * 20 = 19.998.  This is going to give us a number 0 <= x <20
  const randomInt = Math.floor(randomProduct); // This will round down the number.  We are now going to have ints between 0 and 19
  const d20 = randomInt + 1; // add one to make it a dice.
  return d20;
}

class Character {
  constructor(maxHp, ac, ap) {
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.ac = ac;
    this.ap = ap;
  }
  #hurt(amount) {
    this.hp = this.hp - amount;
    //TODO: Update this function to handel zero health event
  }
  heal(amount) {
    this.hp = Math.min(this.hp + amount, this.maxHp);
  }

  attack(target) {
    const dmg = 5;
    target.defend(5);
  }

  defend(amount) {
    this.#hurt(amount);
  }
}

const hero = new Character(50, 16, 7);
const goblin = new Character(10, 12, 4);
