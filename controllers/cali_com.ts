import { Request, Response } from "express";
import CaliCom from "../models/cali_com";


export const getCaliComs = async ( req: Request, res : Response ) => {
    
    const caliCom = await CaliCom.findAll();
    
    res.json({ caliCom })
}

export const getCaliCom = async ( req : Request, res: Response ) => {

    const { id } = req.params;
    const caliCom = await CaliCom.findByPk(id);

    if (caliCom) {
        res.json({caliCom})
    } else {
        res.status(404).json({
            msg : `No existe un caliCom con el id : ${id}`
        })
    }

}

export const postCaliCom = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const caliCom = new CaliCom(body);
        await caliCom.save();
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

export const putCaliCom = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const caliCom = await CaliCom.findByPk(id);
        if (!caliCom) {
            return res.status(404).json({
                msg : `No existe un caliCom con el id : ${id}`
            })
        }
        await caliCom.update(body);
        res.json({caliCom})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deleteCaliCom = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const caliCom = await CaliCom.findByPk(id);
    if (!caliCom) {
        return res.status(404).json({
            msg : `No existe un caliCom con el id : ${id}`
        })
    }
    // eliminamos el usuario
    await caliCom.destroy();
    res.json(caliCom);
}

export const deleteCaliComState = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const caliCom = await CaliCom.findByPk(id);
    if (!caliCom) {
        return res.status(404).json({
            msg : `No existe un caliCom con el id : ${id}`
        })
    }
    // actualizamos el estado..
    await caliCom.update({estado : false});
    res.json(caliCom);
}