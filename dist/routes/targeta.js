"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const targeta_1 = require("../controllers/targeta");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.get('/', targeta_1.getTargetas);
router.get('/:id', [
    validar_campos_1.default
], targeta_1.getTargeta);
router.post('/', [
    // check('num_targeta').custom(isNumTargetaExist), 
    validar_campos_1.default
], targeta_1.postTargeta);
router.put('/:id', [
    validar_campos_1.default
], targeta_1.putTargeta);
router.delete('/:id', [
    validar_campos_1.default
], targeta_1.deleteTargetaState);
router.delete('/del/:id', [
    validar_campos_1.default
], targeta_1.deleteTargeta);
exports.default = router;
//# sourceMappingURL=targeta.js.map