import {Estudiante} from "../interfaces/Estudiante"
import {Comida} from "../interfaces/Comida"

//tipo de datos primitivos
const nombre:string="Luisa Herrera"
const edad:number=40
let estatura:number=1.70
const yaDesayuno:boolean=false
let deportes:string[]=["futbol", "tenis", "baloncesto"]
let notas:number[]=[1,2,3,4]

//creando Objetos
let estudiante:Estudiante={
    nombre:"Luisa",
    apellido:"",
    edad:9,
    estatura:1.6,
    tieneGripa:false,
    comidasFavoritas:[
        { 
            nombre:"frijoles", 
            tiempo:1 },
        {
            nombre:"pizza",
            tiempo:0.5, 
            sepuedecomerfrio:true}
        ],
    materias:[
        {
            nombre:"Programacion avanzada",
            profesor:"Juan Jose",
            dia:"Viernes"
        }]    
}

let comidas:Comida={
    nombre:"Arroz con Pollo",
    tiempo:1,
    sepuedecomerfrio:true
}


