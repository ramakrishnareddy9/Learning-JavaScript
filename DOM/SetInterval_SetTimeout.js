document.writeln("hello")

setTimeout(function () {
    alert("i am inside of settimeout")
}, 2000);

let a = setTimeout(function () {
    alert("i am inside of settimeout")
}, 2000);

clearTimeout(a); // used to stop time out


const sum = (a, b) => {
    console.log("i am running" + (a + b))
    a + b
}

// (function var, time,function parameters)
setTimeout(sum, 2000, 5, 7);

setInterval(function () {
    alert("set interval for every 3 sec")
}, 3000);

let b = setInterval(function () {
    alert("set interval for every 5 sec")
}, 5000);

clearInterval(b);