/* Estás a cargo de las velas de cumpleaños para el cumpleañero y decidiste que la
torta va a tener una vela por cada año de su edad total. Solo van a poder soplar las
velas más altas de la torta.
Tu objetivo es contar cuántas son las más altas de la torta
Ejemplo candles = [4, 4, 1, 3] */

const candles = [4,4,1,2];

const tallest = Math.max(...candles);

const velas = candles.filter(num => num == tallest).length
console.log(velas);