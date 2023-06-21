import { Request, Response } from "express";
import Preferencia from "../models/preferencia";


export const getPreferencias = async ( req: Request, res : Response ) => {

    const preferencia = await Preferencia.findAll();

    res.json( {preferencia} );
}

export const getPreferencia = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const preferencia = await Preferencia.findByPk( id );
    
    if (preferencia) {
        res.json({ preferencia });        
    } else {
        res.status(404).json({
            msg : `No existe un preferencia con el id ${id}`
        })
    }

}

export const postPreferencia = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const preferencia = new Preferencia(body);
        await preferencia.save();
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

export const putPreferencia = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const preferencia = await Preferencia.findByPk(id);
        if (!preferencia) {
            return res.status(404).json({
                msg : 'No existe el preferencia con el id ' + id
            })
        }
        
        await preferencia.update(body);
        res.json(preferencia);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deletePreferencia = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const preferencia = await Preferencia.findByPk(id);
    if (!preferencia) {
        return res.status(404).json({
            msg : 'No existe el preferencia con el id ' + id
        })
    }
    await preferencia.destroy();
    res.json(preferencia);

}

export const deleteStatePreferencia = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const preferencia = await Preferencia.findByPk(id);
    if (!preferencia) {
        return res.status(404).json({
            msg : 'No existe el preferencia con el id ' + id
        })
    }
    // actualizamos el estado...
    await preferencia.update( {estado : false });
    res.json(preferencia);

}