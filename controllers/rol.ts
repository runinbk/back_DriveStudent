import { Request, Response } from "express";
import Rol from "../models/rol";


export const getRols = async ( req: Request, res : Response ) => {

    const rol = await Rol.findAll();

    res.json( {rol} );
}

export const getRol = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const rol = await Rol.findByPk( id );
    
    if (rol) {
        res.json({ rol });        
    } else {
        res.status(404).json({
            msg : `No existe un rol con el id ${id}`
        })
    }

}

export const postRol = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const rol = new Rol(body);
        await rol.save();
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

export const putRol = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const rol = await Rol.findByPk(id);
        if (!rol) {
            return res.status(404).json({
                msg : 'No existe el rol con el id ' + id
            })
        }
        
        await rol.update(body);
        res.json(rol);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deleteRol = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const rol = await Rol.findByPk(id);
    if (!rol) {
        return res.status(404).json({
            msg : 'No existe el rol con el id ' + id
        })
    }
    await rol.destroy();
    res.json(rol);

}

export const deleteStateRol = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const rol = await Rol.findByPk(id);
    if (!rol) {
        return res.status(404).json({
            msg : 'No existe el rol con el id ' + id
        })
    }
    // actualizamos el estado...
    await rol.update( {estado : false });
    res.json(rol);

}