"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cali_com_1 = require("../controllers/cali_com");
const router = (0, express_1.Router)();
router.get('/', cali_com_1.getCaliComs);
router.get('/:id', cali_com_1.getCaliCom);
router.post('/', cali_com_1.postCaliCom);
router.put('/:id', cali_com_1.putCaliCom);
router.delete('/:id', cali_com_1.deleteCaliComState);
router.delete('/del/:id', cali_com_1.deleteCaliCom);
exports.default = router;
//# sourceMappingURL=cali_com.js.map