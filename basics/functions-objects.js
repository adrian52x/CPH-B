function getPersonName(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}`;
}

function getRectangleArea(width, height) {
    const area = width * height;
    return `The area of the rectangle is ${area}`;
}

function getDistance(speed, time) {
    const distance = speed * time;
    return `You have traveled ${distance} km`
}


const calculator = {
    fullName: getPersonName('Adrian', 'Enachi'),
    rectangleArea: getRectangleArea(10, 20),
    distance: getDistance(100, 2),
}

console.log(calculator);




