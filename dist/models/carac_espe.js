"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const vehiculo_1 = __importDefault(require("./vehiculo"));
class Carac_Espe extends sequelize_1.Model {
    // Otras propiedades del modelo...
    // Definición de las asociaciones
    static associate() {
        Carac_Espe.belongsTo(vehiculo_1.default, { foreignKey: "id_vehiculo" });
    }
}
Carac_Espe.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    caracteristica: {
        type: sequelize_1.DataTypes.TEXT,
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    id_vehiculo: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: vehiculo_1.default,
            key: "id",
        },
    },
}, {
    sequelize: connection_1.default,
    modelName: "Carac_Espe",
    tableName: "carac_espe",
});
exports.default = Carac_Espe;
//# sourceMappingURL=carac_espe.js.map