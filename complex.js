"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(complex) {
        return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
    }
    subtract(complex) {
        return new Complex(this.real - complex.real, this.imaginary - complex.imaginary);
    }
    modulo() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        return `${this.real}, ${this.imaginary}`;
    }
}
const fstComplex = new Complex(2, 5);
const sndComplex = new Complex(4, 4);
const sum = fstComplex.add(sndComplex);
console.log(`Sum: ${sum}`);
const subtract = sum.subtract(fstComplex);
console.log(`Subtract: ${subtract}`);
const mod = subtract.modulo();
console.log(`Modulo: ${mod}`);
