const archivo = require('./funcionesDeTareas')

let arrayTareas = archivo.leerArchivo();

let accion = process.argv[2]

switch (accion) {
    case "listar":
        console.log('Tareas:')
        for (i = 0; i < arrayTareas.length; i++) {
            console.log(
                (i + 1 + '. ' + arrayTareas[i].titulo + ' - ' + arrayTareas[i].estado)
            )
        }
        break;
    case undefined:
        console.log('Tienes que poner una accion')
        console.log('Acciones disponibles: listar')
        break;
    default:
        console.log('No entiendo qué quieres hacer.')
        console.log('Acciones disponibles: listar')
        break;
}