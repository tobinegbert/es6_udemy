let button = document.querySelectorAll("button");

function fn () {
    console.log(this);
}

const fn2 = () => console.log(this);

button.addEventListener('click', fn2);

    // The first function will return whatever called the function
    // The fat arrow function maintains context, thus returning the window object every time