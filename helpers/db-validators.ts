import User from "../models/usuario";
import Role from "../models/rol";
import Brevet from "../models/brevet";
import Vehiculo from "../models/vehiculo";
import Targeta from "../models/targeta";

export const isRoleValue = async (role: string) => {
  try {
    const existRole = await Role.findOne({ where: { role: role } });
    if (!existRole) {
      throw new Error(`El rol ${role} no está registrado en la base de datos`);
    }
  } catch (error) {
    throw new Error(`Error al verificar el rol: ${error}`);
  }
};

export const isEmailExist = async (correo: string) => {
  try {
    const existEmail = await User.findOne({ where: { correo: correo } });
    if (existEmail) {
      throw new Error(`El correo "${correo}" ya está registrado`);
    }
  } catch (error) {
    throw new Error(`Error al verificar el correo: ${error}`);
  }
};

export const isUserForID = async (id: string) => {
  try {
    const existUserID = await User.findByPk(id);
    if (!existUserID) {
      throw new Error(`El ID ${id} no existe`);
    }
  } catch (error) {
    throw new Error(`Error al verificar el ID: ${error}`);
  }
};

export const isNumBrevetExist = async (numero: string) => {
    try {
      const existEmail = await Brevet.findOne({ where: { numero: numero } });
      if (existEmail) {
        throw new Error(`El numero de Brevet  "${numero}" ya está registrado`);
      }
    } catch (error) {
      throw new Error(`Error al verificar el numero de Brevet: ${error}`);
    }
  };

export const isPlacaExist = async (num_placa: string) => {
    try {
        const existEmail = await Vehiculo.findOne({ where: { num_placa: num_placa } });
        if (existEmail) {
        throw new Error(`El numero de Brevet  "${num_placa}" ya está registrado`);
        }
    } catch (error) {
        throw new Error(`Error al verificar el numero de Brevet: ${error}`);
    }
};

export const isNumTargetaExist = async (num_targeta: string) => {
    try {
        const existEmail = await Targeta.findOne({ where: { num_targeta: num_targeta } });
        if (existEmail) {
        throw new Error(`El numero de Targeta  "${num_targeta}" ya está registrado`);
        }
    } catch (error) {
        throw new Error(`Error al verificar el numero de Targeta: ${error}`);
    }
};


