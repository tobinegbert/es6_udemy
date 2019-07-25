function fn() {
    console.log("Hello");
}
fn();
    //ES5 function

const fafn = () => {
    console.log("Hello");
};
fafn();
    //Fat arrow function

const sfafn = () => console.log("Hello");
sfafn();
    //Simplified fat arrow function

const esfafn = () => "Hello";
console.log(esfafn());
    //Even simpler fat arrow function

const addition = (a, b) => a + b;
console.log(addition(5, 6));
    //Fat arrow function w/arguments

const saddition = a => a + 8;
console.log(saddition(3));
    //One argument fat arrow function

