import { charType, mainCharType } from "../../interfaces";

const enemies: charType[] = [
  {
    name: "Monstro-floresta-X",
    health: 7,
    mana: 0,
    atk: 2,
    critChance: 0,
  },
  {
    name: "Monstro-floresta-Y",
    health: 5,
    mana: 0,
    atk: 3,
    critChance: 0,
  },
  {
    name: "Monstro-Dungeon-X",
    health: 5,
    mana: 0,
    atk: 2,
    critChance: 0,
  },
  {
    name: "Monstro-Dungeon-Y",
    health: 5,
    mana: 0,
    atk: 2,
    critChance: 0,
  },
];

const allies: mainCharType[] = [];

let player: mainCharType = {
  name: "",
  health: 10,
  mana: 15,
  atk: 5,
  critChance: 0,
  level: 0,
  exp: 0,
};

const expToNextLevel = [100, 300, 600, 1000, 1500];

function gainExp(expGained: number) {
  player.exp += expGained;
  for (let i = player.level; i < expToNextLevel.length; i++) {
    if (player.exp >= expToNextLevel[i]) {
      player.level++;
      console.log(`Level Up!!`);
    }
  }
}

function expThreshold(): number {
  if (player.level < expToNextLevel.length){
    const nextLevelExp = expToNextLevel[player.level]
    return nextLevelExp - player.exp
  } else {
    return 0
  }
}


gainExp(120);
console.log(`Current Level: ${player.level}, current exp: ${player.exp}`);
console.log(`Exp to next level: ${expThreshold()}`)
