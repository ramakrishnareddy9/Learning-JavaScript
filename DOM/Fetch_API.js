let r = fetch("http://goweather.herokuapp.com/weather/Ny");
r.then((response) => {
    return response.json();
}).then((value) => {
    console.log(value);
})