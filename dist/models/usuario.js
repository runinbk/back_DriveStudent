"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const rol_1 = __importDefault(require("./rol"));
class Usuario extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Usuario.belongsTo(rol_1.default, { foreignKey: "id_rol" });
    }
}
Usuario.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    correo: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    },
    nro_registro: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    celular: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    google: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    sexo: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_rol: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: rol_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Usuario",
    tableName: "usuarios",
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map