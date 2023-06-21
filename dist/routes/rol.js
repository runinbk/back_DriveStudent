"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_1 = require("../controllers/rol");
const router = (0, express_1.Router)();
router.get('/', rol_1.getRols);
router.get('/:id', rol_1.getRol);
router.post('/', rol_1.postRol);
router.put('/:id', rol_1.putRol);
router.delete('/:id', rol_1.deleteRol);
exports.default = router;
//# sourceMappingURL=rol.js.map