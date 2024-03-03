//Destructuring

/*function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}


const person1 = {
    firstName: "bob",
    lastName: "sponge",
    age: 30,
    job: "doctor",
}
const person2 = {
    firstName: "ayo",
    lastName: "lawal",
    age: 20,
}

displayPerson(person2);*/

//NESTED OBJECTS - objects inside of another object

/*const person = {
    fullName: "Adeyemi Omolara",
    age: 30,
    isStudent: true,
    hobbies: ["coding", "reading", "swimming"],
    address: {
        street: "124 lil st.",
        city: "Lagos",
        country: "Nigeria"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.city);

for(const property in person.address){
    console.log(person.address[property])
}

class Person {
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("spongebob", "30", "4 mark St.", "Lagos", "Nigeria");
const person2 = new person("Mary", "15", "9 Int St.", "Lagos", "Nigeria");
const person3 = new Person("Clara", "19", "16 Agb St.", "Lagos", "Nigeria");

console.log(person1.name);
console.log(person1.address.country);
console.log(person3.address.street);*/

//ARRAYS OF OBJECTS

/*const fruits = [{name: "apple", color: "red", calories: "95"},
                 {name: "banana", color: "green", calories: "35"},
                 {name: "orange", color: "orange", calories: "78"},
                 {name: "coconut", color: "yellow", calories: "195"},
                 {name: "pineapple", color: "yellow", calories: "50"}];

//fruits.push({name: "grapes", color: "purple", calories: "15"});
//fruits.pop()
//fruits.splice(1, 2);
//console.log(fruits);

//for each
fruits.forEach(fruit => console.log(fruit.name));

//map
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames)

//filter
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits)

//reduce
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);*/

//SORT- method used to sort elements of an array in place.
/*let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort();
console.log(fruits);

let numbers = [1, 8, 5, 9, 6, 2, ,3, 7, 10, 4]
numbers.sort((a, b) => a - b)
console.log(numbers)

const people = [{name: "Beauty", age: 18, gpa: 3.0},
                {name: "Tom", age: 31, gpa: 4.0},
                {name: "Clara", age: 25, gpa: 3.5},
                {name: "Lade", age: 19, gpa: 3.8}]
people.sort((a, b) => a.age - b.age);
console.log(people)*/

/*DATES-objects that contain values that represent dates and times. These date objects can be changed and formatted.

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

console.log(year);
console.log(month);
console.log(day);*/

//CLOSURE-A function defined inside of another function.

/*function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`count increased to ${count}`);
  }
  function getCount() {
    return count;
  }

  return { increment, getCount };
}
const counter = createCounter();

counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

//Example2
function createGame() {
  let score = 0;
  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }
  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }

  function getScore() {
    return score;
  }

  return {increaseScore, decreaseScore, getScore}
}

const game = createGame();
game.increaseScore(5);
game.increaseScore(8);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()}pts`);*/

//SetTimeout-it always you to schedule the execution of a function after an amount of time.
let timeoutId;

function startTimer(){
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTED");
}

function clearTimer(){
  clearTimeout(timeoutId);
  console.log("CLEARED");
}