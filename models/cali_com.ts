import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";
import SoliViaje from "./solicitud_viaje";
import Carrera from "./carrera";

class CaliCom extends Model {
  public id!: number;
  public comentario!: string;
  public calificacion!: number;
  public estado!: boolean;
  public id_usuario!: number | null; // Llave foránea
  public id_soliviaje!: number | null; // Llave foránea
  public id_carrera!: number |null; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  public static associate() {
    CaliCom.belongsTo(Usuario, { foreignKey: "id_usuario" });
    CaliCom.belongsTo(SoliViaje, { foreignKey: "id_soliviaje" });
    CaliCom.belongsTo(Carrera, { foreignKey: "id_carrera" });
  }
}

CaliCom.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comentario: {
      type: DataTypes.STRING,
    },
    calificacion: {
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
    id_soliviaje: {
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
    modelName: "CaliCom",
    tableName: "calificacion_comentario",
  }
);

export default CaliCom;

