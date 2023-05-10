import {Comida} from "../interfaces/Comida"
import {Materias} from "../interfaces/Materias"

export interface Estudiante{
    nombre:string,
    apellido:string,
    edad:number,
    estatura:number,
    tieneGripa?:boolean,
    comidasFavoritas?:Comida[],
    materias:Materias[]
}

