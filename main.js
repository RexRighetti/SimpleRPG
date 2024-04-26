document.addEventListener('DOMContentLoaded', function () {
  console.log('The script is loaded and running!');
});

function d(sides) {
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
    const hitRoll = d(20) + this.ap; //we can now have a random roll to hit buffed by attack power.
    const damageRoll = d(4) + d(4) + 3; // we can now have random damage.  In this case it would be between 5 and 11.
    target.defend(hitRoll, damageRoll); // Add the hitRoll to defend
  }

  defend(hitRoll, damageRoll) {
    //update defends parameters.
    //If Hit roll is > than armor class, the attack lands and we take damage, otherwise the attack is blocked.
    if (hitRoll > this.ac) this.#hurt(damageRoll);
  }
}

const hero = new Character(50, 16, 7);
const goblin = new Character(10, 12, 4);
