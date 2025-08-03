// change card title to red

// by class for 0th element in array
// let cardTitile = document.getElementsByClassName("card-title")[0]
// cardTitile.style.color = "red"
// console.log(cardTitile)

// by id
// let cardTitile = document.getElementById("firstcardtitle");
// cardTitile.style.color = "red"
// console.log(cardTitile)

let cardTitile = document.querySelectorAll(".card-title")
cardTitile[0].style.color = "red"
cardTitile[1].style.color = "blue"
cardTitile[2].style.color = "orange"
console.log(cardTitile)

console.log(document.getElementsByTagName("a"))
console.log(document.querySelectorAll(".card-title a"))
console.log(document.getElementsByName("search"))