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


const person = {
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
console.log(person3.address.street);
