const fs = require('fs');
const path = require('path')

function getBase(PokeID, statName) {
    var file = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/pokedex.json')))
    PokeID = parseInt(PokeID)
    file = file.find(x => x.id === PokeID)
    if (!file) return null;
    var allowedName = [
        'HP',
        'Attack',
        'Defense',
        'Sp. Attack',
        'Sp. Defence',
        'Speed'
    ]
    file = file.base
    if (!statName || !allowedName.includes(statName)) {
        return file
    } else {
        file = file[statName]
        return file
    }
}

function getInfo(PokeID) {
    var file = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/pokedex.json')))
    PokeID = parseInt(PokeID);
    file = file.find(x => x.id == PokeID);
    if (!file) return null;
    var file = {
        name: file.name,
        type: file.type,
        description: file.description,
        evolution: file.evolution
    }
    return file
}

function getMove(MoveID) {
    var file = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/moves.json')))
    MoveID = parseInt(MoveID);
    file = file.find(x => x.id == MoveID);
    if (!file) return null; else return file
}

function getItem(ItemID) {
    var file = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/items.json')))
    ItemID = parseInt(ItemID);
    file = file.find(x => x.id == ItemID);
    if (!file) return null; else return file
}

function getType(typeName) {
    var file = JSON.parse(fs.readFileSync(path.join(__dirname, 'assets/types.json')))
    file = file.find(x => x.name == typeName);
    if (!file) return null; else return file
}


module.exports = {
    getBase: getBase,
    getInfo: getInfo,
    getMove: getMove,
    getItem: getItem,
    getType: getType
}