"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const punto_1 = require("../controllers/punto");
const pago_1 = require("../controllers/pago");
const router = (0, express_1.Router)();
router.get('/', punto_1.getPuntos);
router.get('/:id', punto_1.getPunto);
router.post('/', punto_1.postPunto);
router.put('/:id', pago_1.putPago);
router.delete('/:id', punto_1.deletePuntoState);
router.delete('/del/:id', punto_1.deletePunto);
exports.default = router;
//# sourceMappingURL=punto.js.map