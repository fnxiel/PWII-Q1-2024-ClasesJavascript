//Funciones
function HolaMundo(persona){
    console.log(persona)
}

//Clases de programacion
class Persona{
    //Propiedades
    nombre = ''
    apellido = ''
    edad = 0
    fechaNacimiento
    #__puntaje = 0
    get puntaje(){
        return this.#__puntaje
    }

    //Constructor
    constructor(nombre, apellido, edad){
        console.log("Se esta instanciando una nueva persona con nombre", nombre)
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.fechaNacimiento = new Date()
    }

    //Métodos sin valor de retorno
    hablar(){
        console.log("Hola me llamo", this.nombre, this.apellido)
    }

    ganarPuntos(valor){
        //Es usuario administrador
        //Si esta matriculado
        //Validaciones
        this.__puntaje += valor
        this.hablar()
    }

    //Métodos con valor de retorno
    presentarNotas(){
        return this.nombre + " tiene un puntaje de " + this.puntaje
    }

}

//Objetos
const personaObj1 = {
    Nombree: '',
    apellido: '',
    edad: 0,
    saludar: HolaMundo
}

const personaObj2 = {
    Nombree: '',
    Apellido: '',
    edad: 0,
    saludar: function(){console.log("hola")}
}
const personaObj3 = {
    Nombree: '',
    apellido: '',
    Edad: 0
}

//Instancia de clase
const persona = new Persona("Luke", "Skywalker", 25);
const persona1 = new Persona("Leia", "Organa", 25);
const persona2 = new Persona("Darth", "Vader");
const persona4 = new Persona();

persona.nombre = 'Luke Skywalker'

persona.ganarPuntos(10)
persona1.ganarPuntos(25)

persona.puntaje = 100

const notasDeLaPersona = persona.presentarNotas()
console.log(notasDeLaPersona)


HolaMundo(persona)
HolaMundo(persona1)
persona.hablar()
persona1.hablar()

