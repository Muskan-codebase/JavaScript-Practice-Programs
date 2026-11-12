// Create a class Rectangle with a method to calculate its area.

class Rectangle {

    constructor(l, w) {
        this.l = l;
        this.w = w;
    }

    areaOfRectangle() {
        let area = this.l * this.w;
        return area;
    }
}

let r = new Rectangle(14, 24);
console.log(r.areaOfRectangle());