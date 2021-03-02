const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
    const { q, nombre, api } = req.query;

    res.json({
        message: 'getAPI-Controlador',
        q,
        nombre,
        api
    });
};

const usersPatch = (req = request, res = response) => {
    res.json({
        message: 'PatchAPI-Controlador'
    });
};


const usersPut = (req = request, res = response) => {

    const { userId } = req.params;
    res.json({
        message: 'PutAPI-Controlador',
        userId
    });
};

const usersPost = (req = request, res = response) => {
    const { Nombre, Edad } = req.body;
    res.json({
        message: 'POSTAPI-Controlador',
        Nombre,
        Edad
    });
};

const usersDelete = (req, res = response) => {
    res.json({
        message: 'DeleteAPI-Controlador'
    });
};




module.exports = {
    usersGet,
    usersPatch,
    usersPut,
    usersPost,
    usersDelete
};