/** Object.assign **/

class Obj1 {
    constructor() {
        this.a = 1;
    }
}

class Obj2 {
    constructor() {
        this.b = 2;
    }
}

let obj1 = new Obj1();
let obj2 = new Obj2();

    //The assign method assigns the new prototype as the prototype of the object that is passed first
let obj = Object.assign({}, obj1, obj2);

console.log(obj.__proto__ === Object.prototype);

/** Object.setPrototypeOf **/

let person = {
    name: "Tobin"
};

let boss = {
    name: "Barry"
};

console.log(person.__proto__ === Object.prototype);

Object.setPrototypeOf(person, boss);

console.log(person.__proto__ === boss);
