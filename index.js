import fs from "fs";

const agregarData= (nombre, rut, curso, nivel)=>{
    const estudianteAM = {
        nombre,
        rut,
        curso,
        nivel,
    }; 
    let estudiantes = [];

    try {
        const data = fs.readFileSync("estudiantes.json", "utf8");
        const estudiantesData = JSON.parse(data);
        if (estudiantesData.estudiantes) {
          estudiantes = estudiantesData.estudiantes;
        } 
        estudiantes.push(estudianteAM);
        fs.writeFileSync("estudiantes.json", JSON.stringify({ estudiantes }));
        console.log("Usuario almacenado con éxito");
      } catch (error) {
        console.log("No se pudo leer el archivo estudiantes.json: " + error.message);
      }
      return agregarData
};

const eliminarData=(rut)=>{
  const estudianteAM={
    rut,
  }
  let estudiantes=[]
  try {
    const data = fs.readFileSync("estudiantes.json", "utf8");
    const estudiantesData = JSON.parse(data);
    estudiantes = estudiantes.filter(estudiante => estudiante.rut !== rut);
    fs.writeFileSync("estudiantes.json", JSON.stringify({ estudiantes }));
    console.log("Usuario eliminado de estudiantes.json");
  } catch (error) {
    console.log(`No se pudo eliminar al estudiante con el rut ${rut}: ` + error.message);
  }
}

const mostrarData=()=>{

let estudiantes = [];

try {
    const data = fs.readFileSync("estudiantes.json", "utf8");
    const estudiantesData = JSON.parse(data);
    if (estudiantesData.estudiantes) {
      estudiantes = estudiantesData.estudiantes;
    } 
    estudiantes=estudiantes.map;
    console.log(estudiantesData);
  } catch (error) {
    console.log("No se pudo leer el archivo estudiantes.json: " + error.message);
  }
  return mostrarData
}



const selectData=(rut)=>{
let estudiantes = [];

try {
    const data = fs.readFileSync("estudiantes.json", "utf8");
    const estudiantesData = JSON.parse(data);
    if (estudiantesData.estudiantes) {
      estudiantes = estudiantesData.estudiantes;
    } 
    estudiantes = estudiantes.filter(estudiante => estudiante.rut === rut);
    console.log(estudiantes);
  } catch (error) {
    console.log("No se pudo leer el archivo estudiantes.json: " + error.message);
  }
  return selectData
}

const actualizarData=(nombre, rut, curso, nivel)=>{
  const estudianteAM={
    nombre,
    rut,
    curso,
    nivel,
  }
  let estudiantes=[]
  try {
    const data = fs.readFileSync("estudiantes.json", "utf8");
    const estudiantesData = JSON.parse(data);
    if (estudiantesData.estudiantes) {
      estudiantes = estudiantesData.estudiantes;
    } 
    // Encontrar el estudiante a actualizar
    const estudianteActualizar = estudiantes.find(estudiante => estudiante.rut === rut);

    // Si se encontró al estudiante
    if (estudianteActualizar) {
      // Actualizar las propiedades del estudiante
      estudianteActualizar.nombre = nombre;
      estudianteActualizar.curso = curso;
      estudianteActualizar.nivel = nivel;
    fs.writeFileSync("estudiantes.json", JSON.stringify({ estudiantes }));
    console.log("Datos actualizados");
    }
  } catch (error) {
    console.log(`No se pudo actualizar los datos de ${rut}: ` + error.message);
  }
  return actualizarData
}



export {agregarData, eliminarData, mostrarData, selectData, actualizarData};
