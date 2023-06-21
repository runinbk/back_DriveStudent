import { Router } from "express";
import { 
    deleteSoliViaje,
    deleteSoliViajeState,
    getSoliViaje,
     getSoliViajes,
     postSoliViaje,
     putSoliViaje
} from "../controllers/solicitud_viaje";

const router = Router();

router.get('/',       getSoliViajes);
router.get('/:id',    getSoliViaje);
router.post('/',      postSoliViaje);
router.put('/:id',    putSoliViaje);
router.delete('/:id', deleteSoliViajeState);
router.delete('/del/:id', deleteSoliViaje);

export default router;