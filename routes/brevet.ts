import { Router } from "express";
import { 
    deleteBrevet, 
    deleteStateBrevet, 
    getBrevet, 
    getBrevets, 
    postBrevet, 
    putBrevet 
} from "../controllers/brevet";

const router = Router();

router.get('/',       getBrevets);
router.get('/:id',    getBrevet);
router.post('/',      postBrevet);
router.put('/:id',    putBrevet);
router.delete('/:id', deleteStateBrevet);
router.delete('/del/:id', deleteBrevet);

export default router;