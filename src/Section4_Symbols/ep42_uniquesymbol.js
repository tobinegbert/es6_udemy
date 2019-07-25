let symbol1 = Symbol.for('age');

let person = {
    name: "Tobin",
    age: 30
};

function makeAge(person) {
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 20;
}
makeAge(person);

    //Age will print 30, symbol1 will print 20, it's useful because using a symbol won't accidentally overwrite something
console.log(person["age"]);
console.log(person[symbol1]);