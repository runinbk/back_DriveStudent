import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Vehiculo from "./vehiculo";

class Carac_Espe extends Model {
  public id!: number;
  public caracteristica!: string;
  public estado!: boolean;
  public id_vehiculo!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    Carac_Espe.belongsTo(Vehiculo, { foreignKey: "id_vehiculo" });
  }
}

Carac_Espe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    caracteristica: {
      type: DataTypes.TEXT,
    },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_vehiculo: {
      type: DataTypes.INTEGER,
      references: {
        model: Vehiculo,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Carac_Espe",
    tableName: "carac_espe",
  }
);

export default Carac_Espe;

