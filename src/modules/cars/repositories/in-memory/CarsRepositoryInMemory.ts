import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarsDTO";

import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
    specifications,
    id,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();

    Object.assign(car, {
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
      specifications,
      id,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((_car) => _car.license_plate === license_plate);
  }

  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const carList = this.cars.filter((_car) => {
      if (
        _car.available === true &&
        ((brand && _car.brand === brand) ||
          (category_id && _car.category_id === category_id) ||
          (name && _car.name === name) ||
          (!brand && !category_id && !name))
      ) {
        return _car;
      }
      return null;
    });
    return carList;
  }

  async findById(id: string): Promise<Car> {
    return this.cars.find((_car) => _car.id === id);
  }
}

export { CarsRepositoryInMemory };
