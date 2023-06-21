"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const ruta_1 = __importDefault(require("./ruta"));
const solicitud_viaje_1 = __importDefault(require("./solicitud_viaje"));
const carrera_1 = __importDefault(require("./carrera"));
class Punto extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Punto.belongsTo(ruta_1.default, { foreignKey: "id_ruta" });
        Punto.belongsTo(solicitud_viaje_1.default, { foreignKey: "id_soli_viaje" });
        Punto.belongsTo(carrera_1.default, { foreignKey: "id_carrera" });
    }
}
Punto.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    lat: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    long: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    nom_lugar: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_ruta: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: ruta_1.default,
            key: "id",
        },
    },
    id_soli_viaje: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: solicitud_viaje_1.default,
            key: "id",
        },
    },
    id_carrera: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: carrera_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Punto",
    tableName: "punto",
});
exports.default = Punto;
//# sourceMappingURL=punto.js.map