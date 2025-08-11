// let fetchApi = {
//     method: "Post",
//     headers: {
//         "Content-type": "application/json"
//     },
//     body: JSON.stringify({
//         title: 'food',
//         body: 'rice',
//         tokenNo: 1
//     }),
// }

// let a = fetch('https://jsonplaceholder.typicode.com/posts', fetchApi)
//     .then((response) => response.json())
//     .then((json) => console.log(json))


// same above using async
const normalFunction = async () => {
    let fetchApi = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: 'food',
            body: 'rice',
            tokenNo: 1
        }),
    };

    let b = await fetch('https://jsonplaceholder.typicode.com/posts', fetchApi);
    let response = await b.json();
    return response;
};

const mainFun = async () => {
    let result = await normalFunction();
    console.log(result);
};

mainFun();