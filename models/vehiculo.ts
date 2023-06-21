import { DataTypes, Model } from "sequelize";
import db from "../db/connection";
import Usuario from "./usuario";

class Vehiculo extends Model {
    public id!: number;
    public num_placa!: string;
    public modelo!: string;
    public año!: number;
    public cap_pasajeros!: number;
    public img!: string | null;
    public estado!: boolean;
    public id_usuario!: number; // Llave foránea

  // Otras propiedades del modelo...

  // Definición de las asociaciones
  static associate() {
    Vehiculo.belongsTo(Usuario, { foreignKey: 'id_usuario' });
  }
}

Vehiculo.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      num_placa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modelo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      año: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cap_pasajeros: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      img: {
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
        modelName: "Vehiculo",
        tableName: "vehiculo",
    }
  );
  
  export default Vehiculo;

