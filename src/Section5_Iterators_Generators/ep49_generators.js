let obj = {
    [Symbol.iterator]: select
};

function *select(end) {
    try {
        for(let i = 0; i < end; i++) yield i;
    } catch(e) {
        console.log(e);
    }

}

let it = obj[Symbol.iterator](3);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.throw("This throws an exception"));
console.log(it.return("This stops the generator"));