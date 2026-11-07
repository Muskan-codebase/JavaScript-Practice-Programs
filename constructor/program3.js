// Create a constructor function Car that accepts brand, model, and price.

function Car(brand, model, price) {

    this.brand = brand;
    this.model = model;
    this.price = price;
    this.display = function () {
        console.log(`Car: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Price: ${this.price}`);
    }
}

// 2. Instantiate a few cars using the 'new' keyword
const car1 = new Car("Tata", "Nexon Ev", 1450000);
const car2 = new Car("Mahindra", "XUV700", 1399000);
const car3 = new Car("Hyundai", "Creta", 1100000);
const car4 = new Car("Maruti Suzuki", "Swift", 650000);

// 3. Display the details of the created cars
console.log("--- Car Inventory ---");
car1.display();
console.log("------------------------------------");
car2.display();
console.log("------------------------------------");
car3.display();
console.log("------------------------------------");
car4.display();