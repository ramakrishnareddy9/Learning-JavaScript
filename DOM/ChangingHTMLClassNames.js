let first = document.getElementById("first");

first.className = "text-black red";
first.classList.add("red");
first.classList.remove("red");
console.log(first.classList.contains("red"));
first.classList.toggle("red");