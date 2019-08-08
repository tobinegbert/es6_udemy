    // Set is kind of like an array, it only holds values, but it only holds unique values,
    // meaning each value is only stored once
let set = new Set([1,1,1]);

for(let i of set) {
    console.log(i);
}

set.add(2);

for(let i of set) {
    console.log(i);
}

set.delete(1);

for(let i of set) {
    console.log(i);
}

set.clear();

for(let i of set) {
    console.log(i);
}

set.add(1);
set.add(2);
set.add(3);

console.log(set.has(1));

for(let i of set.entries()) console.log(i);