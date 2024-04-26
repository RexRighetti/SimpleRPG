document.addEventListener('DOMContentLoaded', function () {
  console.log('The script is loaded and running!');
});

function d(sides) {
  //We can refactor the D20 into one line.  return Math.floor(Math.random() * 20) + 1;
  //but we can also use this function for any dice by adding a sides parameter and replacing 20 with number of sides.
  return Math.floor(Math.random() * sides) + 1;
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
