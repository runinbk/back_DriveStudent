import { Router } from "express";
import { 
    deletePreferencia, 
    deleteStatePreferencia, 
    getPreferencia, 
    getPreferencias, 
    postPreferencia, 
    putPreferencia 
} from "../controllers/preferencias";


const router = Router();

router.get('/',       getPreferencias);
router.get('/:id',    getPreferencia);
router.post('/',      postPreferencia);
router.put('/:id',    putPreferencia);
router.delete('/:id', deleteStatePreferencia);
router.delete('/del/:id', deletePreferencia);

export default router;