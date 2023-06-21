import { Router } from "express";
import { 
    deleteCaliCom,
    deleteCaliComState,
    getCaliCom,
    getCaliComs,
    postCaliCom,
    putCaliCom
} from "../controllers/cali_com";

const router = Router();

router.get('/',       getCaliComs);
router.get('/:id',    getCaliCom);
router.post('/',      postCaliCom);
router.put('/:id',    putCaliCom);
router.delete('/:id', deleteCaliComState);
router.delete('/del/:id', deleteCaliCom);

export default router;