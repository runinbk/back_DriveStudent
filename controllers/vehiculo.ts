import { Request, Response } from "express";
import Vehiculo from "../models/vehiculo";


export const getVehiculos = async ( req: Request, res : Response ) => {
    
    const vehiculo = await Vehiculo.findAll();
    
    res.json({ vehiculo })
}

export const getVehiculo = async ( req : Request, res: Response ) => {

    const { id } = req.params;
    const vehiculo = await Vehiculo.findByPk(id);

    if (vehiculo) {
        res.json({vehiculo})
    } else {
        res.status(404).json({
            msg : `No existe un vehiculo con el id : ${id}`
        })
    }

}

export const postVehiculo = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const vehiculo = new Vehiculo(body);
        await vehiculo.save();
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

export const putVehiculo = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const vehiculo = await Vehiculo.findByPk(id);
        if (!vehiculo) {
            return res.status(404).json({
                msg : `No existe un vehiculo con el id : ${id}`
            })
        }
        await vehiculo.update(body);
        res.json({vehiculo})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deleteVehiculo = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const vehiculo = await Vehiculo.findByPk(id);
    if (!vehiculo) {
        return res.status(404).json({
            msg : `No existe un vehiculo con el id : ${id}`
        })
    }
    // eliminamos el vehiculo
    await vehiculo.destroy();
    res.json(vehiculo);
}

export const deleteVehiculoState = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const vehiculo = await Vehiculo.findByPk(id);
    if (!vehiculo) {
        return res.status(404).json({
            msg : `No existe un vehiculo con el id : ${id}`
        })
    }
    // actualizamos el estado..
    await vehiculo.update({estado : false});
    res.json(vehiculo);
}