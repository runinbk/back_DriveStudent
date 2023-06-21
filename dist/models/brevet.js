"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
class Brevet extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Brevet.belongsTo(usuario_1.default, { foreignKey: 'id_usuario' });
    }
}
Brevet.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    numero: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fech_emi: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    fech_ven: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    img_frontal: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    img_reverso: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: usuario_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Brevet",
    tableName: "brevet",
});
exports.default = Brevet;
//# sourceMappingURL=brevet.js.map