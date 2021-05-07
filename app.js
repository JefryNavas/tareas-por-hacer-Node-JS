const { argv } = require("./config/yargs");
const { crear, listar, actualizar, eliminar } = require("./controlador/tareas")
const colors = require("colors")
let comando = argv._[0];

switch (comando) {
    case "crear":
        console.log("Creando una tarea...".yellow);
        let tarea = crear(argv.descripcion);
        if (tarea == false) {
            console.log("La tarea ingresada ya existe".red);
        } else {
            console.log("tarea: ", tarea.descripcion);
            console.log("Tarea Guardada Correctamente".green);
        }

        break;
    case "listar":
        console.log("Listando tareas...".yellow);
        listar();
        break;

    case "actualizar":
        console.log("Actualizando la tarea...".yellow);
        let res = actualizar(argv.descripcion, argv.completado)
        if (res) console.log("Tarea actualizada correctamente".green);
        else console.log("No se ha encontrado la tarea".yellow);
        break;
    case "eliminar":
        console.log("Eliminando tarea...".yellow);
        let result = eliminar(argv.descripcion);
        if (result) console.log("Tarea eliminada correctamente".green);
        else console.log("No se ha encontrado la tarea".yellow);
        break;

    default:
        console.log("Comando no válido");
        break;
}