const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// const pepsi = ['brown', true, 40];  // an any array -> not entirely useful

const pepsi: [string, boolean, number] = ['brown', true, 40]; // now a tuple with meaning to order of elements

type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 40];

// What do the numbers mean?
const carSpecs: [number, number] = [400, 3354];

// JavaScript objects are much more clear
const carStats = {
  horsePower: 400,
  weight: 3354,
};

// why tuples?
// 1) representing a single row of a csv file
