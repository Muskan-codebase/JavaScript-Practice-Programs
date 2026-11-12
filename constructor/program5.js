// Create a constructor function Rectangle that accepts length and width and has a method to calculate its area.

function Rectangle(length, width) {

    this.length = length;
    this.width = width;
    this.display = function () {
        let area = this.length * this.width;
        console.log(`Are of rectangle is ${area}`);
    }
}

const r1 = new Rectangle(14, 24);
r1.display();