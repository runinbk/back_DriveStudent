"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vehiculo_1 = require("../controllers/vehiculo");
const express_validator_1 = require("express-validator");
const db_validators_1 = require("../helpers/db-validators");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.get('/', vehiculo_1.getVehiculos);
router.get('/:id', [
    validar_campos_1.default
], vehiculo_1.getVehiculo);
router.post('/', [
    (0, express_validator_1.check)('num_placa').custom(db_validators_1.isPlacaExist),
    validar_campos_1.default,
], vehiculo_1.postVehiculo);
router.put('/:id', [
    validar_campos_1.default,
], vehiculo_1.putVehiculo);
router.delete('/:id', [
    validar_campos_1.default,
], vehiculo_1.deleteVehiculoState);
router.delete('/del/:id', [
    validar_campos_1.default
], vehiculo_1.deleteVehiculo);
exports.default = router;
//# sourceMappingURL=vehiculo.js.map