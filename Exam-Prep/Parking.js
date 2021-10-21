class Parking {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }

  addCar(carModel, carNumber) {
    if (this.capacity <= this.vehicles.length) {
      throw new Error('Not enough parking space.');
    } else {
      let carObj = {
        carModel,
        carNumber,
        payed: false,
      };
      this.vehicles.push(carObj);
      return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
  }

  removeCar(carNumber) {
    let carNotFound = true;
    for (let i = 0; i < this.vehicles.length; i++) {
      const vehicle = this.vehicles[i];
      if (vehicle.carNumber == carNumber) {
        carNotFound = false;
        if (vehicle.payed == false) {
          throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else {
          this.vehicles.splice(i, 1);
          return `${carNumber} left the parking lot.`;
        }
      }
    }
    if (carNotFound) {
      throw new Error("The car, you're looking for, is not found.");
    }
  }

  pay(carNumber) {
    let carNotFound = true;
    for (let vehicle of this.vehicles) {
      if (vehicle.carNumber == carNumber) {
        carNotFound = false;
        if (vehicle.payed == true) {
          throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        } else {
          vehicle.payed = true;
          return `${carNumber}'s driver successfully payed for his stay.`;
        }
      }
    }

    if (carNotFound) {
      throw new Error(`${carNumber} is not in the parking lot.`);
    }
  }

  getStatistics(carNumber) {
    if (carNumber) {
      let result = '';
      for (let vehicle of this.vehicles) {
        if (vehicle.carNumber == carNumber) {
          result += `${vehicle.carModel} == ${vehicle.carNumber} - ${vehicle.payed ? 'Has payed' : 'Not payed'}`;
        }
      }
      return result;
    } else {
      let result = `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`;
      for (let vehicle of this.vehicles) {
        result += `\n${vehicle.carModel} == ${vehicle.carNumber} - ${vehicle.payed ? 'Has payed' : 'Not payed'}`;
      }
      return result;
    }
  }
}