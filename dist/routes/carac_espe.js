"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carac_espe_1 = require("../controllers/carac_espe");
const router = (0, express_1.Router)();
router.get('/', carac_espe_1.getCarac_Ess);
router.get('/:id', carac_espe_1.getCarac_Es);
router.post('/', carac_espe_1.postCarac_Es);
router.put('/:id', carac_espe_1.putCarac_Es);
router.delete('/:id', carac_espe_1.deleteCarac_EsState);
router.delete('/del/:id', carac_espe_1.deleteCarac_Es);
exports.default = router;
//# sourceMappingURL=carac_espe.js.map