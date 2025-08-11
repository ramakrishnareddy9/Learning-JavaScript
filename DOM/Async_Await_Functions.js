// async function demo() {
//     return 9;
// }

// demo().then((x) => {
//     console.log(x);
// });

async function api() {
    let hybWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000);
    });

    let vjaWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(32);
        }, 2000);
    })

    console.log("Featching data from api .......");
    let hybW = await hybWeather;
    console.log("weather at hyb :" + hybW);
    let vjaW = await vjaWeather;
    console.log("vja weather is " + vjaW);
}

let ram = () => {
    console.log("i am not waiting");
}

let a = api();
let b = ram();

a.then(() => {
    console.log("execution of async completed");
    return 1;
})

// if we want let a complete then only complete b the we nee to write in asynk function

let main = async () => {
    let a = await api();
    let b = ram();
    console.log("execution of async completed");
}

main();