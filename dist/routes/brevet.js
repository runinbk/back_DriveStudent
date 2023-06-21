"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brevet_1 = require("../controllers/brevet");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const express_validator_1 = require("express-validator");
const db_validators_1 = require("../helpers/db-validators");
const router = (0, express_1.Router)();
router.get('/', brevet_1.getBrevets);
router.get('/:id', [
    validar_campos_1.default
], brevet_1.getBrevet);
router.post('/', [
    (0, express_validator_1.check)('numero').custom(db_validators_1.isNumBrevetExist),
    validar_campos_1.default
], brevet_1.postBrevet);
router.put('/:id', [
    validar_campos_1.default
], brevet_1.putBrevet);
router.delete('/:id', brevet_1.deleteStateBrevet);
router.delete('/del/:id', brevet_1.deleteBrevet);
exports.default = router;
//# sourceMappingURL=brevet.js.map