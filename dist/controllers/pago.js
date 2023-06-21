"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePagoState = exports.deletePago = exports.putPago = exports.postPago = exports.getPago = exports.getPagos = void 0;
const pago_1 = __importDefault(require("../models/pago"));
const getPagos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pago = yield pago_1.default.findAll();
    res.json({ pago });
});
exports.getPagos = getPagos;
const getPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pago = yield pago_1.default.findByPk(id);
    if (pago) {
        res.json({ pago });
    }
    else {
        res.status(404).json({
            msg: `No existe un pago con el id : ${id}`
        });
    }
});
exports.getPago = getPago;
const postPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const pago = new pago_1.default(body);
        yield pago.save();
        res.json({
            msg: "Guardado exitos ...!!!"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postPago = postPago;
const putPago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const pago = yield pago_1.default.findByPk(id);
        if (!pago) {
            return res.status(404).json({
                msg: `No existe un pago con el id : ${id}`
            });
        }
        yield pago.update(body);
        res.json({ pago });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPago = putPago;
const deletePago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pago = yield pago_1.default.findByPk(id);
    if (!pago) {
        return res.status(404).json({
            msg: `No existe un pago con el id : ${id}`
        });
    }
    // eliminamos el usuario
    yield pago.destroy();
    res.json(pago);
});
exports.deletePago = deletePago;
const deletePagoState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const pago = yield pago_1.default.findByPk(id);
    if (!pago) {
        return res.status(404).json({
            msg: `No existe un pago con el id : ${id}`
        });
    }
    // actualizamos el estado..
    yield pago.update({ estado: false });
    res.json(pago);
});
exports.deletePagoState = deletePagoState;
//# sourceMappingURL=pago.js.map