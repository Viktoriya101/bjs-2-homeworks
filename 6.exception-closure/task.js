//Задача 1. Форматтер чисел
function parseCount(value) {
	let pars = Number.parseFloat(value);
	if(isNaN(pars)) {
		throw new Error("Невалидное значение");
	}
	return pars;
}

function validateCount(value) {
	try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

//Задача 2. Треугольник 
class Triangle {
	constructor(a, b, c) {
		if((a >= b + c) || (b >= a + c) || (c >= a + b)) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let p = this.perimeter / 2;
    	return Number.parseFloat((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try { 
    	return new Triangle(a, b, c);
  } catch {
    	return { 
      		get perimeter() { 
        		return "Ошибка! Треугольник не существует"; 
      		},
      		get area() { 
        		return "Ошибка! Треугольник не существует"; 
      		}
    	}
  	}
}