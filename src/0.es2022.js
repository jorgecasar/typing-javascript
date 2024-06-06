export class Rectangle {
	constructor(height = 1, width = 1) {
		this.height = height;
		this.width = width;
	}

	// Getter
	get area() {
		return this.calcArea();
	}

	// Method
	calcArea() {
		return this.height * this.width;
	}

	*getSides() {
		yield this.height;
		yield this.width;
		yield this.height;
		yield this.width;
	}
}
