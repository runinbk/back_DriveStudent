import { Router } from "express";
import { 
    getTargetas,
    getTargeta,
    postTargeta,
    putTargeta,
    deleteTargetaState,
    deleteTargeta
 } from "../controllers/targeta";
import { check } from "express-validator";
import validarCampos from "../middlewares/validar-campos";
import { isNumTargetaExist } from "../helpers/db-validators";

const router = Router();

router.get('/',       getTargetas);

router.get('/:id',[
    validarCampos
], getTargeta);

router.post('/', [
    // check('num_targeta').custom(isNumTargetaExist), 
    validarCampos
], postTargeta);

router.put('/:id',[
    validarCampos
], putTargeta);

router.delete('/:id', [
    validarCampos
], deleteTargetaState);

router.delete('/del/:id',[
    validarCampos
],  deleteTargeta);

export default router;