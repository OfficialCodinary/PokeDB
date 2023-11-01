# rgpokedb Documentation

## Overview
rgpokedb is a Node.js library that provides functions for accessing Pokémon data. It allows you to retrieve information about Pokémon species, their base stats, moves, items, types, and more. rgpokedb utilizes JSON files for data storage and retrieval.

## Installation
To use rgpokedb in your Node.js project, make sure you have Node.js installed. Then, follow these steps:

1. Create a new directory for your project (if not already done).
2. Navigate to the project directory in your terminal or command prompt.
3. Run the following command to initialize a new `package.json` file:
   ```bash
   npm init -y
   ```
4. Install the rgpokedb library by running the following command:
   ```bash
   npm install rgpokedb
   ```

## Usage
To begin using rgpokedb, require it in your Node.js application:

```javascript
const rgpokedb = require('rgpokedb');
```

## Functions

### `getBase(PokeID, statName)`
Retrieves the base stats of a Pokémon species.

- `PokeID` (number): The ID of the Pokémon species.
- `statName` (string, optional): The name of the specific stat to retrieve (e.g., 'HP', 'Attack', 'Defense'). If not provided, returns all base stats.

Returns:
- If `statName` is not specified or invalid, returns an object containing all base stats for the Pokémon species.
- If `statName` is valid, returns the value of the specified base stat for the Pokémon species.
- Returns `null` if the Pokémon species is not found.

Example:
```javascript
const baseStats = rgpokedb.getBase(25);
console.log(baseStats);
// Output: { HP: 35, Attack: 55, Defense: 40, 'Sp. Attack': 50, 'Sp. Defence': 50, Speed: 90 }

const attackStat = rgpokedb.getBase(25, 'Attack');
console.log(attackStat);
// Output: 55
```

### `getInfo(PokeID)`
Retrieves general information about a Pokémon species.

- `PokeID` (number): The ID of the Pokémon species.

Returns:
- An object containing the following information about the Pokémon species:
  - `name` (string): The name of the Pokémon.
  - `type` (array): An array of the Pokémon's types.
  - `description` (string): The description of the Pokémon.
  - `evolution` (string): The evolution details of the Pokémon.

Returns `null` if the Pokémon species is not found.

Example:
```javascript
const pokemonInfo = rgpokedb.getInfo(25);
console.log(pokemonInfo);
/* Output:
{
  name: 'Pikachu',
  type: ['Electric'],
  description: 'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
  evolution: 'Pichu -> Pikachu -> Raichu'
}
*/
```

### `getMove(MoveID)`
Retrieves information about a move.

- `MoveID` (number): The ID of the move.

Returns:
- An object containing the information about the move, including its name, type, power, accuracy, and description.

Returns `null` if the move is not found.

Example:
```javascript
const moveInfo = rgpokedb.getMove(10);
console.log(moveInfo);
/* Output:
{
  name: 'Thunder Shock',
  type: 'Electric',
  power: 40,
  accuracy: 100,
  description: 'An electric shock that may inflict paralysis.'
}
*/
```

###

 `getItem(ItemID)`
Retrieves information about an item.

- `ItemID` (number): The ID of the item.

Returns:
- An object containing the information about the item, including its name, description, and effects.

Returns `null` if the item is not found.

Example:
```javascript
const itemInfo = rgpokedb.getItem(5);
console.log(itemInfo);
/* Output:
{
  name: 'Potion',
  description: 'A spray-type medicine for treating wounds. It can be used to restore 20 HP to a single Pokémon.',
  effect: 'Restores 20 HP to a Pokémon.'
}
*/
```

### `getType(typeName)`
Retrieves information about a Pokémon type.

- `typeName` (string): The name of the Pokémon type.

Returns:
- An object containing the information about the type, including its name and strengths/weaknesses against other types.

Returns `null` if the type is not found.

Example:
```javascript
const typeInfo = rgpokedb.getType('Electric');
console.log(typeInfo);
/* Output:
{
  name: 'Electric',
  strengths: ['Water', 'Flying'],
  weaknesses: ['Ground']
}
*/
```

## Support
If you need any assistance or have any questions about rgpokedb, feel free to contact @ROBBING_GAMER on Telegram.