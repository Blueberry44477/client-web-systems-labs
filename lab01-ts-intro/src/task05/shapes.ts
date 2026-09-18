interface Shape {
  getArea(): number;
  getPerimeter(): number;
  scale(factor: number): void;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  getArea(): number { return Math.PI * this.radius ** 2; }
  getPerimeter(): number { return 2 * Math.PI * this.radius; }

  scale(factor: number): void {
    if (factor <= 0) {
      throw new Error("Scale factor must be greater than 0");
    }
    this.radius *= factor;
  }
}

class Rectangle implements Shape {
  constructor(
    public width: number,
    public height: number
  ) {}

  getArea(): number { return this.width * this.height; }
  getPerimeter(): number { return 2 * (this.width + this.height); }

  scale(factor: number): void {
    if (factor <= 0) {
      throw new Error("Scale factor must be greater than 0");
    }
    this.width *= factor;
    this.height *= factor;
  }
}

class Triangle implements Shape {
  constructor(
    public sideA: number,
    public sideB: number,
    public sideC: number
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error("Sides must be greater than 0");
    }
    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideB + sideC <= sideA
    ) {
      throw new Error("Triangle inequality violation: invalid sides");
    }
  }

  getPerimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }

  // By using Herons equation.
  getArea(): number {
    const s = this.getPerimeter() / 2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  }

  scale(factor: number): void {
    if (factor <= 0) {
      throw new Error("Scale factor must be greater than 0");
    }
    this.sideA *= factor;
    this.sideB *= factor;
    this.sideC *= factor;
  }
}

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 4, 5),
];

shapes[0]?.scale(2);

const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
const totalPerimeter = shapes.reduce((sum, shape) => sum + shape.getPerimeter(), 0);

console.log(`Total Area: ${totalArea.toFixed(2)}`);
console.log(`Total Perimeter: ${totalPerimeter.toFixed(2)}`);
