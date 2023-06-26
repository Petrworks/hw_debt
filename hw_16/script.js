class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, carNumber, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.carNumber = carNumber;
    this.owner = '';

    this.assignOwner(owner);
  }

  assignOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log(
        'Cannot assign owner. Owner must be a valid Human instance and at least 18 years old.'
      );
    }
  }

  displayInfo() {
    console.log(
      `Car Information: Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License Plate: ${this.carNumber}`
    );

    if (this.owner) {
      this.owner.displayInfo();
    } else {
      console.log('No owner assigned.');
    }
  }
}

const person1 = new Human('John Doe', 25);
const person2 = new Human('Jane Smith', 16);
const person3 = new Human('John Malkovich', 32);

const car1 = new Car('Toyota', 'Camry', 2019, 'AB1234', person1);
const car2 = new Car('Honda', 'Civic', 2020, 'CD5678', person2);
const car3 = new Car('Mazda', 'CX-56', 2018, 'CD5566', person2);

// Зміна власника автомобіля
car2.assignOwner(person1); // Виклик методу для присвоєння власника

// Виведення інформації про автомобілі та їх власників
car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
