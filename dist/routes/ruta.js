"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ruta_1 = require("../controllers/ruta");
const router = (0, express_1.Router)();
router.get('/', ruta_1.getRutas);
router.get('/:id', ruta_1.getRuta);
router.post('/', ruta_1.postRuta);
router.put('/:id', ruta_1.putRuta);
router.delete('/:id', ruta_1.deleteRutaState);
router.delete('/del/:id', ruta_1.deleteRuta);
exports.default = router;
//# sourceMappingURL=ruta.js.map