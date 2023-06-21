import { DataTypes, Model } from "sequelize";
import db from "../db/connection";

class Rol extends Model {
  public id!: number;
  public nombre_rol!: string;
  public descripcion! : string;

  // Otras propiedades del modelo...
}

Rol.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_rol: {
      type: DataTypes.STRING,
    },
    descripcion : {
        type:DataTypes.TEXT
    }
  },
  {
    sequelize: db,
    modelName: "Rol",
    tableName: "rols",
  }
);

export default Rol;
