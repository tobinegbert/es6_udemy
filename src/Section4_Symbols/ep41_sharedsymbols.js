let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');

    //Because of the 'for' keyword, the two symbols are equal because they have the same key
console.log(symbol1 == symbol2);

let person = {
    name: "Tobin"
};

function makeAge(person) {
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 20;
}
makeAge(person);

    //Because ageSymbol is out of scope, we can't access it but because symbol1 has the same key,
    //we can still access the age
console.log(person[symbol1]);