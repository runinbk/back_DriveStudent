import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";

class Targeta extends Model {
    public id!: number;
    public nom_titular!: string;
    public num_targeta!: number;
    public fech_ven!: Date;
    public csv!: string;
    public estado!: boolean;
    public id_usuario!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  static associate() {
    Targeta.belongsTo(Usuario, { foreignKey: 'id_usuario' });
  }
}

Targeta.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom_titular: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      num_targeta: {
          type: DataTypes.NUMBER,
          allowNull: true,
        },
        fech_ven: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        csv: {
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
        modelName: "Targeta",
        tableName: "targeta",
    }
  );
  
  export default Targeta;

