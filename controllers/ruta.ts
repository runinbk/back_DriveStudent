import { Request, Response } from "express";
import Ruta from "../models/ruta";


export const getRutas = async ( req: Request, res : Response ) => {
    
    const ruta = await Ruta.findAll();
    
    res.json({ ruta })
}

export const getRuta = async ( req : Request, res: Response ) => {

    const { id } = req.params;
    const ruta = await Ruta.findByPk(id);

    if (ruta) {
        res.json({ruta})
    } else {
        res.status(404).json({
            msg : `No existe un ruta con el id : ${id}`
        })
    }

}

export const postRuta = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const ruta = new Ruta(body);
        await ruta.save();
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

export const putRuta = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const ruta = await Ruta.findByPk(id);
        if (!ruta) {
            return res.status(404).json({
                msg : `No existe un ruta con el id : ${id}`
            })
        }
        await ruta.update(body);
        res.json({ruta})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deleteRuta = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const ruta = await Ruta.findByPk(id);
    if (!ruta) {
        return res.status(404).json({
            msg : `No existe un ruta con el id : ${id}`
        })
    }
    // eliminamos el ruta
    await ruta.destroy();
    res.json(ruta);
}

export const deleteRutaState = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const ruta = await Ruta.findByPk(id);
    if (!ruta) {
        return res.status(404).json({
            msg : `No existe un ruta con el id : ${id}`
        })
    }
    // actualizamos el estado..
    await ruta.update({estado : false});
    res.json(ruta);
}