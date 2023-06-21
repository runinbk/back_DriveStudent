"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const rol_1 = __importDefault(require("../routes/rol"));
const vehiculo_1 = __importDefault(require("../routes/vehiculo"));
const brevet_1 = __importDefault(require("../routes/brevet"));
const preferencias_1 = __importDefault(require("../routes/preferencias"));
const targeta_1 = __importDefault(require("../routes/targeta"));
const carac_espe_1 = __importDefault(require("../routes/carac_espe"));
const ruta_1 = __importDefault(require("../routes/ruta"));
const carrera_1 = __importDefault(require("../routes/carrera"));
const solicutud_viaje_1 = __importDefault(require("../routes/solicutud_viaje"));
const cali_com_1 = __importDefault(require("../routes/cali_com"));
const pago_1 = __importDefault(require("../routes/pago"));
const punto_1 = __importDefault(require("../routes/punto"));
const auth_1 = __importDefault(require("../routes/auth"));
class Server {
    constructor() {
        this.apiPaths = {
            auth: '/api/auth',
            usuarios: '/api/usuarios',
            roles: '/api/roles',
            preferencias: '/api/pref',
            brevet: '/api/brevet',
            vehiculo: '/api/vehiculo',
            targeta: '/api/targeta',
            carac_espe: '/api/caractespe',
            ruta: '/api/ruta',
            carrera: '/api/carrera',
            soliviaje: '/api/soliviaje',
            califcom: '/api/califcom',
            pago: '/api/pago',
            punto: '/api/punto'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Metodos Iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Database online');
            }
            catch (error) {
                console.log('Database ofline');
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta Publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.auth, auth_1.default),
            this.app.use(this.apiPaths.usuarios, usuario_1.default),
            this.app.use(this.apiPaths.roles, rol_1.default),
            this.app.use(this.apiPaths.brevet, brevet_1.default),
            this.app.use(this.apiPaths.preferencias, preferencias_1.default),
            this.app.use(this.apiPaths.vehiculo, vehiculo_1.default);
        this.app.use(this.apiPaths.targeta, targeta_1.default),
            this.app.use(this.apiPaths.carac_espe, carac_espe_1.default),
            this.app.use(this.apiPaths.ruta, ruta_1.default),
            this.app.use(this.apiPaths.carrera, carrera_1.default),
            this.app.use(this.apiPaths.soliviaje, solicutud_viaje_1.default),
            this.app.use(this.apiPaths.califcom, cali_com_1.default),
            this.app.use(this.apiPaths.pago, pago_1.default),
            this.app.use(this.apiPaths.punto, punto_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map