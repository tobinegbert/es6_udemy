class Person {
    //Note: no function keyword when including a function in a class
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("hello, my name is " + this.name);
    }
}

/** EP30 Inheritance **/
class Tobin extends Person {
    constructor(age) {
            //Like in Java, if the parent class has a constructor method, it must be called first thing in child constructor
        super("Tobin");
        this._age = age
    }

        //Get and Set Keywords are used to define getter and setter methods
    get age () {
        return this._age;
    }

    set age (age) {
        if(age >= 18) this._age = age;
        else if(age < 0) console.log("Rejected! Must be a positive number");
        else console.log("Rejected! Must be 18 or older")
    }
}

    //This is to show subclassing a default object
class Tobins extends Array {
    convert() {
        this.forEach(function(item) {console.log(item + " Tobin's");});
    }
    populate() {
        this.push(1);
        this.push(2);
        this.push(3);
    }
}

let groupTobin = new Tobins();
groupTobin.populate();
groupTobin.convert();

let tobin = new Tobin();
tobin.greet();
tobin.age = 17;
tobin.age = 20;
console.log(tobin);