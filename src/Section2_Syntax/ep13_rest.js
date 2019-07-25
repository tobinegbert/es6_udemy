let numbers = [1,2,3,4,5];

function sumUp(...toAdd) {
        // The rest operator (...) converts lists to arrays
    let result = 0;
    for(let i = 0; i < toAdd.length; i++) result += toAdd[i];
    return result;
}

console.log(sumUp(numbers));

console.log(sumUp(100, 20, 10));

    // The second statement is valid because of the rest operator