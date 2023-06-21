import { Router } from "express";
import { 
    getVehiculos,
    getVehiculo,
    postVehiculo,
    putVehiculo,
    deleteVehiculo,
    deleteVehiculoState
} from "../controllers/vehiculo";


const router = Router();

router.get('/',           getVehiculos);
router.get('/:id',        getVehiculo);
router.post('/',          postVehiculo);
router.put('/:id',        putVehiculo);
router.delete('/:id',     deleteVehiculoState);
router.delete('/del/:id', deleteVehiculo);

export default router;