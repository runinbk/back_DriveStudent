"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrera_1 = require("../controllers/carrera");
const router = (0, express_1.Router)();
router.get('/', carrera_1.getCarreras);
router.get('/:id', carrera_1.getCarrera);
router.post('/', carrera_1.postCarrera);
router.put('/:id', carrera_1.putCarrera);
router.delete('/:id', carrera_1.deleteCarreraState);
router.delete('/del/:id', carrera_1.deleteCarrera);
exports.default = router;
//# sourceMappingURL=carrera.js.map