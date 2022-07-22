const objPrototype = {
  age: 26,
  name: 'kanchan',
  getDetails() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const obj = Object.create(objPrototype);
obj.skill = "cooking"

console.log(obj) // { skill: 'cooking' }



//Remove age
console.log(delete obj.age); // doesnt delete if in prototype
console.log(delete obj.skill); // delete's since it's obj's property
console.log(obj) // {}
console.log(obj.getDetails()); // kanchan is 26 years old
