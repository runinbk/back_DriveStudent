import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";
import Ruta from "./ruta";

class SoliViaje extends Model {
  public id!: number;
  public strpolyline!: string;
  public hora_p!: string;
  public cant_pasajeros!: number;
  public estado!: boolean;
  public id_usuario!: number; // Llave foránea
  public id_ruta!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    SoliViaje.belongsTo(Usuario, { foreignKey: "id_usuario" });
    SoliViaje.belongsTo(Ruta, { foreignKey: "id_ruta" });
  }
}

SoliViaje.init(
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
    cant_pasajeros: {
      type: DataTypes.INTEGER,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuario,
        key: "id",
      },
    },
    id_ruta: {
        type: DataTypes.INTEGER,
        references: {
          model: Ruta,
          key: "id",
        },
      },
  },
  {
    sequelize: db,
    modelName: "SoliViaje",
    tableName: "solicitud_viaje",
  }
);

export default SoliViaje;

