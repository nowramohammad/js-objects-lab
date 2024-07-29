const pokemon = require('./data.js')


console.log('Dose it work?')
console.log(pokemon)
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  console.dir(pokemon, { maxArrayLength: null })
  console.log(game)

  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "
Easy", "Med" or "Hard". How would you assign it?

Solve Exercise 3 here:
*/
game.difficulty = 'Easy';
console.log("EX 3 Result:",game);

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` aray. Which array method will you use to add them?
Solve Exercise 4 here:
*/
const starterPokemon = pokemon.find(p => p.starter);

game.party.push(starterPokemon);
console.log("EX 4 Result:", game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
/* const pokemon = [
  {name: "Pikachu", hp: 35, starter: true },
  {name: "Raichu", hp: 60, starter: false },
  {name: "Sandshrew", hp: 50, starter: false },
  {name: "Sandslash", hp: 75, starter: false },
];  */

const choosenPokemon = pokemon.filter(p =>
  p.hp === 35 || p.hp === 50 || p.hp === 60 
).slice(0,3);
choosenPokemon.forEach(p => game.party.push(p));
console.log("EX 5 Result:", choosenPokemon);



/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
 const gyms = [ 
  { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
 ]
gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});
console.log('EX 6 Result:', gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
 /* pokemon = [
 { number: 1, name: "Bulbasaur", type: "grass", hp: 45, starter: true },
    { number: 2, name: "Ivysaur", type: "grass", hp: 60, starter: false },
{ number: 4, name: "Charmander", type: "fire", hp: 39, starter: true },
    { number: 5, name: "Charmeleon", type: "fire", hp: 58, starter: false },
{ number: 7, name: "Squirtle", type: "water", hp: 44, starter: true },
    { number: 8, name: "Wartortle", type: "water", hp: 59, starter: false },
     { number: 25, name: "Pikachu", type: "electric", hp: 35, starter: true },
    { number: 26, name: "Raichu", type: "electric", hp: 60, starter: false },
 ] */
game.party.forEach((p, index) => {
if (p.name === "Bulbasaur") {
  game.party.splice(index, 1, pokemon.find(p => p.name === "Ivysaur"));
}

else if (p.name === "Charmander") {
  game.party.splice(index, 1, pokemon.find(p => p.name === "Charmeleon"));
}
else if (p.name === "Squirtle") {
  game.party.splice(index, 1, pokemon.find(p => p.name === "Wartortle"));
}
else if (p.name === "Pikachu") {
  game.party.splice(index, 1, pokemon.find(p => p.name === "Raichu"));
}
});

console.log('EX 7 Result:',game.party);

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

game.party.forEach(pokemon => {
  console.log(pokemon.name);
}); 
 console.log('EX 8 Result:', pokemon.name);

 /*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/
pokemon.filter(p => p.starter).forEach(p => {
  console.log(p.name);

});

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};
game.catchPokemon(pokemon.find(p => p.name === 'Pikachu'));

console.log('Exercise 10 result:', game.party);

/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/
game.catchPokemon = function(pokemonObj) {
  this.party.push(pokemonObj);
};
game.catchPokemon(pokemon.find(p => p.name === 'Pikachu'));
game.catchPokemon = function(pokemonObj) {

  
  this.party.push(pokemonObj);
const pokeball = this.items.find(items => items.name === 'pokeball');
if (pokeball) {
  pokeball.quantity--;

}};


console.log("EX 11 Result:", game.items);

/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

 const  gyms2 = [ 
  { location: "Pewter City", completed: true, difficulty: 1 },
      { location: "Cerulean City", completed: true, difficulty: 2 },
      { location: "Vermilion City", completed: true, difficulty: 3 },
 ]
gyms2.forEach(gym2 => {
  if (gym2.difficulty < 6) {
    gym2.completed = true;
  } 
});
console.log("EX 12 Result", gyms2);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };

  this.gyms.forEach(gym => {
      if (gym.completed) {
          gymTally.completed++;
      } else {
          gymTally.incomplete++;
      }
  });
  console.log("EX 13 Result:",gymTally);
};
game.gymStatus();
/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/
 game.partyCount = function() {
  return this.party.length;

};
console.log("EX 14 Result", game.partyCount()); 
/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
const  gyms3 = [ 
  { location: "Pewter City", completed: true, difficulty: 1 },
      { location: "Cerulean City", completed: true, difficulty: 2 },
      { location: "Vermilion City", completed: true, difficulty: 3 },
 ]
gyms2.forEach(gym3 => {
  if (gym3.difficulty < 8) {
    gym3.completed = true;
  } 
});
console.log("EX 15 Result", gyms3);

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/
difficulty = 'Easy'; 
    catchPokemon = function (pokemonObj) {
        this.party.push(pokemonObj);
        const pokeball = this.items.find(item => item.name === 'pokeball');
        if (pokeball) {
            pokeball.quantity--;
        }
    };
    gymStatus =  function() {
        const gymTally = { completed: 0, incomplete: 0 };

        this.gyms.forEach(gym => {
            if (gym.completed) {
                gymTally.completed++;
            } else {
                gymTally.incomplete++;
            }
        });

        console.log(gymTally);
    };
    partyCount = function () {
        return this.party.length;
    };


console.log("EX 16 Result:", game);