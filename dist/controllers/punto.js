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
exports.deletePuntoState = exports.deletePunto = exports.putPunto = exports.postPunto = exports.getPunto = exports.getPuntos = void 0;
const punto_1 = __importDefault(require("../models/punto"));
const getPuntos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const punto = yield punto_1.default.findAll();
    res.json({ punto });
});
exports.getPuntos = getPuntos;
const getPunto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const punto = yield punto_1.default.findByPk(id);
    if (punto) {
        res.json({ punto });
    }
    else {
        res.status(404).json({
            msg: `No existe un punto con el id : ${id}`
        });
    }
});
exports.getPunto = getPunto;
const postPunto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const punto = new punto_1.default(body);
        yield punto.save();
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
exports.postPunto = postPunto;
const putPunto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const punto = yield punto_1.default.findByPk(id);
        if (!punto) {
            return res.status(404).json({
                msg: `No existe un punto con el id : ${id}`
            });
        }
        yield punto.update(body);
        res.json({ punto });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putPunto = putPunto;
const deletePunto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const punto = yield punto_1.default.findByPk(id);
    if (!punto) {
        return res.status(404).json({
            msg: `No existe un punto con el id : ${id}`
        });
    }
    // eliminamos el usuario
    yield punto.destroy();
    res.json(punto);
});
exports.deletePunto = deletePunto;
const deletePuntoState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const punto = yield punto_1.default.findByPk(id);
    if (!punto) {
        return res.status(404).json({
            msg: `No existe un punto con el id : ${id}`
        });
    }
    // actualizamos el estado..
    yield punto.update({ estado: false });
    res.json(punto);
});
exports.deletePuntoState = deletePuntoState;
//# sourceMappingURL=punto.js.map