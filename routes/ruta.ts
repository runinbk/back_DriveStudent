import { Router } from "express";
import { 
    deleteRuta,
    deleteRutaState,
    getRuta,
    getRutas,
    postRuta,
    putRuta
 } from "../controllers/ruta";

const router = Router();

router.get('/',       getRutas);
router.get('/:id',    getRuta);
router.post('/',      postRuta);
router.put('/:id',    putRuta);
router.delete('/:id', deleteRutaState);
router.delete('/del/:id', deleteRuta);

export default router;