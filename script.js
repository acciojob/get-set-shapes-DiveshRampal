class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width (without parameters)
  get width() {
    return this._width;
  }

  // Getter for height (without parameters)
  get height() {
    return this._height;
  }

  // Method to calculate the area of the rectangle
  getArea() {
    return this.width * this.height;
  }

  // Method to calculate the perimeter of the rectangle
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Square class that extends Rectangle
class Square extends Rectangle {
  // Constructor that takes side as the only parameter
  constructor(side) {
    super(side, side); // Calls the Rectangle constructor with the same value for both width and height
  }

  // Method to calculate the perimeter of the square
  getPerimeter() {
    return 4 * this.width; // Since width and height are the same, we can just use width
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
