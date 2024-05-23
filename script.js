// const name = 'Mary';
// const age = 30;

// const hello = `My name is ${name} and age is ${age}`;

// console.log(hello);

// const numbers = new Array(1, 2, 3, 4, 5, 6, 7);

// console.log(numbers);

// const word = 'My, name, is, Key, and, Peele';

// // console.log(word.length);
// // console.log(word.toUpperCase());
// // console.log(word.substring(0, 7).toUpperCase());
// console.log(word.split(', '));

// const fruits = ['apple', 'orange', 'pears'];

// fruits.unshift('strawberry');
// fruits.push('mangoes');

// console.log(fruits);

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('apple'));

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   hobbies: ['music', 'sports', 'reading'],
//   address: {
//     street: '50 main st',
//     city: 'Boston',
//     state: 'MA',
//   },
// };

// person.email = 'doe@example.com';

// // console.log(person.hobbies[1]);

// console.log(person);

// const todos = [
//   {
//     id: 1,
//     text: 'Take out trash',
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: 'Meeting with boss',
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: 'Dentist appointment',
//     isCompleted: false,
//   },
// ];

// // ForEach
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// // Map
// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

// console.log(todoText);

// // Filter
// const todoCompleted = todos.filter(function (todo) {
//   return todo.isCompleted === true;
// });

// console.log(todoCompleted);

// // Chaining filter and map Array methods
// const todoCompletedText = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoCompletedText);

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (todo of todos) {
//   console.log(todo.text);
// }

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);

// console.log(todoJSON);

// For Loop
// for (let i = 0; i <= 10; i++) {
//   console.log(`Number: ${i}`);
// }

// // While Loop
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// // Ternary operator
// const x = 19;

// const color = x >= 10 ? 'red' : 'blue';

// // Switch

// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is unknown');
//     break;
// }

// // Functions
// function addNums(num1, num2) {
//   console.log(num1 + num2);
// }

// addNums(5, 10);

// const addNums = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addNums(5, 5));

// // Constructor Function
// function Person(firstName, lastName, age, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.dob = new Date(dob);
// }

// // Prototype

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };
// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// // Class
// class Person {
//   constructor(firstName, lastName, age, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person1 = new Person('John', 'Doe', 30, '4-2-1980');
// const person2 = new Person('Mary', 'Smith', 22, '2-6-1995');

// console.log(person1);
// console.log(person2.getBirthYear());

// DOM

// Selecting single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple elements
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// forEach with querySelector
// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'My';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');

// // btn.style.background = 'teal';
// // btn.style.fontStyle = 'italic';
// // btn.style.fontSize = '20px';

// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   document.querySelector('#my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   document.querySelector('.items').lastElementChild.innerHTML =
//     '<h1>Heading 1</h1>';
// });

// Project
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || nameInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter fields';
    setTimeout(() => msg.remove(), 2000);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);

    // Clear Fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
