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

const age = parseInt(prompt('How old are you?'));

if (isNaN(age) || age < 0) {
  console.log('Please write a real positive number');
} else if (age < 18) {
  console.log('You are too young.');
} else if (age >= 18 && age <= 50) {
  console.log('You can drink');
} else if (age > 50 && age <= 80) {
  console.log("You can't drink");
} else if (age > 80) {
  console.log('You can do whatever you want.');
}
