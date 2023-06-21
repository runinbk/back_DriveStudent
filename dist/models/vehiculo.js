"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
class Vehiculo extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Vehiculo.belongsTo(usuario_1.default, { foreignKey: 'id_usuario' });
    }
}
Vehiculo.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    num_placa: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    modelo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    año: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    cap_pasajeros: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    img: {
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
    modelName: "Vehiculo",
    tableName: "vehiculo",
});
exports.default = Vehiculo;
//# sourceMappingURL=vehiculo.js.map