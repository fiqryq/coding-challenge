/*
Step 1: buat class constructor Pokemon yang menerima argument
name
hp
attack
defense

Step 2: buat method di dalam class Pokemon.
showPokemon yang mereturn.
contoh:
      Pokemon: bulbasaur

      Hp: 40

      attack: 50

      defense: 70

Step 3: buat class Pokedex yang menerima argument
object {player1, attackOfPlayer1, defenseOfPlayer1, player2, attackOfPlayer2, defenseOfPlayer2}

Step 4: buat method play dalam class Pokedex dengan kondisi sebagai berikut
Jika attackOfPlayer1 lebih dari defenseOfPlayer2 maka
player1 menang
Jika attackOfPlayer2 lebih dari defenseOfPlayer1 maka
player2 menang
*/

class Pokemon {
  constructor(name, hp, attack, defense) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
  }

  showPokemon() {
    return `Pokemon : ${this.name} \nHp : ${this.hp}\nAttack : ${this.attack}\nDefenses : ${this.defense}`;
  }
}

class Pokedex {
  constructor({
    player1,
    attackOfPlayer1,
    defenseOfPlayer1,
    player2,
    attackOfPlayer2,
    defenseOfPlayer2,
  }) {
    this.player1 = player1;
    this.player2 = player2;
    this.attackOfPlayer1 = attackOfPlayer1;
    this.attackOfPlayer2 = attackOfPlayer2;
    this.defenseOfPlayer1 = defenseOfPlayer1;
    this.defenseOfPlayer2 = defenseOfPlayer2;
  }

  play() {
    if (this.attackOfPlayer1 > this.defenseOfPlayer2) {
      return `${this.player1} win`;
    } else if (this.attackOfPlayer2 > this.defenseOfPlayer1) {
      return `${this.player2} win`;
    }
  }
}

const bulbasaur = new Pokemon("bulbasaur", 40, 50, 70);
const pikachu = new Pokemon("pikachu", 60, 40, 30);

const battle1 = new Pokedex({
  player1: bulbasaur.name,
  attackOfPlayer1: bulbasaur.attack,
  defenseOfPlayer1: bulbasaur.defense,
  player2: pikachu.name,
  attackOfPlayer2: pikachu.attack,
  defenseOfPlayer2: pikachu.defense,
});

console.log(bulbasaur.play()); // bulbasaur win
