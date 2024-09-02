
// 4.
const calculator = {
    name: 'Adrian',
    getPersonName: (firstName, lastName) => {
        console.log(`1. Hello, ${firstName} ${lastName}`);
    },
    getRectangleArea: (width, height) => {
        return width * height;
    },
    getDistance: (speed, time) => {
        return speed * time;
    }
}


// 1.
const person1 = calculator.getPersonName('Adrian', 'Enachi');

// 2.
const rectangle1 = calculator.getRectangleArea(10, 20);
console.log(`2. The area of the rectangle is ${rectangle1}`);

// 3.
console.log(`3. You have traveled ${calculator.getDistance(100, 2)} km`);



