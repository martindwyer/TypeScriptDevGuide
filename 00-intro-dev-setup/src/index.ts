let age: number = 20;
if (age < 50) age += 10;
if (age < 100) age += 30;
console.log(age);

// Annotations and inference
let sales: number = 1234546789;
let course: string = 'Typescript';

// Type 'any' is assigned when type unknown
// Avoid using 'any'

// Functions
function render(document: any) {
  console.log(document);
}

// Arrays
let numbers: number[] = [1, 2, 3];

// Intellisense is a great benefit of Typescript

// Tuples
let user: [number, string] = [1, 'Mosh'];

// Enums
const small = 1;
const medium = 2;
const large = 3;

const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// Function parameters and returns (no unused params, no implicit returns)
function calculateTax(income: number): number {
  return income * 0.15;
}

// Nullable parameters
function calculateTaxByYear(income: number, taxYear?: number): number {
  if (taxYear) {
    return income * 0.1;
  }
  return income * 0.15;
}

// Objects
let employee: { id: number; name: string } = { id: 1, name: 'Mosh' };

// Type alias
type Employee = {
  readonly id: number;
  name: string;
};

let employeeTwo: Employee = { id: 1, name: 'Mosh' };

// Union of types
function kgToPounds(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

// Intersection
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Annotating with literals
let quantity: 50 | 100 = 100;
