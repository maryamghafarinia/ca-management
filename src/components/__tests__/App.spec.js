import React from 'react'; 
import { render , waitFor, screen } from '@testing-library/react'
import App from '../../App';
import FakeCarService from '../../service/FakeCarService';


describe('The App component', () => {
    const data = {
        cars : [
        {
          stockNumber: 41528,
          manufacturerName: "Porsche",
          modelName: "911",
          color: "yellow",
          mileage: {
            number: 100105,
            unit: "km"
          },
          fuelType: "Diesel",
          pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg"
        },
        {
          stockNumber: 41849,
          manufacturerName: "Volkswagen",
          modelName: "Tiguan",
          color: "black",
          mileage: {
            number: 100232,
            unit: "km"
          },
          fuelType: "Diesel",
          pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg"
        }
      ],
      totalPageCount: 100,
      totalCarsCount: 1000
    }
    const cars = data.cars;
    const manufacturers = data.cars.map(car => car.manufacturerName);
    const colors = data.cars.map(car => car.color);

    const carService = new FakeCarService(cars, manufacturers, colors);

    test('gets cars when component is mounted and displays them', async () => {
        const fetchCarsSpy = jest.spyOn(carService, 'fetchCars');
        await waitFor(() => carService.fetchCars())
        expect(fetchCarsSpy).toHaveBeenCalled();
     });
});