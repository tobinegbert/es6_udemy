let name = "Anna";
let age = 24;

let ageField = "age";

let obj = {
    name,
    [ageField]: 20,
        // Using square brackets will search for the variable and use it as the property name
        // [ageField] = age = 20
    "greet me"() {
        console.log("Hello, "+ this.name + "!")
    }
        // Methods and properties can be strings but require square brackets
};

obj["greet me"]();
console.log(obj["age"]);
console.log(obj.age);
console.log(obj[ageField]);
    // Using variables to create dynamic properties, all of these statements are equal