let a = first.getAttribute("class")
console.log(a) // get class name

console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))

// second.setAttribute("hidden", true)
second.removeAttribute("class")

console.log(first.attributes)

// get custome attributes
console.log(custome_attrib.dataset)
console.log(custome_attrib.dataset.game)
console.log(custome_attrib.dataset.player)

// remove 
first.remove()