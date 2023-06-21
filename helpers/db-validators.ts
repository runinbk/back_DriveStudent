import User from "../models/usuario";
import Role from "../models/rol";

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

