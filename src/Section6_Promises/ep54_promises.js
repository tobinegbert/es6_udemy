function waitASecond(seconds) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(seconds > 2) {
                reject("Error");
            } else {
                seconds++;
                resolve(seconds);
            }
        }, 1000)
    })
}

waitASecond(0)
    .then(waitASecond)
    .then(function (seconds) {console.log(seconds)})
    .catch(function (err) {
        console.log(err);
    });