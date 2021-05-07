const { argv } = require("./config/yargs");
const { crear, listar, actualizar, eliminar } = require("./controlador/tareas")

let comando = argv._[0];

switch (comando) {
    case "crear":
        console.log("Creando una tarea...");
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        console.log("Tarea Guardada");
        break;
    case "listar":
        console.log("Listando tareas...");
        listar();
        break;

    case "actualizar":
        console.log("Actualizando la tarea...");
        let res = actualizar(argv.descripcion, argv.completado)
        if (res) console.log("Tarea actualizada correctamente");
        else console.log("No se ha encontrado la tarea");
        break;
    case "eliminar":
        console.log("Eliminando tarea...");
        let result = eliminar(argv.descripcion);
        if (result) console.log("Tarea eliminada correctamente");
        else console.log("No se ha encontrado la tarea");
        break;

    default:
        console.log("Comando no válido");
        break;
}