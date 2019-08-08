let cardAce = {
    name: "Ace of Spaces"
};

let cardKing = {
    name: "King of Clubs"
};

let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck.size);

console.log(deck.get('as'));

deck.delete('as');

console.log(deck.get('as'));

deck.clear();

console.log(deck.get('kc'));

deck.set('as', cardAce);
deck.set('kc', cardKing);

for(let key of deck.values()) {
    console.log(key);
}

for(let key of deck.keys()) {
    console.log(key);
}

for(let key of deck) {
    console.log(key);
}