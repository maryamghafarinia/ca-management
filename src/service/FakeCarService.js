export default class FakeTodoService {
  constructor(cars , manufacturers , colors) {
    this.cars = cars ? cars : [];
    this.manufacturers = manufacturers ? manufacturers : [];
    this.colors = colors ? colors : [];
  }
  async fetchCars() {
    return this.cars;
  }

  async fetchColors() {
    return this.colors;
  }
  
  async fetchManufacturer() {
    return this.manufacturers;
  }
}