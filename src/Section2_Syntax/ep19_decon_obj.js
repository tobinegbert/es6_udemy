let obj = {
    name: "Tobin",
    age: 20,
    greet: function() {
        console.log("Hello, " + name);
    }
};

let {name, greet: hello} = obj;
    //
hello();
    // KEY TAKEAWAY: When destructuring an object, use the property name, when destructuring and array, use position.
    // NOTE: Objects can't "skip" parts of the objects because you already access it by name

