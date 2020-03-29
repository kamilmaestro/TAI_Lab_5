var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (complex) {
        return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
    };
    Complex.prototype.subtract = function (complex) {
        return new Complex(this.real - complex.real, this.imaginary - complex.imaginary);
    };
    Complex.prototype.modulo = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        return this.real + ", " + this.imaginary;
    };
    return Complex;
}());
var fstComplex = new Complex(2, 5);
var sndComplex = new Complex(4, 4);
var sum = fstComplex.add(sndComplex);
console.log("Sum: " + sum);
var subtract = sum.subtract(fstComplex);
console.log("Subtract: " + subtract);
var mod = subtract.modulo();
console.log("Modulo: " + mod);
