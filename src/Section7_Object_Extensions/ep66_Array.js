/** Array.from, fill, and find **/

let arr = [10, 12, 14];
console.log(arr);

let newArr = Array.from(arr, val => val * 2);
console.log(newArr);

newArr.fill(100, 0, 2);
console.log(newArr);

    //Finds the first thing that meets the criteria
console.log(arr.find(value => value >= 12));


    //Practical use of the find method
let inventory = [
    {name: "cherries",
     stock: 10},
    {name: "apples",
     stock: 5},
    {name: "oranges",
     stock: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries));

    // The copyWithin method copies parts of an array to other parts
console.log(arr.copyWithin(1, 2));

    // The entries method is an iterator that returns the indices along with the value in coordinate pairs
let iter = arr.entries();

for(let element of iter) {
    console.log(element);
}