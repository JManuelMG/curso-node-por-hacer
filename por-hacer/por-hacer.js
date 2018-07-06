const fs = require('fs');

let ListadoPorHacer = [];

const guardarDB = () =>
{
    let data = JSON.stringify(ListadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo guardar'.err);            
    });
}

const cargarDB = () =>
{
    try {
        ListadoPorHacer = require('../db/data.json');   
    }catch(error)
    {
        ListadoPorHacer = []
    }
    
    //console.log(ListadoPorHacer);
}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB();
    ListadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = ()  => {
    cargarDB();
    return ListadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = ListadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0)
    {
        ListadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    else
    {
        return false;
    }
}

const borrar = (descripcion) => 
{
    cargarDB();

    let Aux = [];
    let index = ListadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >=0)
    {

        for(let i = 0; i < ListadoPorHacer.length;i++)
        {
            if(i !== index)
            {
                Aux.push(ListadoPorHacer[i]);
            }
        }
        ListadoPorHacer = [];
        ListadoPorHacer = Aux;
        guardarDB();
        return true;
    }
    else
    {

        return false;
    }
}

module.exports = {
    crear,getListado,actualizar,borrar
};