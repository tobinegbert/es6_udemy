function isEqualTo(number = 5 + 6, compare = 0) {
    return number == compare;
}
console.log(isEqualTo(10, 10)); //True 10 == 10

console.log(isEqualTo(10)); //False 10 != 0

    //ES6 allows for default values and expressions in functions