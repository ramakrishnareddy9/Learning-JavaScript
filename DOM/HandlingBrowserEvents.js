let a = function () {
    alert("hello world");
}

let b = function () {
    alert("hi ra bava");
}

let button = document.getElementById("button");
button.addEventListener('click', a);
button.addEventListener('click', b);

let x = prompt("enter a number");
if (x == 2) {
    button.removeEventListener('click', a);
}

let c = function (e) {
    console.log("Showing what e is :")
    console.log(e);
}
// e is event object
button.addEventListener('click', c);
