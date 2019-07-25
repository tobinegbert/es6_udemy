let array = [1, 2, 3];

    //By accessing the Symbol.iterator function of the array, you can change how iterations behave
array[Symbol.iterator] = function () {
        //This block returns an object with a function
    let nextValue = 10;
    return {
            //This block has the function that controls the iteration logic
        next: function () {
            nextValue++;
                //done: boolean
                //value: primitive
            return {
                done: nextValue > 15,
                value: nextValue
            }
        }
    }
};

for(let number of array) console.log(number);