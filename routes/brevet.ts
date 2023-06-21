import { Router } from "express";
import { 
    deleteBrevet, 
    deleteStateBrevet, 
    getBrevet, 
    getBrevets, 
    postBrevet, 
    putBrevet 
} from "../controllers/brevet";
import validarCampos from "../middlewares/validar-campos";
import { check } from "express-validator";
import { isNumBrevetExist } from "../helpers/db-validators";

const router = Router();

router.get('/', getBrevets);
router.get('/:id',[
    validarCampos
], getBrevet);
router.post('/',[
    check('numero').custom(isNumBrevetExist),
    validarCampos
], postBrevet);
router.put('/:id',[
    validarCampos
], putBrevet);
router.delete('/:id', deleteStateBrevet);
router.delete('/del/:id', deleteBrevet);

export default router;