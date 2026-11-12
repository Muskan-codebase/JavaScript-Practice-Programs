// Create a class Calculator with methods for addition, subtraction, multiplication, and division.

class Calculator {

    addition(x, y) {
        return x + y
    }

    subtraction(x, y) {
        return x - y;
    }

    multiplication(x, y) {
        return x * y;
    }

    division(x, y) {
        return x / y;
    }
}

let math = new Calculator();
console.log(math.addition(5, 10));
console.log(math.subtraction(47, 7));
console.log(math.multiplication(50, 100));
console.log(math.division(12, 24));
