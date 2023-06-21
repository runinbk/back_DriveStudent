"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
class Preferencia extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Preferencia.belongsTo(usuario_1.default, { foreignKey: "id_usuario" });
    }
}
Preferencia.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    preferencia: {
        type: sequelize_1.DataTypes.TEXT,
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
}, {
    sequelize: connection_1.default,
    modelName: "Preferencia",
    tableName: "preferencias",
});
exports.default = Preferencia;
//# sourceMappingURL=preferencia.js.map