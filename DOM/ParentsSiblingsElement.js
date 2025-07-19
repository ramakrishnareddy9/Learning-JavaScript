console.log(document.body.firstChild)
let a = document.body.firstChild
console.log(a.parentNode) // Returns the parent node, which could be an element, document, or document fragment.
console.log(a.parentElement) // Returns the parent element, but returns null if the parent is not an element (e.g., if it's the document node).
console.log(a.firstChild.nextSibling)