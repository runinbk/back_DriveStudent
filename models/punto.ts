import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Ruta from "./ruta";
import SoliViaje from "./solicitud_viaje";
import Carrera from "./carrera";

class Punto extends Model {
  public id!: number;
  public lat!: number;
  public long!: number;
  public nom_lugar!: string;
  public estado!: boolean;
  public id_ruta!: number | null; // Llave foránea
  public id_soli_viaje!: number | null; // Llave foránea
  public id_carrera!: number | null; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    Punto.belongsTo(Ruta, { foreignKey: "id_ruta" });
    Punto.belongsTo(SoliViaje, { foreignKey: "id_soli_viaje" });
    Punto.belongsTo(Carrera, { foreignKey: "id_carrera" });
  }
}

Punto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lat: {
      type: DataTypes.DOUBLE,
    },
    long: {
      type: DataTypes.DOUBLE,
    },
    nom_lugar: {
        type: DataTypes.STRING,
      },
    estado: {
        type: DataTypes.BOOLEAN,
    },
    id_ruta: {
      type: DataTypes.INTEGER,
      references: {
        model: Ruta,
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
    modelName: "Punto",
    tableName: "punto",
  }
);

export default Punto;

