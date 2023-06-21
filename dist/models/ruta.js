"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
class Ruta extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Ruta.belongsTo(usuario_1.default, { foreignKey: "id_usuario" });
    }
}
Ruta.init({
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
    estado_cap: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    cant_pasajero: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Ruta,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Ruta",
    tableName: "ruta",
});
exports.default = Ruta;
//# sourceMappingURL=ruta.js.map