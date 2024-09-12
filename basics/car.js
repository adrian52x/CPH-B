export class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }

    getCarInfo(){
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }

    startCar(){
        this.isRunning = true;
    }

    stopCar(){
        this.isRunning = false;
    }

}

const car1 = new Car('Audi', 'A4', 2019);
const car2 = new Car('BMW', 'X5', 2020);

console.log(car1.getCarInfo());
console.log(car2.startCar());
console.log(car2.stopCar());

console.log(car2.getCarInfo());
console.log(car2.startCar());
console.log(car2.stopCar());
