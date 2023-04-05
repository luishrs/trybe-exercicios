const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAtk = () => {
    const minDmg = 15;
    const maxDmg = Math.floor(Math.random()* dragon.strength);
    const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg ;
    return dragonDmg;
};

console.log(`Dano do dragão foi ${dragonAtk()}`);

const warriorAtk = () => {
    const minDmg = warrior.strength;
    const maxDmg = Math.floor(Math.random()* (minDmg * warrior.weaponDmg));
    const warriorDMg = maxDmg > minDmg ? maxDmg : minDmg ;
    return warriorDMg
};

console.log(`Dano do warrior foi ${warriorAtk()}`);

const mageAtk = () => {
    const mageMana = mage.mana
    const minDmg = mage.intelligence;
    const maxDmg = minDmg *2;
    const turnStats = {
        dano: 0,
        mana: 'Not enough mana...',
    }
    if (mageMana > 15) {        
        turnStats.dano = maxDmg > minDmg ? maxDmg : minDmg ?
        turnStats.mana = 15 : 
        return turnStats;      
    }

    return turnStats;
}

console.log(mageAtk());