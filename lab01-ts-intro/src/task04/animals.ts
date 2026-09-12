interface Behavior {
  name: string,
  age: number,

  makeSound(): string,

  swim?(): void,
  fly?(): void,
}

class Cat implements Behavior {
  constructor(
    public name: string,
    public age: number
  ) {}

  public makeSound(): string { return "Meow"; }
}

class Bird implements Behavior {
  constructor(
    public name: string,
    public age: number
  ) {}

  public makeSound(): string { return "I don't know"; }
  public fly() { console.log("Bird flew in the sky"); }
}

class Fish implements Behavior {
  constructor(
    public name: string,
    public age: number
  ) {}

  public makeSound(): string { return "Буль буль буль"; }
  public swim() { console.log("Fish swemt to the abyss of the water"); }
}
