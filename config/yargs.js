const opts = {
    descripcion:
    {    
        demand: true,    
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado:
    {
        alias: 'c', 
        completdo: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear','Crea un elemento por hacer',opts)
    .command('actualizar','Actualiza el estado ha completado de una tarea',opts)  
    .command('borrar','Elimina un elemento',opts)      
    .help()
    .argv;

    module.exports = {
        argv
    };