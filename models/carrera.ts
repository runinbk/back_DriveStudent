import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";

class Carrera extends Model {
  public id!: number;
  public estado_carrera!: boolean;
  public hora_p!: string;
  public hora_d!: string;
  public estado!: boolean;
  public id_pasajero!: number; // Llave foránea
  public id_conductor!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    Carrera.belongsTo(Usuario, { foreignKey: "id_pasajero" });
    Carrera.belongsTo(Usuario, { foreignKey: "id_conductor" });
  }
}

Carrera.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado_carrera: {
      type: DataTypes.BOOLEAN,
    },
    hora_p: {
      type: DataTypes.STRING,
    },
    hora_d: {
      type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_pasajero: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "id",
      },
    },
    id_conductor: {
        type: DataTypes.INTEGER,
        references: {
          model: Usuario,
          key: "id",
        },
      },
  },
  {
    sequelize: db,
    modelName: "Carrera",
    tableName: "carrera",
  }
);

export default Carrera;

