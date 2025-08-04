console.log(document.getElementsByTagName('span')[0])
console.dir(document.getElementsByTagName('span')[0]) // here we get span in the form of object

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

let box = document.getElementById('box1');
console.log(box.innerHTML); // <p>Hello</p>
box.innerHTML = "<h1>Hi</h1>";
// Now DOM becomes: <div id="box"><h1>Hi</h1></div>

let box1 = document.getElementById('box2');
console.log(box1.outerHTML); // <div id="box"><p>Hello</p></div>
box.outerHTML = "<section>Bye</section>";
// The entire <div> is replaced with <section>Bye</section>

// nodeValue is Used to get or set the value of a node.
let div = document.getElementById("demo");
let textNode = div.firstChild;
console.log(textNode.nodeValue); // "Hello"
textNode.nodeValue = "Hi";
console.log(div.innerHTML); // Hi

// data is basically an alias of .nodeValue for character data nodes like:Text (#text),Comment (#comment),CDATA sections (used in XML)
console.log(textNode.data);    // "Hi"
textNode.data = "Hello again";
console.log(div.innerHTML);   // Hello again

// textContent gets or sets the text of a node and all its descendants, without any HTML tags.
let text = document.textContent
console.log(text)
let demo = document.getElementById("demo1");
console.log(demo.textContent);  // "Hello World"
demo.textContent = "Just text!";

demo2.hidden = false // true for hidden