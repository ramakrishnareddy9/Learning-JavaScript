// Syncronous programming
let a = prompt("enter your name");
let b = prompt("enter your age");

console.log("your name is " + a + "and age is " + b);

// Asyncronous programming

console.log("start");
setTimeout(() => {
    console.log("Asyncronous");
});
console.log("end");

// Call back : passing function into a function as argument
// function loadScript(src,callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         console.log("loaded script with src " + src);
//         callback();
//     }
//     document.body.appendChild(script);
// }

// function hello() {
//     alert("hello");
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", hello);

// handling error in call back

function loadScript(src,callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        console.log("loaded script with src " + src);
        callback(src);
    }
    script.onerror = function () {
        console.log("error loading script with src: " + src);
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("hello :" + src);
}

// wrong url for error
loadScript("https://cdn.jsdelivrramakrishnareddy.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", hello);
