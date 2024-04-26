document.addEventListener('DOMContentLoaded', function () {
  console.log('The script is loaded and running!');
});

function d(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

//Lets add logs to the character class we can a little detail on what is happening
// We are going to use template strings.  this uses the backtick '`' instead of single or double quotes.  the backtick is on the key with the tildes '~'
//a template string lets you include javascript in the string by escaping the js with `${JS GOES HERE}`
//an example would be 'you rolled a ${d(6)}' inside the escape we call the d(6) function.  If the d(6) function returns 3, the output would be "you rolled a 3"

class Character {
  constructor(name, maxHp, ac, ap) {
    this.name = name; //Add a name attribute to improve our logs
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.ac = ac;
    this.ap = ap;
  }
  #hurt(amount) {
    this.hp = this.hp - amount;
    //TODO: Update this function to handel zero health event

    console.log(`${this.name} takes ${amount} damage`);
  }
  heal(amount) {
    this.hp = Math.min(this.hp + amount, this.maxHp);
    console.log(`${this.name} is healed ${amount} points`);
    //do we want to correct this log to show point or points depending on if the value is 1 or >1?
  }

  attack(target) {
    const hitRoll = d(20) + this.ap;
    const damageRoll = d(4) + d(4) + 3;
    console.log(
      `${this.name} attacks ${target.name} and rolls a ${hitRoll} to hit`
    );
    target.defend(hitRoll, damageRoll);
  }

  defend(hitRoll, damageRoll) {
    console.log(`${this.name}'s armor class is ${this.ac}`);
    if (hitRoll > this.ac) {
      console.log('The attack lands');
      this.#hurt(damageRoll);
    } else {
      console.log('The attack misses');
    }
  }
}

const hero = new Character('Mino', 50, 16, 7); //Update to instantiate the class with a name attribute.
const goblin = new Character('Goblin', 10, 12, 4);
