let a = document.getElementsByClassName("container")[1];
a.onclick = () => {
    let b = document.getElementsByClassName("container")[1];
    b.innerHTML = "hi bava";
}

let button = document.getElementById("button");
button.addEventListener('click', function (e) {
    alert("hello");
})