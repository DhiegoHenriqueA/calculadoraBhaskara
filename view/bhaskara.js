import {bhaskara, delta}from './js/calculadora.js'

exports.calcular = (a,b,c) => {
    resultDelta = delta(a,b,c);

    resultBhaskara = bhaskara(a,b,c, resultDelta);
}