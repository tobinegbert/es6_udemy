let cardAce = {
    name: "Ace of Spades"
};

let cardKing = {
    name: "King of Clubs"
};

let key1 = {a:1};
let key2 = {b:2};

    // Weak maps use objects as keys in order to make garbage collection possible
let deck = new WeakMap();
deck.set(key1, cardAce);
deck.set(key2, cardKing);

    // Weak maps are not enumerable, they cannot be looped through because javascript does not know the size
    // at any given time, some things may have been garbage collected
console.log(deck.get(key1));

