let person = {
    name: "Tobin",
    age: 20
};

function log(message) {
    console.log("New Message Logged: " + message);
}

let handler = {
    get: function(target, property) {
        return property in target ? target[property] : 'None Existent';
    },
    set: function(target, property, value) {
        if (value.length >= 2) Reflect.set(target, property, value);
        else console.log("Shorter than 2");
    },
    apply: function (target, thisArg, argList ) {
        if(argList.length == 1) return Reflect.apply(target, thisArg, argList);
    }
};
let prox = new Proxy({}, handler);

Reflect.setPrototypeOf(person, prox);

person.name = 'T';

console.log(person.hobbies);