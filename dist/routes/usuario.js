"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const express_validator_1 = require("express-validator");
const db_validators_1 = require("../helpers/db-validators");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.get('/', usuarios_1.getUsuarios);
router.get('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.isUserForID),
    validar_campos_1.default
], usuarios_1.getUsuario);
router.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('password', 'El password debe de ser de mas 6 de caracteres').isLength({ min: 6 }),
    (0, express_validator_1.check)('correo').custom(db_validators_1.isEmailExist),
    // check('role').custom(isRoleValue),
    validar_campos_1.default
], usuarios_1.postUsuario);
router.put('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.isUserForID),
    validar_campos_1.default
], usuarios_1.putUsuario);
router.delete('/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.isUserForID),
    validar_campos_1.default
], usuarios_1.deleteUsuarioState);
router.delete('/del/:id', [
    (0, express_validator_1.check)('id').custom(db_validators_1.isUserForID),
    validar_campos_1.default
], usuarios_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map