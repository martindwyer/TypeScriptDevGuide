// primitives
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to use annotations
// 1) function that returns an 'any' type
//    'any' is a very bad thing inside a typescript application

const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json); // {x:10, y:20} (parse returns any)

// 2) declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

// let foundWord = false; -> needs no annotation

words.forEach((word) => {
  if (word === 'green') {
    foundWord = true;
  }
});

// 4) When the type of a variable cannot be easily inferred correctly

let numbers = [-1, -1, 12];

//let numberAboveZero = false; -> will not work

let numberAboveZero: boolean | number = false; // Can be one of two types

numbers.forEach((num) => {
  if (num > 0) {
    numberAboveZero = num;
  }
});
