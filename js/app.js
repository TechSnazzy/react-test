// CONST & LET

// ARROW FUNCTIONS

function sayHello() {
  console.log('Hello!');
}

sayHello();

const sayGoodBye = name => console.log(`Goodbye, ${name}`);

sayGoodBye('Sean');

// FOREACH

const fruits = ['Apples', 'Oranges', 'Grapes'];

fruits.forEach((fruit, index) => console.log(fruit));

// MAP

const singleFruit = fruits.map(fruit => fruit.slice(0, -1));

console.log(singleFruit);

// FILTER

const people = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Sharon' }
];

const people2 = people.filter(person => person.id != 2);
console.log(people2);
// SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
// filter out 2 from arr
const arr3 = [...arr.filter(num => num != 2)];
console.log(arr3 + ' this is arr3');

const human = {
  name: 'Sean',
  age: 46
};

const newHuman = {
  ...human,
  city: 'Santa Clara'
};

console.log(newHuman);

// DESTRUCTURING

// Create the animal object
const animal = {
  species: 'dog',
  weight: 27,
  sound: 'woof'
};

// Create the dogNeeds object by spreading the animal object to it first
const dogNeeds = {
  ...animal,
  liquid: 'water',
  solid: 'dog food'
};

/*
Normally you could then assign properties to the variables such as this.
var species = animal.species;
var sound = animal.sound;

But that involves too much typing.
Instead, shorten the syntax by destructuring like this.
*/

const { species, sound, liquid } = dogNeeds;

console.log('The ' + species + ' says ' + sound + ' and needs ' + liquid + '!');

// CLASSES

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}.`;
  }
}

const cat1 = new Cat('Macy', 4);
const cat2 = new Cat('Milo', 3);

console.log(`${cat1.greet()} ${cat2.greet()}`);

// SUBCLASSES

class Customer extends Cat {
  // Inherit the properties of the Cat class by using super().
  // Needs to be inside of a constructor.
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);

console.log(customer1.info());

// MODULES
