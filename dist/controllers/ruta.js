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
exports.deleteRutaState = exports.deleteRuta = exports.putRuta = exports.postRuta = exports.getRuta = exports.getRutas = void 0;
const ruta_1 = __importDefault(require("../models/ruta"));
const getRutas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ruta = yield ruta_1.default.findAll();
    res.json({ ruta });
});
exports.getRutas = getRutas;
const getRuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ruta = yield ruta_1.default.findByPk(id);
    if (ruta) {
        res.json({ ruta });
    }
    else {
        res.status(404).json({
            msg: `No existe un ruta con el id : ${id}`
        });
    }
});
exports.getRuta = getRuta;
const postRuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const ruta = new ruta_1.default(body);
        yield ruta.save();
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
exports.postRuta = postRuta;
const putRuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const ruta = yield ruta_1.default.findByPk(id);
        if (!ruta) {
            return res.status(404).json({
                msg: `No existe un ruta con el id : ${id}`
            });
        }
        yield ruta.update(body);
        res.json({ ruta });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putRuta = putRuta;
const deleteRuta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ruta = yield ruta_1.default.findByPk(id);
    if (!ruta) {
        return res.status(404).json({
            msg: `No existe un ruta con el id : ${id}`
        });
    }
    // eliminamos el ruta
    yield ruta.destroy();
    res.json(ruta);
});
exports.deleteRuta = deleteRuta;
const deleteRutaState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ruta = yield ruta_1.default.findByPk(id);
    if (!ruta) {
        return res.status(404).json({
            msg: `No existe un ruta con el id : ${id}`
        });
    }
    // actualizamos el estado..
    yield ruta.update({ estado: false });
    res.json(ruta);
});
exports.deleteRutaState = deleteRutaState;
//# sourceMappingURL=ruta.js.map