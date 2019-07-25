let person = {
    name: "Tobin",
    hobbies: ["Sports", "Cooking"],
    [Symbol.iterator]: function() {
        let hobbies = this.hobbies;
        let i = 0;
        return {
            next: function() {
                let value = hobbies[i];
                i++;
                return {
                        /** REMEMBER: Implement logic to set done to true **/
                    done: i > hobbies.length,
                    value: value
                }
            }
        }
    }
}
for(let hobby of person) console.log(hobby);