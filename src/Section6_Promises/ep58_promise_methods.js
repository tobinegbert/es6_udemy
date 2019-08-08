let promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Resolved");
    }, 1000);
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("rejected");
    }, 2000);
});

    // Promise.all expects an array of promises, it runs the promises and waits for all to finish, all promises have to
    // resolve for it to resolve successfully
Promise.all([promise1, promise2])
    .then(function(succ) {
        console.log(succ);
    }).catch(function(err) {
        console.log(err);
    });

    // Promise.race also expects an array but as long as the quickest promise resolves, then all promises resolve,
    // same goes for being rejected
Promise.race([promise1, promise2])
    .then(function(succ) {
        console.log(succ);
    })
    .catch(function(err) {
        console.log(err);
    });