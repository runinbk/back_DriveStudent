import { Request, Response } from "express";
import Targeta from "../models/targeta";


export const getTargetas = async ( req: Request, res : Response ) => {
    
    const targeta = await Targeta.findAll();
    
    res.json({ targeta })
}

export const getTargeta = async ( req : Request, res: Response ) => {

    const { id } = req.params;
    const targeta = await Targeta.findByPk(id);

    if (targeta) {
        res.json({targeta})
    } else {
        res.status(404).json({
            msg : `No existe un targeta con el id : ${id}`
        })
    }

}

export const postTargeta = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const targeta = new Targeta(body);
        await targeta.save();
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

export const putTargeta = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const targeta = await Targeta.findByPk(id);
        if (!targeta) {
            return res.status(404).json({
                msg : `No existe un targeta con el id : ${id}`
            })
        }
        await targeta.update(body);
        res.json({targeta})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deleteTargeta = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const targeta = await Targeta.findByPk(id);
    if (!targeta) {
        return res.status(404).json({
            msg : `No existe un targeta con el id : ${id}`
        })
    }
    // eliminamos el targeta
    await targeta.destroy();
    res.json(targeta);
}

export const deleteTargetaState = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const targeta = await Targeta.findByPk(id);
    if (!targeta) {
        return res.status(404).json({
            msg : `No existe un usuario con el id : ${id}`
        })
    }
    // actualizamos el estado..
    await targeta.update({estado : false});
    res.json(targeta);
}