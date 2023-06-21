"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solicitud_viaje_1 = require("../controllers/solicitud_viaje");
const router = (0, express_1.Router)();
router.get('/', solicitud_viaje_1.getSoliViajes);
router.get('/:id', solicitud_viaje_1.getSoliViaje);
router.post('/', solicitud_viaje_1.postSoliViaje);
router.put('/:id', solicitud_viaje_1.putSoliViaje);
router.delete('/:id', solicitud_viaje_1.deleteSoliViajeState);
router.delete('/del/:id', solicitud_viaje_1.deleteSoliViaje);
exports.default = router;
//# sourceMappingURL=solicutud_viaje.js.map