const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic); // this works

//---------- Simplify code with interface ---------------

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const newPrintVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

newPrintVehicle(oldCivic);

//---------- Add functions to interfaces ---------------

interface NextVehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const newCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const nextPrintVehicle = (vehicle: NextVehicle): void => {
  console.log(vehicle.summary());
};

nextPrintVehicle(newCivic);

//-------  Making code reusable with TypeScript -------------

interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

printSummary(newCivic);
printSummary(drink);
