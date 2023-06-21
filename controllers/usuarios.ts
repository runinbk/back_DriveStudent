import { Request, Response } from "express";
import bcrypt from "bcrypt";

import Usuario from "../models/usuario";


export const getUsuarios = async ( req: Request, res : Response ) => {
    
    const usuario = await Usuario.findAll();
    
    res.json({ usuario })
}

export const getUsuario = async ( req : Request, res: Response ) => {

    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
        res.json({usuario})
    } else {
        res.status(404).json({
            msg : `No existe un usuario con el id : ${id}`
        })
    }

}

export const postUsuario = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const usuario = new Usuario(body);
         // Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(usuario.password, salt);
        await usuario.save();
        res.json({
            msg :"Guardado exitos ...!!!"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const putUsuario = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg : `No existe un usuario con el id : ${id}`
            })
        }
        if (body.password) {
            // Encriptar la contraseña
            const salt = bcrypt.genSaltSync();
            body.password = bcrypt.hashSync(body.password, salt);
          }
        await usuario.update(body);
        res.json({usuario})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deleteUsuario = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg : `No existe un usuario con el id : ${id}`
        })
    }
    // eliminamos el usuario
    await usuario.destroy();
    res.json(usuario);
}

export const deleteUsuarioState = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg : `No existe un usuario con el id : ${id}`
        })
    }
    // actualizamos el estado..
    await usuario.update({estado : false});
    res.json(usuario);
}