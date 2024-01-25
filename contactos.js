class Contacto {
    id = 0
    nombre = ''
    correo = ''

    constructor(id, nombre, correo){
        this.id = id
        this.nombre = nombre
        this.correo = correo
    }
}

const contacto1 = new Contacto(1, "Luke", "luke@skywalker.com")
const contacto2 = new Contacto(2, "Leia", "leia@organa.com")
const contacto3 = new Contacto(3, "Darth Vader", "Darth@vader.com")
const contacto4 = new Contacto(4, "Rey", "rei@skywalker.com")

let arreglo = []

//Ingresando un nuevo elemento al arreglos

//Insert arreglo
arreglo.push(contacto1)
arreglo.push(contacto2)
arreglo.push(contacto3)

console.log(arreglo)
//Update arreglo
//WHERE
const elemento3 = arreglo.find(elemento => {
    return elemento.id === 3
})
elemento3.nombre = "Anakin skywalker"

console.log(elemento3)
console.log(arreglo)

//Select *
arreglo.forEach(elemento => console.log(elemento))
const idPorDos = arreglo.map(elemento => {
    return elemento.id * 2
})
const idPorDos2 = arreglo.forEach(elemento => {
    return elemento.id * 2
})

//Select * where
const idUnoYTres = arreglo.filter(elemento => elemento.id === 1 || elemento.id === 3)

console.log(idUnoYTres)

//Delete
arreglo = arreglo.filter(elemento => elemento.id !== 1)
console.log(arreglo)


console.log(idPorDos, idPorDos2)


//Tradicional
function Sumar(a,b){
    return a+b
}

const suma = Sumar(1,2)

//Sintaxis de flecha
const SumarFlecha = (a, b) => (a+b)
const suma2 = SumarFlecha(1,2)

console.log(suma, suma2)