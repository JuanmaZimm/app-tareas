const archivo = require('./funcionesDeTareas')

let arrayTareas = archivo.leerArchivo();

let accion = process.argv[2]

function Tarea(titulo) {
    this.titulo = titulo;
    this.estado = "Pendiente"
}

switch (accion) {
    case "listar":
        console.log('Tareas:')
        arrayTareas.forEach(function (element, index) {
            console.log((index + 1) + '. ' + element.titulo + ' - ' + element.estado)
        });
        break;
    case "crear":
        let tituloTarea = process.argv[3]
        let tareaNueva = new Tarea(tituloTarea)
        archivo.guardarTarea(tareaNueva)
        console.log("Creando:")
        console.log('Tarea: ' + tareaNueva.titulo)
        console.log('Estado: ' + tareaNueva.estado)
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