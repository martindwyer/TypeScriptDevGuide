class Vehicle {
  public color: string;
  private vinNumber: number;

  constructor(color: string) {
    this.color = color;
    this.vinNumber = 999;
  }

  public drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('honk honk');
  }

  protected stop(): void {
    console.log('breaks!!!!');
  }
}

const vehicle = new Vehicle('purple');

vehicle.drive();

class Car extends Vehicle {
  public wheels: number;

  constructor(color: string, wheels: number) {
    super(color);
    this.wheels = wheels;
  }

  private startDriving(): void {
    console.log('vrooom....');
  }

  public drive(): void {
    this.startDriving();
  }

  public stopTheCar(): void {
    this.stop();
  }
}

const car = new Car('green', 4);

car.drive();
car.honk();
car.stopTheCar();
console.log(car.color);
