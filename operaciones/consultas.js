import pool from "../config/estudiantes.js";
import {agregarData, eliminarData, mostrarData, selectData, actualizarData} from "../index.js";


const estudiante = process.argv.slice(2);
const opcion=estudiante[0]; 
const nombre =estudiante[1];
let rut= estudiante[2];
const curso=estudiante[3];
const nivel= estudiante[4];
const estudiantes = [];

console.log(estudiante)


const agregarEstudiante= async(nombre,rut,curso,nivel)=>{
    let sql ='insert into estudiantes(nombre, rut , curso, nivel) values ($1,$2,$3,$4)';
    let valores=[nombre, rut, curso, nivel];

    const response= await pool.query(sql, valores);
    console.log('Estudiante agregado a base de datos');
};


const mostrarEstudiante= async()=>{
    let sql ='select * from estudiantes';

    const response= await pool.query(sql);
    console.log(response.rows);
}


const updateEstudiante= async(nombre,rut,curso,nivel)=>{
    let sql ='update estudiantes set nombre=$1, curso=$3, nivel=$4 where rut=$2';
const valores= [nombre, rut, curso, nivel];

    const response= await pool.query(sql, valores);
    console.log(response.rows);
}


const eliminarEstudiante= async(rut)=>{
    let sql='delete from estudiantes where rut=$1'; 
    const valores=[rut]
    const response= await pool.query(sql, valores);
    console.log('El estudiante ha sido eliminado');
} 

const selectEstudiante=async(rut)=>{
    let sql ='select * from estudiantes where rut=$1';
const valores=[rut];
    const response= await pool.query(sql, valores);
    console.log(response.rows);
}


if (opcion === 'add'){
    agregarEstudiante(nombre,rut,curso,nivel);
    agregarData(nombre, rut, curso, nivel);
} else if (opcion === 'show'){
    mostrarEstudiante();
    mostrarData(estudiantes);
} else if ( opcion === 'update'){
    updateEstudiante(nombre,rut,curso,nivel);
    actualizarData(nombre, rut, curso, nivel);
} else if ( opcion === 'delete'){
    rut=estudiante[1]; 
    eliminarEstudiante(rut);
    eliminarData(rut);
} else if (opcion == 'select'){
    rut=estudiante[1]; //
    selectEstudiante(rut);
    selectData(rut);
} else {
    console.log('Función o acción no existente')
}