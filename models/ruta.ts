import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";

class Ruta extends Model {
  public id!: number;
  public strpolyline!: string;
  public hora_p!: string;
  public estado_cap!: boolean;
  public cant_pasajero!: number;
  public estado!: boolean;
  public id_usuario!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    Ruta.belongsTo(Usuario, { foreignKey: "id_usuario" });
  }
}

Ruta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    strpolyline: {
      type: DataTypes.STRING,
    },
    hora_p: {
      type: DataTypes.STRING,
    },
    estado_cap: {
      type: DataTypes.BOOLEAN,
    },
    cant_pasajero: {
        type: DataTypes.NUMBER,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: Ruta,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Ruta",
    tableName: "ruta",
  }
);

export default Ruta;

