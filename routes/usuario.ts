import { Router } from "express";
import { 
    deleteUsuario, 
    deleteUsuarioState, 
    getUsuario, 
    getUsuarios, 
    postUsuario, 
    putUsuario 
} from "../controllers/usuarios";

const router = Router();

router.get('/',       getUsuarios);
router.get('/:id',    getUsuario);
router.post('/',      postUsuario);
router.put('/:id',    putUsuario);
router.delete('/:id', deleteUsuarioState);
router.delete('/del/:id', deleteUsuario);

export default router;