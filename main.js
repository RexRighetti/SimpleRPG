document.addEventListener('DOMContentLoaded', function () {
  console.log('The script is loaded and running!');
});

class Character {
  constructor(hp, ac, ap) {
    this.hp = hp; //Set Starting Hit Points
    this.ac = ac; // Set Starting Armor Class
    this.ap = ap; // Set Starting Attack Power
  }
  hurt(amount) {
    this.hp = this.hp - amount;
    //This reduces hit points by the amount we provided.  Character.hurt(10) would subtract 10 from hit points.
    //What do we want to happen when HP is zero?  In some games like DND you can have negative hit points, but your status becomes unconscious
    //in other games you revert to a check point and restore health.  This is logic you need to add later based on the requirements.
  }
}

const hero = new Character(50, 16, 7);
const goblin = new Character(10, 12, 4);
