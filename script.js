//TASK 1

class Person {
  constructor(name, age, gender, address) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.address = address;
  }

  displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Address: ${this.address}`);
  }

  changeAddress(newAddress) {
      this.address = newAddress;
      console.log(`${this.name}'s address updated to: ${this.address}`);
  }
}

// Example usage:
let person1 = new Person("Alice", 30, "Female", "123 Main St, Anytown");
person1.displayDetails();

console.log("\nUpdating address...");
person1.changeAddress("456 Oak Ave, Othertown");
person1.displayDetails();

//TASK 2

class UberPriceCalculator {
  constructor(baseFarePerKm, costPerMinute, surgeMultiplier) {
      this.baseFarePerKm = baseFarePerKm;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier;
  }

  calculatePrice(distanceInKm, timeInMinutes, surgeFactor = 1) {
      // Apply surge pricing if surgeFactor is provided
      let surgeMultiplier = surgeFactor * this.surgeMultiplier;

      // Calculate fare
      let fare = this.baseFarePerKm * distanceInKm + this.costPerMinute * timeInMinutes;
      let totalFare = fare * surgeMultiplier;

      return totalFare;
  }
}

// Example usage:
let calculator = new UberPriceCalculator(2.5, 0.5, 1.5); // Base fare $2.5 per km, $0.5 per minute, surge multiplier 1.5

// Calculate price for a 10 km ride taking 20 minutes, with surge factor of 1.5
let price = calculator.calculatePrice(10, 20, 1.5);
console.log(`Estimated Uber fare: $${price.toFixed(2)}`);