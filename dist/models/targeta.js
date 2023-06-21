"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
class Targeta extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Targeta.belongsTo(usuario_1.default, { foreignKey: 'id_usuario' });
    }
}
Targeta.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom_titular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    num_targeta: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
    fech_ven: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    csv: {
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
    modelName: "Targeta",
    tableName: "targeta",
});
exports.default = Targeta;
//# sourceMappingURL=targeta.js.map