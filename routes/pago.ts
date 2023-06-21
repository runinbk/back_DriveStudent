import { Router } from "express";
import { 
    deletePago,
    deletePagoState,
    getPago,
     getPagos,
     postPago,
     putPago
} from "../controllers/pago";

const router = Router();

router.get('/',       getPagos);
router.get('/:id',    getPago);
router.post('/',      postPago);
router.put('/:id',    putPago);
router.delete('/:id', deletePagoState);
router.delete('/del/:id', deletePago);

export default router;