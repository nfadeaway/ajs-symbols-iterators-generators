import Character from './character.js';

class Team {
  constructor() {
    this.members = [];
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.push(character));
  }

  * [Symbol.iterator]() {
    for (const value of this.members) {
      yield value;
    }
  }
}

const enemyTeam = new Team();

enemyTeam.addAll(
  new Character('Персонаж1', 'Bowman'),
  new Character('Персонаж2', 'Swordsman'),
  new Character('Персонаж3', 'Magician'),
  new Character('Персонаж4', 'Daemon'),
  new Character('Персонаж5', 'Zombie'),
);

const generator = enemyTeam[Symbol.iterator]();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
