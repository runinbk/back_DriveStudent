"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const preferencias_1 = require("../controllers/preferencias");
const router = (0, express_1.Router)();
router.get('/', preferencias_1.getPreferencias);
router.get('/:id', preferencias_1.getPreferencia);
router.post('/', preferencias_1.postPreferencia);
router.put('/:id', preferencias_1.putPreferencia);
router.delete('/:id', preferencias_1.deleteStatePreferencia);
router.delete('/del/:id', preferencias_1.deletePreferencia);
exports.default = router;
//# sourceMappingURL=preferencias.js.map