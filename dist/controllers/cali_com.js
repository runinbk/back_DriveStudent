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
exports.deleteCaliComState = exports.deleteCaliCom = exports.putCaliCom = exports.postCaliCom = exports.getCaliCom = exports.getCaliComs = void 0;
const cali_com_1 = __importDefault(require("../models/cali_com"));
const getCaliComs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const caliCom = yield cali_com_1.default.findAll();
    res.json({ caliCom });
});
exports.getCaliComs = getCaliComs;
const getCaliCom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const caliCom = yield cali_com_1.default.findByPk(id);
    if (caliCom) {
        res.json({ caliCom });
    }
    else {
        res.status(404).json({
            msg: `No existe un caliCom con el id : ${id}`
        });
    }
});
exports.getCaliCom = getCaliCom;
const postCaliCom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const caliCom = new cali_com_1.default(body);
        yield caliCom.save();
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
exports.postCaliCom = postCaliCom;
const putCaliCom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const caliCom = yield cali_com_1.default.findByPk(id);
        if (!caliCom) {
            return res.status(404).json({
                msg: `No existe un caliCom con el id : ${id}`
            });
        }
        yield caliCom.update(body);
        res.json({ caliCom });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putCaliCom = putCaliCom;
const deleteCaliCom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const caliCom = yield cali_com_1.default.findByPk(id);
    if (!caliCom) {
        return res.status(404).json({
            msg: `No existe un caliCom con el id : ${id}`
        });
    }
    // eliminamos el usuario
    yield caliCom.destroy();
    res.json(caliCom);
});
exports.deleteCaliCom = deleteCaliCom;
const deleteCaliComState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const caliCom = yield cali_com_1.default.findByPk(id);
    if (!caliCom) {
        return res.status(404).json({
            msg: `No existe un caliCom con el id : ${id}`
        });
    }
    // actualizamos el estado..
    yield caliCom.update({ estado: false });
    res.json(caliCom);
});
exports.deleteCaliComState = deleteCaliComState;
//# sourceMappingURL=cali_com.js.map