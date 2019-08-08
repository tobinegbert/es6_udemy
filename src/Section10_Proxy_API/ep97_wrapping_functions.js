function log(message) {
    console.log("New message logged: " + message);
}

let handler = {
    apply: function(target, thisArg, argList) {
        if(argList.length == 1) return Reflect.apply(target, thisArg, argList);
    }
};

let proxy = new Proxy(log, handler);

proxy('Hello');