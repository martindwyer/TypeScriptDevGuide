const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// dates[1] = 'a'; -> does not work because typescript inferred array as date array

const carsByMake = [['f150'], ['corolla'], ['camaro']]; // Two dim string array by inference

// 1) Help with inference when extracting values
const car = carMakers[0]; // gives car type string
const myCar = carMakers.pop(); // gives myCar type of string

// 2) Prevent incompatible values
// carMakers.push(100); -> will not compile

// 3) Help with 'map'
carMakers.map((car: string) => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), '2030-10-10']; // inference to be string | Date
importantDates.push(new Date());
// importantDates.push(111); -> will not work because not a string or Date

const importantDatesTwo: any[] = [new Date(), '2030-10-10']; // an array of any old thing
importantDatesTwo.push(111); // works
