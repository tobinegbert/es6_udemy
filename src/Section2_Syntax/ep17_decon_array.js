/** IMPORTANT **/
let numbers = [1,2,3];

let [a, b, c] = numbers;
    // Deconstructing an array has square brackets on the left side of the equal sign
    // it provides an easier way of assigning variables to arrays
console.log(a , b , c);

let [d, ...e] = numbers;
    //The rest operator will take the last two values, put them in an array, and assign it to e
console.log(d , e);

console.log(numbers);
    // Deconstructing does not destroy the original array

let[f, g, h, i = "Default"] = numbers;
    // Deconstructing allows for default values as well
console.log(f, g, h, i);

let j = 5;
let k = 10;

[k, j] = [j, k];
    // Swaps the values of j and k using destructuring

let [l, ,m] = numbers;
    // By putting leaving one spot blank, you can pull out specific parts of an array
console.log(l , m);

let [n, o] = [1, 2, 3];
console.log(n, o);

