document.addEventListener('DOMContentLoaded', function () {
  console.log('The script is loaded and running!');
});

class Character {
  constructor(maxHp, ac, ap) {
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.ac = ac;
    this.ap = ap;
  }
  #hurt(amount) {
    //Make this private.
    this.hp = this.hp - amount;
    //TODO: Update this function to handel zero health event
  }
  heal(amount) {
    this.hp = Math.min(this.hp + amount, this.maxHp);
  }

  attack(target) {
    const dmg = 5;
    target.defend(5); //update target.hurt(5) to target.defend(5) to allow better processing of an attack.
  }
  //The target may have resistances, immunities, armor, items, etc. that help avoid an attack.  We don't want to allow a method to hurt us without first processing defense
  //At this stage defend just runs hurt, but we will be updating this soon.
  defend(amount) {
    this.#hurt(amount);
    //we made hurt private by adding a # before the name. This means I can no longer call hero.hurt(5).  I now have to call hero.defend(5) and the defend method can call this.hurt(5)
    //this allows me to still have the hurt functionality but protects me from making a mistake in the future and calling it directly without first processing defense.
  }
}

const hero = new Character(50, 16, 7);
const goblin = new Character(10, 12, 4);
