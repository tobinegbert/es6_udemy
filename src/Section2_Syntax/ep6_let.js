function ep6() {
    {
        var name = "Tobin";
    }
    console.log(name);
    // Var is accessible from outside the block scope
    {
        let age = 20;
        console.log(age);
    }
    // Let behaves as var but it's scoped to the block
}
ep6();