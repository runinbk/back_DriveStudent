import { Router } from "express";
import { 
    deleteCarrera,
    deleteCarreraState,
    getCarrera,
    getCarreras,
    postCarrera,
    putCarrera,
 } from "../controllers/carrera";

const router = Router();

router.get('/',       getCarreras);
router.get('/:id',    getCarrera);
router.post('/',      postCarrera);
router.put('/:id',    putCarrera);
router.delete('/:id', deleteCarreraState);
router.delete('/del/:id', deleteCarrera);

export default router;