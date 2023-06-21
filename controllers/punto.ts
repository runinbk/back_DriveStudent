import { Request, Response } from "express";
import Punto from "../models/punto";


export const getPuntos = async ( req: Request, res : Response ) => {
    
    const punto = await Punto.findAll();
    
    res.json({ punto })
}

export const getPunto = async ( req : Request, res: Response ) => {

    const { id } = req.params;
    const punto = await Punto.findByPk(id);

    if (punto) {
        res.json({punto})
    } else {
        res.status(404).json({
            msg : `No existe un punto con el id : ${id}`
        })
    }

}

export const postPunto = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const punto = new Punto(body);
        await punto.save();
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

export const putPunto = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const punto = await Punto.findByPk(id);
        if (!punto) {
            return res.status(404).json({
                msg : `No existe un punto con el id : ${id}`
            })
        }
        await punto.update(body);
        res.json({punto})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deletePunto = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const punto = await Punto.findByPk(id);
    if (!punto) {
        return res.status(404).json({
            msg : `No existe un punto con el id : ${id}`
        })
    }
    // eliminamos el usuario
    await punto.destroy();
    res.json(punto);
}

export const deletePuntoState = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const punto = await Punto.findByPk(id);
    if (!punto) {
        return res.status(404).json({
            msg : `No existe un punto con el id : ${id}`
        })
    }
    // actualizamos el estado..
    await punto.update({estado : false});
    res.json(punto);
}