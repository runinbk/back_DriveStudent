import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Targeta from "./targeta";
import SoliViaje from "./solicitud_viaje";
import Carrera from "./carrera";

class Pago extends Model {
  public id!: number;
  public costo!: number;
  public estado_pago!: boolean;
  public costo_total!: number;
  public estado!: boolean;
  public id_targeta!: number | null; // Llave foránea
  public id_soli_viaje!: number | null; // Llave foránea
  public id_carrera!: number | null; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    Pago.belongsTo(Targeta, { foreignKey: "id_targeta" });
    Pago.belongsTo(SoliViaje, { foreignKey: "id_soli_viaje" });
    Pago.belongsTo(Carrera, { foreignKey: "id_carrera" });
  }
}

Pago.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    costo: {
      type: DataTypes.FLOAT,
    },
    estado_pago: {
      type: DataTypes.BOOLEAN,
    },
    costo_total: {
        type: DataTypes.FLOAT,
      },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_targeta: {
      type: DataTypes.INTEGER,
      references: {
        model: Targeta,
        key: "id",
      },
    },
    id_soli_viaje: {
      type: DataTypes.INTEGER,
      references: {
        model: SoliViaje,
        key: "id",
      },
    },
    id_carrera: {
      type: DataTypes.INTEGER,
      references: {
        model: Carrera,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "Pago",
    tableName: "pago",
  }
);

export default Pago;

