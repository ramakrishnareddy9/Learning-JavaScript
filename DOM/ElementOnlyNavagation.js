// let b = document.body
// console.log("First child of b is ", b.firstChild) // it returns firstchild as comment or text etc..,
// console.log("First element child of b is ", b.firstElementChild) // it returns the first element node only like nav

const ChangeBgColour = () => {
    document.body.firstElementChild.style.background = "red";
}

let b = document.body
console.log("First child of b is ", b.firstChild)
console.log("First element child of b is ", b.firstElementChild)