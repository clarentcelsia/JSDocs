// Add "start":"node index.js" in package.json or using nodemon to monitor the changes automatically

/* ====================================================== */
// const btn = document.getElementById("btn_enter")
// btn.addEventListener("click", enter)
function enter(){
    let valids = prompt("Are you sure?");
    if (valids != null){
        alert('ans: ' + valids);
    }
}
/* ====================================================== */

// Javascript isnt a class-based language. it's a prototype-based language
function variables(){
    let name = {
        fname: "firstname",
        lname: "lastname"
    }

    console.log("my firstname: ", name.fname)
    console.log("my lastname: ", name.lname)

    // hasOwnProperty can be found by extending the prototype object in console
    // proto is able to be called.
    isOwned = name.hasOwnProperty('fname') 
    console.log(isOwned)
}

function Goat(sound, name, age){
    // create proto object
    let baby_goat = Object.create(sound)

    // create new attrs
    baby_goat.new_name = name
    baby_goat.new_age = age

    return baby_goat
}

function Dog(name, age){
    this.new_name = name
    this.new_age = age
}

//Note. JS doesnt support overloading method. The way to manipulate it is by using default value
const DEFAULT= {
    NAME: "NAME",
    TYPE: "TYPE",
    AGE: 0

}

/* CLASS WITH OVERRIDING, OVERLOADING CONSTRUCTOR */
class Animal {
    constructor(name, type){
        this.new_name = name
        this.new_type = type
    }
    sound(){
        return `${this.new_name} is a ${this.new_type}`
    }
}

class Animal2 {
    constructor(attrs){
        this.new_name = attrs.name || DEFAULT.NAME
        this.new_type = attrs.type || DEFAULT.TYPE
        this.new_age = attrs.age || DEFAULT.AGE
    }
}

/* INHERITANCE */
class Book {
    constructor(title, author, year){
        // automatically create a new variable
        this.title = title
        this.author = author
        this.year = year
    }

    toString(){
        return `${this.title}-${this.author} (${this.year})`
    }

}

class Novel extends Book{
    constructor(title, author, year, category){
        super(title, author, year)
        this.category = category
    }

    toString(){
        return `${this.category}: ${this.title}-${this.author} (${this.year})`
    }    
}

let animalConstStr = {
    string: function(){
        return `${this.name} sounded like ${this.voice}`;
    }
}

let catConstructor = {
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}

/* Class Prototyping */
function AnimalClass(name, voice){
    let newAnimal;

    newAnimal = Object.create(animalConstStr)

    newAnimal.name = name
    newAnimal.voice = voice

    return newAnimal
}

function Cats(name, voice, whiskerColor){
    let newCat = AnimalClass(name, voice)

    Object.setPrototypeOf(newCat, catConstructor)
    newCat.whiskerColor = whiskerColor
    return newCat
}

function main(){

    let goat_sound = {
        sound: function(){
            return "mbekk"
        }
    }
    let newAnimal = Goat(goat_sound, "kiddo", 2)
    console.log(newAnimal)

    // -------------------------------------------------
    /* Using "new" keyword */
    Dog.prototype.sound = function(){
        return "guk guk"
    }
    let puppy = new Dog("Mochi", 10);
    console.log(puppy)

    //-------------------------------------------------
    // Class
    newAnimal = new Animal("Bonnie", "Mammal");
    console.log("New Animal : ", newAnimal.sound())

    let attrs = {
        name: "Mocca",
        type: "fish",
        age: 10
    }
    let newAnimal2 = new Animal2(attrs)
    console.log(newAnimal2)

    // Inheritance
    let agatha = new Novel("Girl's murder", "Agatha Christie", "2006", "Fiction")
    console.log("Novel: ", agatha.toString())

    // Using Object Approach where you can append a new object without declaring a class
    // just by using a function to create Class-Prototype
    Object.setPrototypeOf(catConstructor, animalConstStr)
    let cats = Cats("Kitty", "Meow", "Black")
    console.log(cats.string())
}

main()