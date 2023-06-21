"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const ruta_1 = __importDefault(require("./ruta"));
class SoliViaje extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        SoliViaje.belongsTo(usuario_1.default, { foreignKey: "id_usuario" });
        SoliViaje.belongsTo(ruta_1.default, { foreignKey: "id_ruta" });
    }
}
SoliViaje.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    strpolyline: {
        type: sequelize_1.DataTypes.STRING,
    },
    hora_p: {
        type: sequelize_1.DataTypes.STRING,
    },
    cant_pasajeros: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: usuario_1.default,
            key: "id",
        },
    },
    id_ruta: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: ruta_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "SoliViaje",
    tableName: "solicitud_viaje",
});
exports.default = SoliViaje;
//# sourceMappingURL=solicitud_viaje.js.map