//Destructuring

function displayPerson({firstName, lastName, age, job="unemployed"}){
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

displayPerson(person2);

