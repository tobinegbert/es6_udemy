    //**  Check the MDN for more information  **//
class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    greet() {
        console.log("Hello, I am " + this.name);
    }
}

    // Constructing an object using Reflect.construct()
let person = Reflect.construct(Person, ['Tobin', 20]);
console.log(Reflect.getPrototypeOf(person) === Person.prototype);

    // Calling a method using Reflect.apply()
Reflect.apply(person.greet, {_name: "Anna"}, []);

    // Setting and getting the prototype of an object
Reflect.setPrototypeOf(person, {age: 30});
console.log(Reflect.getPrototypeOf(person));

    // Getting and setting properties of objects
console.log(Reflect.get(person, "_name"));
Reflect.set(person, "_name", "Hannah");
console.log(Reflect.get(person, "_name"));

    // Returns the properties of an object
console.log(Reflect.ownKeys(person));

Reflect.defineProperty(person, 'hobbies', {
    writable: true,
    value: ['Programming', 'Reading'],
    configurable: true,
});

console.log(person.hobbies);

person.hobbies = ['Nothing'];

console.log(person.hobbies);

Reflect.deleteProperty(person, 'age');

console.log(Reflect.ownKeys(person));