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
  }
  //If something attacks a globin, i could run goblin.hurt(5), but this doesn't reflect what is attacking the goblin or give the goblin the ability to defend.
  //Lets add some logic for attack.
  //attack(target:Character):void is going to allow a character to attack a character.  (this can later be adapted to attack objects or other environments if you choose)

  attack(target) {
    // hero.attack(goblin) would set target as goblin.
    const dmg = 5; //Set Damage to a constant.
    target.hurt(5); //this would run goblin.hurt(5)
  }
}

const hero = new Character(50, 16, 7);
const goblin = new Character(10, 12, 4);
