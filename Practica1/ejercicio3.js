/* Dado un arreglo de objetos de países que poseen dos propiedades: name y
population, ordenarlos de mayor a menor en cuanto a su población utilizando la
función de arreglo sort().
Ejemplo de un objeto del arreglo: { name: Argentina, population: 458100000} */

let countries = [
    { name: "Argentina", population: 458100000},
    {name: "brasil", population: 111111},
    {name: "uruguay", population: 2000000000000000}
    ]


const order = countries.sort((a,b) => b.population -a.population)
console.log(order);