console.log(document.cookie)
document.cookie = "name=ramu"
document.cookie = "name2=ramakrishnareddy"
document.cookie = "name=lakshman"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)