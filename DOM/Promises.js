// // Basic Promise
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     let bool = true;
//     if (bool) {
//         resolve("success");
//     } else {
//         reject("fail");
//     }
// });

// console.log(promise);

// // Using .then() and .catch()
// let p1 = new Promise((resolve, reject) => {
//     console.log("calling a promise");
//     setTimeout(() => {
//         console.log("I am a promise with resolve");
//         resolve("success from p1");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//     console.log("calling a promise");
//     setTimeout(() => {
//         console.log("I am a promise with reject");
//         reject(new Error("I am an error from p2"));
//     }, 1500);
// });

// p1.then(value => {
//     console.log(value);
// }).catch(error => {
//     console.error(error);
// });

// p2.then(value => {
//     console.log(value);
// }).catch(error => {
//     console.error(error.message);
// });

// // promise chaining .then() calls

// let a = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("resolved after 2 sec");
//     });
// });

// a.then((value) => {
//     console.log(value);
//     let b = new Promise(() => {
//         setTimeout(() => { resolve("this is promis 2") });
//     })
//     return b;
// }).then((value) => {
//     console.log("we are done");
//     return 9;
// }).then((value) => {
//     console.log("now we are completely done");
// });

// // example

// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve(1);
//         }
//         script.onerror = () => {
//             reject(0);
//         }
//     });
// }

// let example = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js");
// example.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log("there is an error");
// })

// // attaching multiple handlers

// let c = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("hi ra mava");
//     },2000)
// })

// c.then(() => {
//     console.log("hurray");
// })

// c.then(() => {
//     console.log("completed");
// });

// promis api

// promis.all
let r1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");
    }, 1000);
})

let r2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 2000);
})

let r3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
})

let promis_all = Promise.allSettled([r1, r2, r3]);
promis_all.then((value) => {
    console.log(value);
});

// promise.allSettled
let k1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");
    }, 1000);
})

let k2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 3");
        reject(new Error("error"));
    }, 2000);
})

let k3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
})

let promis_all_Settled = Promise.allSettled([k1, k2, k3]);
promis_all_Settled.then((value) => {
    console.log(value);
});

// promise.race() -> give the first promise completed with out error
// promise.any() -> same as race but also includes error
// Promise.reject() -> Returns an already rejected Promise
// Promise.resolve() -> Returns an already fulfilled Promise