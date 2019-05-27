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

const profile = {
  item1: 'John Doe',
  item2: {
    street: '40 Main Street',
    city: 'Boston'
  },
  item3: ['movies', 'music']
};

const { item1, item2, item3 } = profile;
const { street, city } = profile.item2;

console.log(item1, item2, item3[1]);
console.log(street, city);

// CLASSES

// SUBCLASSES

// MODULES
