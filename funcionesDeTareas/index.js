const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        let tareas = fs.readFileSync(this.archivo, 'utf-8');
        return JSON.parse(tareas);
    },
    escribirJSON: function (tareas) { //escribe un array de tareas en el archivo
        let tareasEnJSON = JSON.stringify(tareas);
        fs.writeFileSync(this.archivo, tareasEnJSON);
    },
    guardarTarea: function (tarea) { //guarda una nueva tarea que recibe
        let archivo = this.leerArchivo();
        archivo.push(tarea);
        this.escribirJSON(archivo);
    },
    filtrarPorEstado: function (estado) {
        let archivo = this.leerArchivo();
        let tareasFiltradas = archivo.filter(function (elemento) {
            return elemento.estado == estado;
        })
        return tareasFiltradas;
    }
}

module.exports = archivoTareas