document.addEventListener('DOMContentLoaded', function () {
  console.log('The script is loaded and running!');
});

function d(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

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

//add a basic UI
class singleCombat {
  constructor(Character1, Character2) {
    this.characters = [Character1, Character2];
    this.turn = d(2) - 1;
    this.renderPlayers();
  }

  renderPlayers() {
    const container = document.getElementById('player-container');
    container.innerHTML = ''; // Clear existing content
    this.characters.forEach((player, index) => {
      const isMyTurn = this.turn === index;
      const playerElement = document.createElement('div');
      playerElement.className = 'player' + (isMyTurn ? ' highlight' : '');
      playerElement.innerHTML = `
        <span class='name'>${player.name}</span>
        <div class='details'>HP: ${player.hp} / ${player.maxHp}, AC: ${
        player.ac
      }, AP: ${player.ap}</div>
        ${
          !isMyTurn
            ? `<button class="attack-button" onclick="combat.attack(${
                this.turn
              }, ${index})">Attack from ${
                this.characters[this.turn].name
              }</button>`
            : ''
        }
        ${
          isMyTurn
            ? `<button class="heal-button" onclick="combat.heal(${this.turn}, ${
                d(4) + d(4)
              })">Heal 2d4</button>`
            : ''
        }
      `;
      container.appendChild(playerElement);
    });
  }
  nextTurn() {
    this.turn = (this.turn + 1) % this.characters.length;
    this.renderPlayers();
  }

  attack(playerIndex, targetIndex) {
    this.characters[playerIndex].attack(this.characters[targetIndex]);
    this.nextTurn();
  }

  heal(playerIndex, amount) {
    this.characters[playerIndex].heal(amount);
    this.nextTurn();
  }
}

const hero = new Character('Mino', 50, 16, 7);
const goblin = new Character('Goblin', 10, 12, 4);
const combat = new singleCombat(hero, goblin);
