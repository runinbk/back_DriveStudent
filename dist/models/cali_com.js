"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const solicitud_viaje_1 = __importDefault(require("./solicitud_viaje"));
const carrera_1 = __importDefault(require("./carrera"));
class CaliCom extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        CaliCom.belongsTo(usuario_1.default, { foreignKey: "id_usuario" });
        CaliCom.belongsTo(solicitud_viaje_1.default, { foreignKey: "id_soliviaje" });
        CaliCom.belongsTo(carrera_1.default, { foreignKey: "id_carrera" });
    }
}
CaliCom.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    comentario: {
        type: sequelize_1.DataTypes.STRING,
    },
    calificacion: {
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
    id_soliviaje: {
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
    modelName: "CaliCom",
    tableName: "calificacion_comentario",
});
exports.default = CaliCom;
//# sourceMappingURL=cali_com.js.map