//exe 1

let greeter = (myArray) => {
    const greetText = 'Hello ';
    for (let name of myArray) {
        console.log(greetText + name);
    }
}

greeter(["Harin", "Reddy", "Ramasani"]);


//exe 2
var capitalizeFirst = (str) => {
    const [first, ...rest] = [...str];
    return [first.toUpperCase(), ...rest].join('');
}

console.log(capitalizeFirst("hello")); 
console.log(capitalizeFirst('HarinReddy'));

//exe 3
const colors = ['red', 'green', 'blue', 'yellow'];
const capitalizedColors = colors.map(color => capitalizeFirst(color));
console.log(capitalizedColors);


//exe 4
function filterGreaterThan20(arr) {
    return arr.filter(value => value >= 20);
}

const values = [1, 60, 21, 19, 5];
console.log(filterGreaterThan20(values));



//exe 5
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
    details() {
        return `Model: ${this.model}, Engine: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} has a balance of ${this.balance}`;
    }
}

const car2 = new Car('Honda Civic', 1976);
console.log(car2.details());

const sedan = new Sedan('Audi A4', 2018, 30000);
console.log(sedan.info());
