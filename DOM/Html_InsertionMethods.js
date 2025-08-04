let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>hello world</h1>'; // one way

let div = document.createElement('div');
div.innerHTML = '<h1>hello world</h1>';
// a.appendChild(div); // or document.body.append(div)

// a.prepend(div) // this will be inside div container only

// a.before(div) // same as preprend but wont be in div container
// a.after(div) // same as append bu wont be in div container

a.replaceWith(div) // replace entire div container