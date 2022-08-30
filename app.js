const archivo = require('./funcionesDeTareas')

let arrayTareas = archivo.leerArchivo();

let accion = process.argv[2]

function Tarea(titulo) {
    this.titulo = titulo;
    this.estado = "Pendiente";
}

switch (accion) {
    case "listar": // imprime todas las tareas
        console.log('Tareas:');
        console.log("--------------------")
        arrayTareas.forEach(function (element, index) {
            console.log((index + 1) + '. ' + element.titulo + ' - ' + element.estado)
        });
        console.log("--------------------")
        break;
    case "crear": // agrega una tarea al tareas.json
        let tituloTarea = process.argv[3]
        let tareaNueva = new Tarea(tituloTarea)
        archivo.guardarTarea(tareaNueva)
        console.log("Nueva tarea creada:")
        console.log("--------------------")
        console.log(tareaNueva.titulo + ' -> ' + tareaNueva.estado)
        console.log("--------------------")
        break;
    case 'filtrar': // imprime las tareas que cumplen con el estado enviado
        let estado = process.argv[3]
        let tareasFiltradas = archivo.filtrarPorEstado(estado)
        console.log('Tareas ' + estado)
        console.log("--------------------")
        tareasFiltradas.forEach(function (element, index) {
            console.log((index + 1) + '. ' + element.titulo)
        });
        console.log("--------------------")
        break;
    case undefined: // mensaje de error si solo se manda node app.js
        console.log("--------------------")
        console.log('Tienes que poner una accion')
        console.log('Acciones disponibles: listar')
        console.log("--------------------")
        break;
    default: // mensaje de error si se manda un comando desconocido.
        console.log("--------------------")
        console.log('No entiendo qué quieres hacer.')
        console.log('Acciones disponibles: listar')
        console.log("--------------------")
        break;
}