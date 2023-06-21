import { Router } from "express";
import { 
    deleteUsuario, 
    deleteUsuarioState, 
    getUsuario, 
    getUsuarios, 
    postUsuario, 
    putUsuario 
} from "../controllers/usuarios";
import { check } from "express-validator";
import { isEmailExist, isRoleValue, isUserForID } from "../helpers/db-validators";
import validarCampos from "../middlewares/validar-campos";

const router = Router();

router.get('/', getUsuarios);

router.get('/:id',[
    check('id').custom(isUserForID),
    validarCampos    
], getUsuario);

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de mas 6 de caracteres').isLength({ min: 6 }),
    check('correo').custom(isEmailExist),
    // check('role').custom(isRoleValue),
    validarCampos
], postUsuario);

router.put('/:id',[
    check('id').custom(isUserForID),
    // check('role').custom(isRoleValue),
    check('correo').custom(isEmailExist),
    validarCampos
], putUsuario);

router.delete('/:id',[
    check('id').custom(isUserForID),
    validarCampos
], deleteUsuarioState);

router.delete('/del/:id',[
    check('id').custom(isUserForID),
    validarCampos
], deleteUsuario);

export default router;