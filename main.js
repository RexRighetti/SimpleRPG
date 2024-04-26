document.addEventListener('DOMContentLoaded', function () {
  console.log('The script is loaded and running!');
});

class Character {
  constructor(hp, ac, ap) {
    this.hp = hp; //Set Starting Hit Points
    this.ac = ac; // Set Starting Armor Class
    this.ap = ap; // Set Starting Attack Power
  }
}

//Create a hero and goblin Character.  Hero has 50 Health, 16 Armor Class and 7 Attack power.  This matches the constrctor(hp,ac,ap)
const hero = new Character(50, 16, 7);
//What are the stats of the goblin
const goblin = new Character(10, 12, 4);
