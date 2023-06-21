import { Router } from "express";
import { 
    deletePunto,
    deletePuntoState,
    getPunto,
    getPuntos,
    postPunto
} from "../controllers/punto";
import { putPago } from "../controllers/pago";

const router = Router();

router.get('/',       getPuntos);
router.get('/:id',    getPunto);
router.post('/',      postPunto);
router.put('/:id',    putPago);
router.delete('/:id', deletePuntoState);
router.delete('/del/:id', deletePunto);

export default router;