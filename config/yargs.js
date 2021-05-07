const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripcion de la tarea"
}
const completado = {
    default: true,
    alias: "c",
    desc: "Marca como completada o pentiende una tarea"
}

const argv = require("yargs")
    .command("crear", "Crear una nueva tarea", {
        descripcion
    })
    .command("listar", "Muestra todas las tareas")
    .command("actualizar", "Actualiza una tarea", {
        descripcion,
        completado
    })
    .command("eliminar", "Eliminar tarea", {
        descripcion
    })
    .help()
    .argv;

module.exports = { argv }