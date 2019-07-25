class Person {

}
Person.prototype[Symbol.toStringTag] = "Person";
console.log(Person);
let person = new Person();
console.log(person);

let numbers = [1, 2, 3];
numbers[Symbol.toPrimitive] = function() {
    for(let number in numbers) number += 1;
};

console.log(numbers + 1);