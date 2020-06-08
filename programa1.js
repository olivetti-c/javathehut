class Coche {
    constructor(ruedas, chasis) {
        this.ruedas = ruedas;
        this.chasis = chasis;
    }
}

var     variable1 = 'Mundo';
let     variable2 = 4;
const   variable3 = false;
const   coche1 = new Coche(variable2, variable1) // { ruedas: 4 , chasis: 'Menudo chasis'};
const   coche2 = { ruedas: 4 , chasis: 'Menudo chasis' };
const   contenedor = [];

contenedor.push(coche1);
contenedor.push(variable1);
contenedor.push(variable3);

coche2.ruedas = 7;
coche2.parabrisas = false;

function funcion1( nombre ) {
    const     variable2 = 5;
    console.log('Hola ' + nombre);
    console.log(variable1);
    console.log(variable2);
}


console.log(coche1);
console.log(coche2);