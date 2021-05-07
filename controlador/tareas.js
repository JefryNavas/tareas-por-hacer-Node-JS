const fs = require("fs");
const colors = require("colors");
let tareasPorhacer = [];

const guardarDatos = () => {
    let data = JSON.stringify(tareasPorhacer);
    fs.writeFile("./data/datos.json", data, (err) => {
        if (err) {
            console.log("Error al guardar el archivo", err);
        }
    })
}
const leerDatos = () => {
    try {
        tareasPorhacer = require("../data/datos.json");
    } catch (error) {
        tareasPorhacer = []
    }

}
const crear = (descripcion) => {
    leerDatos();

    let index = tareasPorhacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index > 0) {
        return false
    }
    let tarea = {
        descripcion,
        completado: false
    }

    tareasPorhacer.push(tarea);
    guardarDatos();
    return tarea;
}
const listar = () => {
    leerDatos();
    result = [];
    console.log("=====================================");
    console.log("=       Tareas por hacer           =");
    console.log("=====================================");
    for (let i = 0; i < tareasPorhacer.length; i++) {
        if (tareasPorhacer[i].completado == true) {
            console.log("--------------------------------");
            console.log("Tarea: ", i + 1);
            console.log((tareasPorhacer[i].descripcion));
            console.log("Estado: Tarea completada".green);
        } else {
            console.log("--------------------------------");
            console.log("Tarea: ", i + 1);
            console.log((tareasPorhacer[i].descripcion));
            console.log("Estado: Tarea no completada".red);
        }

    }
}
const actualizar = (descripcion, completado) => {
    leerDatos();
    let index = tareasPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        tareasPorhacer[index].completado = completado;
        guardarDatos();
        return true;
    } else {
        return false;
    }
}
const eliminar = (descripcion) => {
    leerDatos();
    let index = tareasPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        tareasPorhacer.splice(index, 1);
        guardarDatos();
        return true;
    } else {
        return false;
    }

}
module.exports = {
    crear,
    listar,
    actualizar,
    eliminar
}