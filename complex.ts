class Complex {
    private real: number;
    private imaginary: number;


    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(complex :Complex): Complex {
        return new Complex(this.real + complex.real, this.imaginary + complex.imaginary);
    }

    subtract(complex: Complex): Complex {
        return new Complex(this.real - complex.real, this.imaginary- complex.imaginary);
    }

    modulo(): number {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }

    toString(): string {
        return `${this.real}, ${this.imaginary}`;
    }
}

const fstComplex = new Complex(2, 5);
const sndComplex = new Complex(4,4);

const sum = fstComplex.add(sndComplex);
console.log(`Sum: ${sum}`);

const subtract = sum.subtract(fstComplex);
console.log(`Subtract: ${subtract}`);

const mod = subtract.modulo();
console.log(`Modulo: ${mod}`);