import { Request, Response } from "express";
import Carac_Es from "../models/carac_espe";


export const getCarac_Ess = async ( req: Request, res : Response ) => {
    
    const carac_es = await Carac_Es.findAll();
    
    res.json({ carac_es })
}

export const getCarac_Es = async ( req : Request, res: Response ) => {

    const { id } = req.params;
    const carac_es = await Carac_Es.findByPk(id);

    if (carac_es) {
        res.json({carac_es})
    } else {
        res.status(404).json({
            msg : `No existe un carac_es con el id : ${id}`
        })
    }

}

export const postCarac_Es = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const carac_es = new Carac_Es(body);
        await carac_es.save();
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

export const putCarac_Es = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const carac_es = await Carac_Es.findByPk(id);
        if (!carac_es) {
            return res.status(404).json({
                msg : `No existe un carac_es con el id : ${id}`
            })
        }
        await carac_es.update(body);
        res.json({carac_es})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deleteCarac_Es = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const carac_es = await Carac_Es.findByPk(id);
    if (!carac_es) {
        return res.status(404).json({
            msg : `No existe un carac_es con el id : ${id}`
        })
    }
    // eliminamos el usuario
    await carac_es.destroy();
    res.json(carac_es);
}

export const deleteCarac_EsState = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const carac_es = await Carac_Es.findByPk(id);
    if (!carac_es) {
        return res.status(404).json({
            msg : `No existe un carac_es con el id : ${id}`
        })
    }
    // actualizamos el estado..
    await carac_es.update({estado : false});
    res.json(carac_es);
}