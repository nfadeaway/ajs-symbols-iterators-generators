import Character from './character.js';

class Team {
  constructor() {
    this.members = [];
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.push(character));
  }

  getNextHero() {
    let i = -1;
    const members = [...this.members];
    return {
      next() {
        i += 1;
        if (i === members.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: members[i],
          done: false,
        };
      },
    };
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

const iterator = enemyTeam.getNextHero();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
