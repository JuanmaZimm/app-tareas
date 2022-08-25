const archivo = require('./funcionesDeTareas')

let arrayTareas = archivo.leerArchivo();

if (process.argv.length < 3) {
    console.log('Atención - Tienes que pasar una acción.')
    console.log('Acciones disponibles: listar')
} else {
    let accion = process.argv[2]

    switch (accion) {
        case "listar":
            console.log('Tareas:')
            for (i = 0; i < arrayTareas.length; i++) {
                console.log(
                    (i + 1 + '. ' + arrayTareas[i].titulo + ' - ' + arrayTareas[i].estado)
                )
            }
            //console.log(arrayTareas)
            break;
        default:
            console.log('No entiendo qué quieres hacer.')
            console.log('Acciones disponibles: listar')
            break;
    }
}
//console.log(arrayTareas[0]);