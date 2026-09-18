abstract class Car {
  public brand: string;
  protected year: number;
  private vinNumber: string;

  constructor(brand: string, year: number, vinNumber: string) {
    this.brand = brand;
    this.year = year;
    this.vinNumber = vinNumber;
  }

  protected getVinNumber(): string {
    return this.vinNumber;
  }

  public abstract printInfo(): void;
}

class BMW extends Car {
  public model: string;
  protected horsepower: number;
  private isMSeries: boolean;

  constructor(
    year: number,
    vinNumber: string,
    model: string,
    horsepower: number,
    isMSeries: boolean
  ) {
    super("BMW", year, vinNumber);
    this.model = model;
    this.horsepower = horsepower;
    this.isMSeries = isMSeries;
  }

  public printInfo(): void {
    console.log(
      `Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, ` +
      `Кінські сили: ${this.horsepower}, М-пакет: ${this.isMSeries ? "Так" : "Ні"}, ` +
      `VIN: ${this.getVinNumber()}`
    );
  }
}

class Tesla extends Car {
  public model: string;
  protected batteryCapacityKWh: number;
  private autopilotVersion: string;

  constructor(
    year: number,
    vinNumber: string,
    model: string,
    batteryCapacityKWh: number,
    autopilotVersion: string
  ) {
    super("Tesla", year, vinNumber);
    this.model = model;
    this.batteryCapacityKWh = batteryCapacityKWh;
    this.autopilotVersion = autopilotVersion;
  }

  public printInfo(): void {
    console.log(
      `Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, ` +
      `Ємність батареї: ${this.batteryCapacityKWh} кВт*год, ` +
      `Версія автопілота: ${this.autopilotVersion}, VIN: ${this.getVinNumber()}`
    );
  }
}

class Toyota extends Car {
  public model: string;
  protected fuelType: string;
  private isHybrid: boolean;

  constructor(
    year: number,
    vinNumber: string,
    model: string,
    fuelType: string,
    isHybrid: boolean
  ) {
    super("Toyota", year, vinNumber);
    this.model = model;
    this.fuelType = fuelType;
    this.isHybrid = isHybrid;
  }

  public printInfo(): void {
    console.log(
      `Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, ` +
      `Тип пального: ${this.fuelType}, Гібрид: ${this.isHybrid ? "Так" : "Ні"}, ` +
      `VIN: ${this.getVinNumber()}`
    );
  }
}

const bmwM3 = new BMW(2023, "WBA11111111111111", "M3", 510, true);
const bmwX5 = new BMW(2021, "WBA22222222222222", "X5", 340, false);

const teslaModelS = new Tesla(2024, "5YJ33333333333333", "Model S Plaid", 100, "HW4 v12");
const teslaModel3 = new Tesla(2022, "5YJ44444444444444", "Model 3", 60, "HW3 v11");

const toyotaCamry = new Toyota(2023, "JT55555555555555", "Camry", "Бензин", false);
const toyotaPrius = new Toyota(2024, "JT66666666666666", "Prius", "Бензин / Електро", true);

const cars: Car[] = [bmwM3, bmwX5, teslaModelS, teslaModel3, toyotaCamry, toyotaPrius];
cars.forEach((car) => car.printInfo());
