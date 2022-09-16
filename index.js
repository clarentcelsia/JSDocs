// Add "start":"node index.js" in package.json or using nodemon to monitor the changes automatically

// Print text
console.log("Hello")
console.log(1.0)

function enter(){
    let valids = prompt("Are you sure?");
    if (valids != null){
        alert('ans: ' + valids);
    }
}

const btn = document.getElementById("btn_enter")
btn.addEventListener("click", enter)