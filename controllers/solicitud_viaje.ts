import { Request, Response } from "express";
import SoliViaje from "../models/solicitud_viaje";


export const getSoliViajes = async ( req: Request, res : Response ) => {
    
    const soliViaje = await SoliViaje.findAll();
    
    res.json({ soliViaje })
}

export const getSoliViaje = async ( req : Request, res: Response ) => {

    const { id } = req.params;
    const soliViaje = await SoliViaje.findByPk(id);

    if (soliViaje) {
        res.json({soliViaje})
    } else {
        res.status(404).json({
            msg : `No existe un soliViaje con el id : ${id}`
        })
    }

}

export const postSoliViaje = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const soliViaje = new SoliViaje(body);
        await soliViaje.save();
        res.json({soliViaje});

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const putSoliViaje = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const soliViaje = await SoliViaje.findByPk(id);
        if (!soliViaje) {
            return res.status(404).json({
                msg : `No existe un usuario con el id : ${id}`
            })
        }
        await soliViaje.update(body);
        res.json({soliViaje})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deleteSoliViaje = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const soliViaje = await SoliViaje.findByPk(id);
    if (!soliViaje) {
        return res.status(404).json({
            msg : `No existe un soliViaje con el id : ${id}`
        })
    }
    // eliminamos el usuario
    await soliViaje.destroy();
    res.json(soliViaje);
}

export const deleteSoliViajeState = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const soliViaje = await SoliViaje.findByPk(id);
    if (!soliViaje) {
        return res.status(404).json({
            msg : `No existe un soliViaje con el id : ${id}`
        })
    }
    // actualizamos el estado..
    await soliViaje.update({estado : false});
    res.json(soliViaje);
}