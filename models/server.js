const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        //puerto configuracion enviroment
        this.port = process.env.PORT;

        //Endpoint
        this.usersPath = '/api/users';

        //Middlewares
        this.middlewares();


        //rutas
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Escuchando puerto ${this.port}`);
        });
    }
}

module.exports = Server;