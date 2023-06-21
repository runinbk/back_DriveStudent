import { Request, Response } from "express";
import Carrera from "../models/carrera";


export const getCarreras = async ( req: Request, res : Response ) => {
    
    const carrera = await Carrera.findAll();
    
    res.json({ carrera })
}

export const getCarrera = async ( req : Request, res: Response ) => {

    const { id } = req.params;
    const carrera = await Carrera.findByPk(id);

    if (carrera) {
        res.json({carrera})
    } else {
        res.status(404).json({
            msg : `No existe un carrera con el id : ${id}`
        })
    }

}

export const postCarrera = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const carrera = new Carrera(body);
        await carrera.save();
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

export const putCarrera = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const carrera = await Carrera.findByPk(id);
        if (!carrera) {
            return res.status(404).json({
                msg : `No existe un carrera con el id : ${id}`
            })
        }
        await carrera.update(body);
        res.json({carrera})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deleteCarrera = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const carrera = await Carrera.findByPk(id);
    if (!carrera) {
        return res.status(404).json({
            msg : `No existe un carrera con el id : ${id}`
        })
    }
    // eliminamos el usuario
    await carrera.destroy();
    res.json(carrera);
}

export const deleteCarreraState = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const carrera = await Carrera.findByPk(id);
    if (!carrera) {
        return res.status(404).json({
            msg : `No existe un carrera con el id : ${id}`
        })
    }
    // actualizamos el estado..
    await carrera.update({estado : false});
    res.json(carrera);
}