function ep7() {
    const AGE = 20;

    console.log(AGE);

// AGE = 26;
// Cannot change the value because it's a constant

    const AGES = [27, 29, 31];

    console.log(AGES);

    AGES.push(33);

    console.log(AGES);

// Can add a value to the array because only the pointer to the array is constant

    const Obj = {
        age: 26
    };

    console.log(Obj.age);

    Obj.age = 28;

    console.log(Obj.age);
}

ep7();

// Can change the value of an object because, like the array, the constant is the pointer to the object
