let numbers = [1,2,3,4,5];

console.log(Math.max(numbers));
    // Invalid because the Math.max expects a list
console.log(Math.max(...numbers));
    // Valid because the spread (...) operator takes the array and splits it into a list of values

    // The difference between spread and rest are in where you use them, rest is used in a definition
    // while the spread is used on something that is already defined