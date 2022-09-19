// Promise bring one resolve function, and one reject function for executor describe it 
// whether the promise that have been made is succeed or failed.
const makePromise = new Promise((resolve, reject) => {
    // The promise succeed after waiting 1 second*
    // then return a no-param callback function -> ()
    setTimeout(()=>{
        resolve("Data saved successfully") // try to replace the reject one
    } , 1000)
})

// Promise with precondition => with parameter will be declared in a fuction.
// Make a function that wraps promise in it.
const makePromiseWithPrecondition = (precondition) => {
    return new Promise((resolve, reject)=>{
        if(precondition === null){
            return reject("Promise can't be kept because the precondition is not present and valid")
        }
        return resolve(precondition)
    })
}

// Here call the promise we've made before.
makePromise
    // After call a promise
    .then(
        (fulfilled) => {console.log("Thank you for keeping ur promise")}
    )
    .catch(
        (rejected) => {console.log("You break ur promise");}
    );

// Here call the promise with precondition 
makePromiseWithPrecondition("PRECONDITION")
        .then(
            (fulfilled) => console.log("Promise is granted!", fulfilled)
        )
        .catch(
            (rejected) => console.log(rejected)
        )
        .finally(
            () => console.log("Promise done!")
        );

// Here i'm gonna use async/await
(async () => {
    try {
        const fulfilled = await makePromiseWithPrecondition("PRECONDITION")
        console.log("ASYNC:", fulfilled);
    } catch (error) {
        console.log(error);
    }
})();

// Here we gonna use fs promises
// fs promises return Promise object
const fs = require('fs/promises')

const jsonData = {
    "Message": "This is a message"
};
const jsonStr = JSON.stringify(jsonData)

const path = String.raw`C:\Clarenti\Data\Project\JS\json\newfile.json`
fs.writeFile(path, jsonStr)
    // because fs promises return promise, you can call Promise Method [then, catch, finally,..]
    .then(
        (_) => console.log("Create file successfully!")
    )
    .catch(
        (rejected) => console.log(rejected)
    )

fs.readFile(path, {encoding:"utf-8"})
    .then(
        (fulfilled) => {
            // const json = JSON.parse(fulfilled)
            console.log("READ:", fulfilled)
        }
    )
    .catch(
        (rejected) => console.log(rejected)
    )


// Async/await is an advanced development of Promise
// Backward compatible with Promise
// Await must be wrapped it in a function declared with 'Async' keyword 

// note. async doesnt catch error, so declare it in a try-catch block
const main = async () => {
    try {
        const fulfilled = await fs.readFile(path, {encoding:"utf-8"});
        console.log(fulfilled); 
    } catch (error) {
        console.log(error);
    }
}

// main()