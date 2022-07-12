const sumar = require('./operacionesBasicas/sumar.js');
const restar = require('./operacionesBasicas/restar.js');
const multiplicar = require('./operacionesBasicas/multiplicar.js');
const dividir = require('./operacionesBasicas/dividir.js');

let resultadoSuma = sumar(5,3);
let resultadoResta = restar(10,6);
let resultadoMultiplicaion = multiplicar(3,7);
let resultadoDivision = dividir(15,3);

console.log(`El resultado de la suma es: ${resultadoSuma}`);
console.log(`El resultado de la resta es: ${resultadoResta}`);
console.log(`El resultado de la multiplicación es: ${resultadoMultiplicaion}`);
console.log(`El resultado de la división es: ${resultadoDivision}`);
