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
exports.deleteStatePreferencia = exports.deletePreferencia = exports.putPreferencia = exports.postPreferencia = exports.getPreferencia = exports.getPreferencias = void 0;
const preferencia_1 = __importDefault(require("../models/preferencia"));
const getPreferencias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const preferencia = yield preferencia_1.default.findAll();
    res.json({ preferencia });
});
exports.getPreferencias = getPreferencias;
const getPreferencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const preferencia = yield preferencia_1.default.findByPk(id);
    if (preferencia) {
        res.json({ preferencia });
    }
    else {
        res.status(404).json({
            msg: `No existe un preferencia con el id ${id}`
        });
    }
});
exports.getPreferencia = getPreferencia;
const postPreferencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const preferencia = new preferencia_1.default(body);
        yield preferencia.save();
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
exports.postPreferencia = postPreferencia;
const putPreferencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const preferencia = yield preferencia_1.default.findByPk(id);
        if (!preferencia) {
            return res.status(404).json({
                msg: 'No existe el preferencia con el id ' + id
            });
        }
        yield preferencia.update(body);
        res.json(preferencia);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPreferencia = putPreferencia;
const deletePreferencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const preferencia = yield preferencia_1.default.findByPk(id);
    if (!preferencia) {
        return res.status(404).json({
            msg: 'No existe el preferencia con el id ' + id
        });
    }
    yield preferencia.destroy();
    res.json(preferencia);
});
exports.deletePreferencia = deletePreferencia;
const deleteStatePreferencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const preferencia = yield preferencia_1.default.findByPk(id);
    if (!preferencia) {
        return res.status(404).json({
            msg: 'No existe el preferencia con el id ' + id
        });
    }
    // actualizamos el estado...
    yield preferencia.update({ estado: false });
    res.json(preferencia);
});
exports.deleteStatePreferencia = deleteStatePreferencia;
//# sourceMappingURL=preferencias.js.map