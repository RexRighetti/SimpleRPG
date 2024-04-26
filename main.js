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
    //TODO: Update this function to handel zero health event
  }
  heal(amount) {
    this.hp = this.hp + amount;
    //This adds the amount provided to the health.  In most RPGs we do not want to go over Max health.  We will fix this in the next commit.
  }
}

const hero = new Character(50, 16, 7);
const goblin = new Character(10, 12, 4);
