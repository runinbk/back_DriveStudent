import { Router } from "express";
import { deleteRol, getRol, getRols, postRol, putRol } from "../controllers/rol";

const router = Router();

router.get('/',       getRols);
router.get('/:id',    getRol);
router.post('/',      postRol);
router.put('/:id',    putRol);
router.delete('/:id', deleteRol);

export default router;