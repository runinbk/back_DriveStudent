"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const targeta_1 = __importDefault(require("./targeta"));
const solicitud_viaje_1 = __importDefault(require("./solicitud_viaje"));
const carrera_1 = __importDefault(require("./carrera"));
class Pago extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Pago.belongsTo(targeta_1.default, { foreignKey: "id_targeta" });
        Pago.belongsTo(solicitud_viaje_1.default, { foreignKey: "id_soli_viaje" });
        Pago.belongsTo(carrera_1.default, { foreignKey: "id_carrera" });
    }
}
Pago.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    costo: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    estado_pago: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    costo_total: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_targeta: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: targeta_1.default,
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
    modelName: "Pago",
    tableName: "pago",
});
exports.default = Pago;
//# sourceMappingURL=pago.js.map