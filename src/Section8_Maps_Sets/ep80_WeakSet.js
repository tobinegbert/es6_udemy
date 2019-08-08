/** See ep75 Weak Maps **/
let set = new WeakSet();

let obj1 = {a:1};
let obj2 = {b:2};
let obj3 = {c:3};

set.add(obj1).add(obj2).add(obj3);

console.log(set.has(obj1));