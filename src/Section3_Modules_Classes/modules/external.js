    //Export keyword makes the variable available to be imported
let keyvalue = 1000;

    //Export can also be used on functions
function test() {
    console.log("tested!");
}

let ab = "some text";

    //Can group all exports at the end of the file
    //Doesn't copy the value, copies the reference
export {keyvalue, test};

    //Only 1 default export per file
export default ab;
