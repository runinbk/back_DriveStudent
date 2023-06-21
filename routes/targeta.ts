import { Router } from "express";
import { 
    getTargetas,
    getTargeta,
    postTargeta,
    putTargeta,
    deleteTargetaState,
    deleteTargeta
 } from "../controllers/targeta";

const router = Router();

router.get('/',       getTargetas);
router.get('/:id',    getTargeta);
router.post('/',      postTargeta);
router.put('/:id',    putTargeta);
router.delete('/:id', deleteTargetaState);
router.delete('/del/:id', deleteTargeta);

export default router;