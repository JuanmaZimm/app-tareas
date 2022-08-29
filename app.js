const archivo = require('./funcionesDeTareas')

let arrayTareas = archivo.leerArchivo();

let accion = process.argv[2]

switch (accion) {
    case "listar":
        console.log('Tareas:')
        arrayTareas.forEach(function (element, index) {
            console.log((index + 1) + '. ' + element.titulo + ' - ' + element.estado)
        });
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