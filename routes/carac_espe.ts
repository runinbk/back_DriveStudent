import { Router } from "express";
import { 
    getCarac_Ess,
    getCarac_Es,
    postCarac_Es,
    putCarac_Es,
    deleteCarac_EsState,
    deleteCarac_Es
 } from "../controllers/carac_espe";

const router = Router();

router.get('/',       getCarac_Ess);
router.get('/:id',    getCarac_Es);
router.post('/',      postCarac_Es);
router.put('/:id',    putCarac_Es);
router.delete('/:id', deleteCarac_EsState);
router.delete('/del/:id', deleteCarac_Es);

export default router;