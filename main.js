document.addEventListener('DOMContentLoaded', function () {
  console.log('The script is loaded and running!');
});

class Character {
  constructor(maxHp, ac, ap) {
    // updated parameter from HP to maxHP
    this.maxHp = maxHp; //added new attribute to track maximum HP
    this.hp = maxHp; //set HP to full
    this.ac = ac;
    this.ap = ap;
  }
  hurt(amount) {
    this.hp = this.hp - amount;
    //TODO: Update this function to handel zero health event
  }
  heal(amount) {
    this.hp = Math.min(this.hp + amount, this.maxHp);
    //this.hp is set to the lessor value of this.hp + amount and this.maxHp.  therefore if you heal more than maxHP, HP will be set to the max.
  }
}

const hero = new Character(50, 16, 7);
const goblin = new Character(10, 12, 4);
