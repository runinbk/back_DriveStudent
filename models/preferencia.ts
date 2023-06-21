import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";

class Preferencia extends Model {
  public id!: number;
  public preferencia! : string;
  public estado! : boolean;
  public id_usuario!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    Preferencia.belongsTo(Usuario, { foreignKey: "id_usuario" });
  }
}

Preferencia.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    preferencia: {
        type: DataTypes.TEXT,
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
  },
  {
    sequelize: db,
    modelName: "Preferencia",
    tableName: "preferencias",
  }
);

export default Preferencia;

