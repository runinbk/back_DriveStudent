import express, { Application } from "express";
import cors from "cors";

import db from "../db/connection";

import usuarioRoutes from "../routes/usuario";
import rolRoutes from "../routes/rol";
import vehiculoRoutes from "../routes/vehiculo";
import brevetRoutes from "../routes/brevet";
import prefRoutes from "../routes/preferencias";
import targetaRoutes from "../routes/targeta";
import caracespeRoutes from "../routes/carac_espe";
import rutaRoutes from "../routes/ruta";
import carreraRoutes from "../routes/carrera";
import soliviajeRoutes from "../routes/solicutud_viaje";
import calicomRoutes from "../routes/cali_com";
import pagoRoutes from "../routes/pago";
import puntoRoutes from "../routes/punto";
import authRoutes from "../routes/auth";



class Server {

    private app : Application;
    private port : string;
    private apiPaths = {
        auth:         '/api/auth',
        usuarios:     '/api/usuarios',
        roles:        '/api/roles',
        preferencias: '/api/pref',
        brevet :      '/api/brevet',
        vehiculo:     '/api/vehiculo',
        targeta:      '/api/targeta',
        carac_espe:   '/api/caractespe',
        ruta:         '/api/ruta',
        carrera:      '/api/carrera',
        soliviaje:    '/api/soliviaje',
        califcom:     '/api/califcom',
        pago:         '/api/pago',
        punto:         '/api/punto'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Metodos Iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            console.log('Database ofline');
        }
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta Publica
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use( this.apiPaths.auth, authRoutes ),
        this.app.use( this.apiPaths.usuarios, usuarioRoutes ),
        this.app.use( this.apiPaths.roles, rolRoutes ),
        this.app.use( this.apiPaths.brevet, brevetRoutes ),
        this.app.use( this.apiPaths.preferencias, prefRoutes ),
        this.app.use( this.apiPaths.vehiculo, vehiculoRoutes )
        this.app.use( this.apiPaths.targeta, targetaRoutes ),
        this.app.use( this.apiPaths.carac_espe, caracespeRoutes ),
        this.app.use( this.apiPaths.ruta, rutaRoutes ),
        this.app.use( this.apiPaths.carrera, carreraRoutes ),
        this.app.use( this.apiPaths.soliviaje, soliviajeRoutes ),
        this.app.use( this.apiPaths.califcom, calicomRoutes ),
        this.app.use( this.apiPaths.pago, pagoRoutes ),
        this.app.use( this.apiPaths.punto, puntoRoutes )
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        } )
    }
}

export default Server;