/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
=== GameObject ===
* createdAt
* name
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes) {
this.createdAt = attributes.createdAt;
this.name = attributes.name;
this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function () {
return `${this.name} was removed from the game.`;
};

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/

function CharacterStats(health) {
this.healthPoints = health.healthPoints;
GameObject.call(this, health);
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function () {
return `${this.name} took damage.`;
};


/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
function Humanoid(avatar) {
this.team = avatar.team;
this.weapons = avatar.weapons;
this.language = avatar.language;
CharacterStats.call(this, avatar);

}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function () {
return `${this.name} offers a greeting in ${this.language}`;
};

function Hero(avatar) {
this.team = avatar.team;
this.weapons = avatar.weapons;
this.language = avatar.language;
Humanoid.call(this, avatar);

}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.hp = function () {
if (this.healthPoints <= 0){
   return this.destroy();
}else{
  return "Still alive!";
}
};

function Villain(avatar) {
this.team = avatar.team;
this.weapons = avatar.weapons;
this.language = avatar.language;
Hero.call(this, avatar);
}

Villain.prototype = Object.create(Hero.prototype);



/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
createdAt: new Date(),
dimensions: {
  length: 2,
  width: 1,
  height: 1,
},
healthPoints: 5,
name: 'Bruce',
team: 'Mage Guild',
weapons: [
  'Staff of Shamalama',
],
language: 'Common Tongue',
});

const swordsman = new Humanoid({
createdAt: new Date(),
dimensions: {
  length: 2,
  width: 2,
  height: 2,
},
healthPoints: 15,
name: 'Sir Mustachio',
team: 'The Round Table',
weapons: [
  'Giant Sword',
  'Shield',
],
language: 'Common Tongue',
});

const archer = new Humanoid({
createdAt: new Date(),
dimensions: {
  length: 1,
  width: 2,
  height: 4,
},
healthPoints: 10,
name: 'Lilith',
team: 'Forest Kingdom',
weapons: [
  'Bow',
  'Dagger',
],
language: 'Elvish',
});

const good = new Hero({
createdAt: new Date(),
dimensions: {
  length: 2,
  width: 3,
  height: 6,
},
healthPoints: 20,
name: 'Sheera',
team: 'Forest Kingdom',
weapons: [
  'Slingshot',
  'Dagger',
],
language: 'Elvish',
});

const bad = new Villain({
createdAt: new Date(),
dimensions: {
  length: 1,
  width: 1,
  height: 7,
},
healthPoints: 10,
name: 'Gargamel',
team: 'Forest Kingdom',
weapons: [
  'Rock',
  'Stick',
],
language: 'Common Tongue',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
console.log(good.hp());
console.log(bad.hp())