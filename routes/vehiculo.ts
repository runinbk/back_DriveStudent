import { Router } from "express";
import { 
    getVehiculos,
    getVehiculo,
    postVehiculo,
    putVehiculo,
    deleteVehiculo,
    deleteVehiculoState
} from "../controllers/vehiculo";
import { check } from "express-validator";
import { isPlacaExist } from "../helpers/db-validators";
import validarCampos from "../middlewares/validar-campos";


const router = Router();

router.get('/', getVehiculos);

router.get('/:id',[
    validarCampos
], getVehiculo);

router.post('/',[
    check('num_placa').custom(isPlacaExist),
    validarCampos,
], postVehiculo);

router.put('/:id',[
    validarCampos,
], putVehiculo);

router.delete('/:id',[
    validarCampos,
], deleteVehiculoState);

router.delete('/del/:id',[
    validarCampos
], deleteVehiculo);

export default router;