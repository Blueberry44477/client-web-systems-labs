interface Payable {
  pay(): void;
}

abstract class Employee {
  public name: string;
  public age: number;
  public salary: number;

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  public abstract getAnnualBonus(): number;
}

class Developer extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  public getAnnualBonus(): number {
    return this.salary * 0.1;
  }

  public pay(): void {
    console.log(`Виплачено заробітну плату розробнику ${this.name}: ${this.salary}`);
  }
}

class Manager extends Employee implements Payable {
  constructor(name: string, age: number, salary: number) {
    super(name, age, salary);
  }

  public getAnnualBonus(): number {
    return this.salary * 0.2;
  }

  public pay(): void {
    console.log(`Виплачено заробітну плату менеджеру ${this.name}: ${this.salary}`);
  }
}

const employees: Employee[] = [
  new Developer("Олексій", 25, 3000),
  new Developer("Ірина", 29, 4200),
  new Manager("Богдан", 35, 5000),
  new Manager("Олена", 40, 6500)
];

const totalAnnualBonuses: number = employees.reduce(
  (sum, employee) => sum + employee.getAnnualBonus(),
  0
);

console.log(`Загальна сума річних бонусів: ${totalAnnualBonuses}`);
