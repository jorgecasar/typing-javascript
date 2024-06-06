export class C {
	constructor() {
		this.constructorOnly = 0;
		this.constructorUnknown = undefined;
	}
	method() {
		this.constructorOnly = 0;
		this.constructorUnknown = "unknown";
		this.methodOnly = "ok";
	}
	method2() {
		this.methodOnly = true;
	}
}
