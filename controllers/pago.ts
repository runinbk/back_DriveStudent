import { Request, Response } from "express";
import Pago from "../models/pago";


export const getPagos = async ( req: Request, res : Response ) => {
    
    const pago = await Pago.findAll();
    
    res.json({ pago })
}

export const getPago = async ( req : Request, res: Response ) => {

    const { id } = req.params;
    const pago = await Pago.findByPk(id);

    if (pago) {
        res.json({pago})
    } else {
        res.status(404).json({
            msg : `No existe un pago con el id : ${id}`
        })
    }

}

export const postPago = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const pago = new Pago(body);
        await pago.save();
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

export const putPago = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const pago = await Pago.findByPk(id);
        if (!pago) {
            return res.status(404).json({
                msg : `No existe un pago con el id : ${id}`
            })
        }
        await pago.update(body);
        res.json({pago})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deletePago = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const pago = await Pago.findByPk(id);
    if (!pago) {
        return res.status(404).json({
            msg : `No existe un pago con el id : ${id}`
        })
    }
    // eliminamos el usuario
    await pago.destroy();
    res.json(pago);
}

export const deletePagoState = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const pago = await Pago.findByPk(id);
    if (!pago) {
        return res.status(404).json({
            msg : `No existe un pago con el id : ${id}`
        })
    }
    // actualizamos el estado..
    await pago.update({estado : false});
    res.json(pago);
}