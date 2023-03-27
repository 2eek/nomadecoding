// function sayHello() {
//   console.log('Hello my name is C');
// }

// sayHello('nico');
// sayHello('dal');
// sayHello('lynn');

// function sayHello1(a) {
//   return a;
//   // console.log('Hello my name is C');
// }
// //sayHello1();
// alert(sayHello1('Hello!'));

// function sayHello(nameOfPerson) {
//   console.log(nameOfPerson);
// }

// sayHello('nico');
// sayHello('dal');
// sayHello('lynn');

// function get_argument(arg) {
//   return arg;
// }
// alert(get_argument(1));
// alert(get_argument(2));

// function numbering() {
//   console.log(1);
// }
// numbering();
// numbering();

// numbering();

// numbering();

// function numbering() {
//   var i = 0;
//   while (i < 10) {
//     console.log(i);
//     i += 1;
//   }
// }
// for (var i = 0; i < 1000; i++) {
//   numbering();
// }
// // hello

// const player = {
//   name: 'Nico',
//   age: 98,
// };

// console.log(player);
// player.name ="nicolas";
// console.log(player);
// player.sexy="soon";
// console.log(player);

// function plus(a, b) {
//   console.log(a + b);
// }

// plus(2, 3);

// function minusFive(potato) {
//   console.log(potato - 5);
// }
// minusFive(10, 10, 12, 34, 4, 5, 6);

// const calculator= {
//   add: function add(a,b){
//     console.log(a+b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//     },
//     div: function (a, b) {
//       console.log (a / b);
//       },
//       multi: function (a, b) {
//         console.log (a * b);
//         },
//         power: function (a, b) {
//           console.log (a ** b);
//           },
//           };

// const calculator= {
//   add:
// function add(a,b){
// console.log(a+b);
// }

// add(2,3);

//   const age= 96;
//   function calculaterKrAge(ageOfForeigner){
//     ageOfForeigner +2;
//     return "hello";
//   }

//   const krAge = calculaterKrAge(age);
//   console.log(krAge);

// const calculator= {
//   plus: function (a,b){
//   return a+b;
//   }
//   }

//   const plusResult= calculator.plus(2,3);
//   console.log(plusResult);

// const age= prompt("How old are you?");
// console.log(age);
// console.log(typeof age); // variable의 타입을 볼 수 있음

// const age = prompt('How old are you?');

// console.log(typeof age, typeof parseInt(age));

// console.log(typeof age, parseInt(age));

// const age= parseInt(prompt("How old are you?"));
// console.log(isNaN(age));

// const age=parseInt(prompt("How old are you?"));

// if(isNaN(age)){
// console.log("Please write a number");
// } else if(age<18){

// console.log("You are too young.");

// }else{
// console.log("You can drink");

// const age = parseInt(prompt('How old are you?'));

// if (isNaN(age) || age < 0) {
//   console.log('Please write a real positive number');
// } else if (age < 18) {
//   console.log('You are too young.');
// } else if (age >= 18 && age <= 50) {
//   console.log('You can drink');
// } else if (age > 50 && age <= 80) {
//   console.log("You can't drink");
// } else if (age === 100) {
//   console.log('wow you are wise');
// } else if (age > 80) {
//   console.log('You can do whatever you want.');
// }

// const kkk = document.getElementById('yees');

// kkk.innerText = 'Got you!';
// console.log(kkk.id);
// console.log(kkk.className);

// const hell = document.getElementsByClassName('hello');
// console.log(hell);

// const title = document.querySelector('.hello ');
// console.log(title);

// const title = document.querySelector('.hello ');
// console.log(title);

// const title = document.querySelector('#hello ');
// console.log(title);

// const title = document.querySelector('div.hello:first-child h1');

// function handleTitleClick() {
//   const colors = [
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'indigo',
//     'violet',
//     'black',
//   ];
//   let currentColor = title.style.color;
//   let currentIndex = colors.indexOf(currentColor);
//   if (currentIndex === colors.length - 1) {
//     title.style.color = colors[0];
//   } else {
//     title.style.color = colors[currentIndex + 1];
//   }
// }
// title.addEventListener('click', handleTitleClick);
// // function handleTitleclick() {
//   console.log('title was clicked!');
// title.style.color = 'red';
// title.style.color = 'blue';

// }

const title = document.querySelector('div.hello:first-child h1');
function handleTitleClick() {
  // title.style.color = 'blue';
  // console.log('title was clicked');
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'black',
  ];
  let currentColor = title.style.color;
  let currentIndex = colors.indexOf(currentColor);
  if (currentIndex === colors.length - 1) {
    title.style.color = colors[0];
  } else {
    title.style.color = colors[currentIndex + 1];
  }
}

function handleMouseEnter() {
  title.innerText = 'Mouse is here';
  //console.log('Mouse is here!');
}

function handleMouseLeave() {
  title.innerText = 'Mouse is gone!';
}

function handleWindowCopy() {
  alert('copier');
}

title.addEventListener('click', handleTitleClick); // 클릭 이벤트에대한 리쓴
//handleTitleClick()//함수-> h1 클릭될 때 실행되는 함수
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);
window.addEventListener('copy', handleWindowCopy);
// Select the body element
const body = document.querySelector('body');

// Define an array of colors
const colors = [
  '#F44336',
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
  '#795548',
  '#9E9E9E',
  '#607D8B',
];

// Function to generate a random color from the array
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Add a click event listener to the body element
body.addEventListener('click', function () {
  // Set the background color of the body to a random color
  body.style.backgroundColor = getRandomColor();
});
