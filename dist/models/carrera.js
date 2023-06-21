"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
class Carrera extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Carrera.belongsTo(usuario_1.default, { foreignKey: "id_pasajero" });
        Carrera.belongsTo(usuario_1.default, { foreignKey: "id_conductor" });
    }
}
Carrera.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    estado_carrera: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    hora_p: {
        type: sequelize_1.DataTypes.STRING,
    },
    hora_d: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_pasajero: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: usuario_1.default,
            key: "id",
        },
    },
    id_conductor: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: usuario_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Carrera",
    tableName: "carrera",
});
exports.default = Carrera;
//# sourceMappingURL=carrera.js.map