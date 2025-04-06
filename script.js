//complete this code
class Rectangle {
		constructor(width, height){
			this.width = width;
			this.height = height;
		}
	get width() {
		return this._width; 
	}

	get width(value){
		this._width = value;
	}
	get height(){
		return this._height;
	}
	set height(value){
		this._height = value;
	}
	getArea() {
		return this.width*this.height;
	}
 getPerimeter() {
    return 2 * (this.width + this.height);
  }
	
}

class Square extends Animal {
	constructor(side) {
		super(side, side)
	}
 getPerimeter() {
    return 4 * this.width; // Since width and height are the same, we can just use width
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
