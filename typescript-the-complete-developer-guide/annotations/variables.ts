let apples: number = 5;
//let apples2: number = 'good'; //Type 'string' is not assignable to type 'number'
let speed: string = 'fast';
//let speed2: string = 5; // Type 'number' is not assignable to type 'string'

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [1, 2, 3, 4, 5, 6];
let truths: boolean[] = [true, false, true, true];

//Classes
class Car {}
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
// 1) Function that returns the 'any' type
// const json = '{"x":10,"y":20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates); //{x:10,y:20};
//annotation 반영
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{x:10,y:20};

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
// let foundWord; // 추론되지 않음
let foundWord: boolean; //annotations
// let foundWord=false; // inference
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
