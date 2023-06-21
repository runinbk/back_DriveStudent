import { Request, Response } from "express";
import Brevet from "../models/brevet";


export const getBrevets = async ( req: Request, res : Response ) => {

    const brevet = await Brevet.findAll();

    res.json( {brevet} );
}

export const getBrevet = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const brevet = await Brevet.findByPk( id );
    
    if (brevet) {
        res.json({ brevet });        
    } else {
        res.status(404).json({
            msg : `No existe un brevet con el id ${id}`
        })
    }

}

export const postBrevet = async ( req : Request, res: Response ) => {

    const { body } = req;

    try {
        const brevet = new Brevet(body);
        await brevet.save();
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

export const putBrevet = async ( req : Request, res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        const brevet = await Brevet.findByPk(id);
        if (!brevet) {
            return res.status(404).json({
                msg : 'No existe el brevet con el id ' + id
            })
        }
        
        await brevet.update(body);
        res.json(brevet);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg : 'Hable con el administrador'
        })
    }

}

export const deleteBrevet = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const brevet = await Brevet.findByPk(id);
    if (!brevet) {
        return res.status(404).json({
            msg : 'No existe el brevet con el id ' + id
        })
    }
    await brevet.destroy();
    res.json(brevet);

}

export const deleteStateBrevet = async ( req : Request, res: Response ) => {

    const { id } = req.params;

    const brevet = await Brevet.findByPk(id);
    if (!brevet) {
        return res.status(404).json({
            msg : 'No existe el brevet con el id ' + id
        })
    }
    // actualizamos el estado...
    await brevet.update( {estado : false });
    res.json(brevet);

}