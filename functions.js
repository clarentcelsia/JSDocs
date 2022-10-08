/* Destructuring assignment is a JS expression that makes it unpack values from arrays/props from object into distinct vars. */

// import CoffeeShop from "./promise";

/* Using FileReader API for browser to read user's computer file not fs */
const { log } = require('console');
const fs = require('fs')

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment */
function objectDestruction(){
    let a, b, c, d;
    [a, b] = [10, 20]; // >>> a = 10, b = 20
    [...c] = [10,15,30,35]; // >>> object array; c = [10, 15, 30, 35]
    [a, b, ...c] = [1, 3, 5, 6]; // >>> a = 1, b = 3, c = [5, 6]

    [a, ,b] = [1, 2]; // >>> ', ,' == _ has value 2, meanwhile b = undefined.

    [a, b, ...[c, d]] = [1, 2, 3, {
        key1:3, 
        key2:4
    }]; // >>> c = 3, d = {key1: 3, key2: 4}

    const car = {
        Name: "Alphard",
        Year: 2020,
        Brand: "XALPH",
        Attrs: {
            Color: ['RED', 'SILVER', 'BLACK', 'WHITE'],
            Engine: "Electric"
        }
    };

    console.log(car.Attrs.Color) // >>> ['RED', 'SILVER', 'BLACK', 'WHITE']

    // Q: Passing by REFERENCE NOT VALUE
    const car2 = car;
    car2.Engine = "Diesel";
    console.log(car.Engine); // >>> Diesel

    // SOL: Cloning Object 
    // As of es2015, if you want a shallow copy (clone the object, but keeping deep refences in the inner structure) you can use destructuring 
    const carCopy = {
        ...car,
        // able to add new attrs
        ChassisNo: "123442SD",
        Origin: "USA"
    };
    console.log(carCopy.Engine); // >>> Diesel

    //*
    const { vars1 = 9, vars2 = 'value2' } = '';
    console.log(vars1) // >>> 9

    const {
        Name: LABEL_VALUE_NAME,
        Brand: LABEL_VALUE_BRAND,
        Year: LABEL_VALUE_YEAR
    } = car;
    console.log(LABEL_VALUE_BRAND) // >>> XALPH

}

function destructuring2(){
    let datas = {
        arrdata:{
            data1: "value1",
            data2: "value2",
            data3: "value3",
        },
        items:["Pen", "Book"],
        sold: true
    }
    console.log(datas); // >>> {arrdata:{data1:"value1", data2:"value2", data3:"value3"}, items:["Pen", "Book"], sold: true}
    
    // Ways to get props
    console.log(datas["sold"]); // >>> true
    console.log(datas.sold); // >>> true
    let { sold } = datas;
    console.log(sold); // >>> true
    
    // Assign new variable with attr "datas". 
    // for ex. I want to take some information in "datas", but not all attrs in data I need.
    // I can define it as following:
    let {
        arrdata, // >>> available in datas
        items:[item1, item2], // >>> available in datas
        stock = 10, // >>> unavailable, so you may/not initialize it 
        sold: aliasName
    } = datas
    // stock = 20
    // aliasName = false
    console.log(`${item1} ${stock} ${aliasName}`); // >>> pen 10 true

    // =============================================================================

    // Update new object 
    let state = {
        counter:0,
        isRunning: false,
    }
    console.log(state); // >>> state{counter:0, isRunning:false}
      
      let updateState = {
        ...state, // copy the old state value
        isRunning: true, // >>> add *(if the attr doesnt exist in the previous obj) / update *(attr is exist in the previous object)
      }
      console.log(updateState); // >>> state{counter:0, isRunning:true}
      
      //NOTE**
      let updateState2 = {
        isRunning: true, // >>> Create new attr 'isRunning'
        ...state, // copy the old state value, but the value of the attr 'isRunning' defined in the 1st line will be replaced by the new shallow copy one.
      }
      console.log(updateState); // >>> state{isRunning:false, counter:0}
      
}

function arrays() {
    let arrs = ["item1", "item2", "item3"];
    arrs[0] // >>> item1

    // Returns an iterable of values in the array
    const iterator = arrs.values()
    for (v of iterator){
        console.log(v); // >>> item1, item2
    }

    // Returns an iterable of key and value in the array
    const iterators = arrs.entries()
    // OR iterators.next().value >>> [0->index, item1->value]
    for ([i,v] of iterators){
        console.log(`index-${i}: ${v}`); // >>> index-0: item1, index-1: item2, dst..
    }

    // Find -> return the first found string
    const pred = arrs.find(function(s){return s !== "item1"}); // >>> item2

    // Filter -> return string[]
    const preds = arrs.filter(function(s){return s !== "item1"}); // >>> ["item2", "item3"]

    // Insert & Remove 
    const removed_last_item = arrs.pop(); // >>> "item3"
    const removed_first_item = arrs.shift(); // >>> "item1"
    delete(arrs[1]); // not recommended, because it leaves an undefined object, not removed

    const item_length = arrs.push("item4", "item5") // >>> 5

    // Array section -> take specified element of arr
    const arrys = arrs.slice(0, -2)  // take element start with index 0 to the 2nd to the last items >>> ["item1, item2"]

    const removed_elements = arrs.splice(0, 2) // >>> returns the element that were removed start from index 0 >> ["item1", "item2"] 
}

function loops() {
    let a = ['data1', 2, true];
  
    // foreach = value
    a.forEach((element) => {
      console.log(`${element}`); // >>> data1, 2, true
    });
  
    let mapA = {
      data1: 'data1',
      data2: 2,
      data3: true,
    };
  
    // for..in only index/key
    for (i in mapA) {
      console.log(`${i}: ${mapA[i]}`);
    }
  
    let newMap = new Map([
      ['data1', 'data1'],
      ['data2', 2],
      ['data3', true],
    ]);
  
    // for..of with key and value
    for (const [i, v] of newMap) {
      console.log(`${i}: ${v}`);
    }
}

function file(){
    const file1 = "./json/file1.json"
    const file2 = "./json/file2.json"

    // Read Provided JSON Files
    fs.readFile(file1, (error, data1)=>{
        if (error){
            return console.log("Can't read file" + error);
        }

        fs.readFile(file2, (error, data2)=>{
            if (error){
                return console.log("Can't read file" + error);
            }

            // Convert the json to object
            let jsonstr1 = JSON.parse(data1)
            let jsonstr2 = JSON.parse(data2) 
            log(jsonstr1[0]) // get the first list of object

            let print = `Halo, nama kami adalah ${jsonstr1[0].Name}, ${jsonstr2[0].Name}`
            log(print)
        })
    })

    

}

function scope(){
/* Block Scope */
// 'var' is global even if you declared inside {} block
// 'let' & 'const' is local if you declare it inside {}
{
    var a = 'a'
    let b = "b"
}
console.log(a) // accessible
console.log(b) // inaccessible

/* Function Scope */
// 'var', 'let', and 'const' are inaccessible outside function

(function(){
    var a = "a"
    let b = "b"
    const c = "c"

    // accessible
    console.log(a)
    console.log(b) 
    console.log(c) 
})()
console.log(a) // inaccessible
console.log(b) // inaccessible
console.log(c) // inaccessible
}

function promises(){
    // an Object that provides a result for the consumer* (consuming code).
    // The Promise Object makes that result being available to all subscribed code when it's ready.

    // @param : executor, a callback passed 2 args, resolve & reject
    // but only returned 1 state, which is rejected or fulfilled
    let promise = new Promise(executor)
    
    // The executor will do their job. Their finished job will be declared with 'resolve' as its state will be in fulfilled state.
    // When error occurred, then reject will play its role by returning a rejected state.
    function executor(resolve, reject){

        // let's say the job works well
        // setTimeout is not recommended in production code cause the req api you received is already asynchronous  
        setTimeout(()=>{
            resolve("job is done")
        }, 1000)

        // let's say the job failed
        setTimeout(function(){
            reject(new Error("Error occurred!"))
        }, 1000)
    };

    //=========================================================
    let owner = new CoffeeShop()

    const customerOrder = [{
        Type: "Beverage",
        Menu: [
            "1 Milk",
            "2 Oolong Tea",
            "1 Cappucino"
        ]
    },
    {
        Type: "Main Dish",
        Menu: [
            "1 Fried Rice",
            "2 Crispy Prawn",
            "1 Basil Rice"
        ]
    },
    {
        Type: "Dessert",
        Menu: []
    }];

    const custOrder = customerOrder.map(order=>{
        return owner.promise(order)
    });

    Promise.allSettled(custOrder)
    // owner
        // .promise(customerOrder)
        .then(
            value => console.log(value)
            // error => console.log(error) or you can declare this in catch function
        )
        .catch(reason => alert(reason))
        .finally(()=>alert("Done!"))

    
}

// note: the 'await' keyword only works inside async function
async function asyncawait(){
    let owner = new CoffeeShop()
    const customerOrder = [{
        Type: "Beverage",
        Menu: [
            "1 Milk",
            "2 Oolong Tea",
            "1 Cappucino"
        ]
    },
    {
        Type: "Dessert",
        Menu: []
    }];

    try {
        // const proms = await owner.promiseAsync(customerOrder)

        // using this to map all orders
        const custOrder = customerOrder.map(order=>{
            return owner.promise(order)
        });

        const promsAll = Promise.allSettled(custOrder)
            .then(
                (value)=> console.log(value),
                (error)=> console.log(error)
            );
        console.log(promsAll);
    } catch (error) {
        console.log("Your order is not available");
    }
}

file();  