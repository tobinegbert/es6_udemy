/** Modules aren't supported natively in NodeJS so there are a couple of steps before it can be run **/
    // 1. run "npm install esm"
    // 2. run "node -r esm nameoffile.js"
    // 3. Profit

//Modules are always strict (no need to use "use strict) and have their own scope

import ab, {keyvalue as key, test} from "./external";
    //Multiple imports from the same file can be comma separated
    //Import the default value first
    //File extension NOT included
    //If the thing being imported is the default import, omit curly braces
    //"as" keyword lets you assign an alias to imports

import * as imported from "./ep26_importexport"
    //Using the * symbol you can import all exported things into an object (must provide "as name")

import Helper from "../classes/ep28_classes"

console.log(key);
test();
console.log(ab);

console.log(imported);

Helper.helper();