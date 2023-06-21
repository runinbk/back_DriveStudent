import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";

class Brevet extends Model {
    public id!: number;
    public numero!: string;
    public fech_emi!: Date | null;
    public fech_ven!: Date | null;
    public categoria!: string | null;
    public img_frontal!: string | null;
    public img_reverso!: string | null;
    public estado!: boolean | null;
    public id_usuario!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  static associate() {
    Brevet.belongsTo(Usuario, { foreignKey: 'id_usuario' });
  }
}

Brevet.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      numero: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fech_emi: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      fech_ven: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img_frontal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img_reverso: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      estado : {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Usuario,
          key: 'id',
        },
      },
    },
    {
        sequelize: db,
        modelName: "Brevet",
        tableName: "brevet",
    }
  );
  
  export default Brevet;

