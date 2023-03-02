const add = (a: number, b: number): number => {
  return a + b;
};

const addAnother = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  a - b;
  // Typescript will not catch that there is no return
  // So always put return annotation on function
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // can still return null or undefined - nothing else
};

const throwError = (message: string): never => {
  // function will never return anything - ever
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

// Using destructuring
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(forecast);
