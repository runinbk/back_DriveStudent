"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pago_1 = require("../controllers/pago");
const router = (0, express_1.Router)();
router.get('/', pago_1.getPagos);
router.get('/:id', pago_1.getPago);
router.post('/', pago_1.postPago);
router.put('/:id', pago_1.putPago);
router.delete('/:id', pago_1.deletePagoState);
router.delete('/del/:id', pago_1.deletePago);
exports.default = router;
//# sourceMappingURL=pago.js.map