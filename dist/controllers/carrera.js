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
exports.deleteCarreraState = exports.deleteCarrera = exports.putCarrera = exports.postCarrera = exports.getCarrera = exports.getCarreras = void 0;
const carrera_1 = __importDefault(require("../models/carrera"));
const getCarreras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carrera = yield carrera_1.default.findAll();
    res.json({ carrera });
});
exports.getCarreras = getCarreras;
const getCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const carrera = yield carrera_1.default.findByPk(id);
    if (carrera) {
        res.json({ carrera });
    }
    else {
        res.status(404).json({
            msg: `No existe un carrera con el id : ${id}`
        });
    }
});
exports.getCarrera = getCarrera;
const postCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const carrera = new carrera_1.default(body);
        yield carrera.save();
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
exports.postCarrera = postCarrera;
const putCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const carrera = yield carrera_1.default.findByPk(id);
        if (!carrera) {
            return res.status(404).json({
                msg: `No existe un carrera con el id : ${id}`
            });
        }
        yield carrera.update(body);
        res.json({ carrera });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putCarrera = putCarrera;
const deleteCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const carrera = yield carrera_1.default.findByPk(id);
    if (!carrera) {
        return res.status(404).json({
            msg: `No existe un carrera con el id : ${id}`
        });
    }
    // eliminamos el usuario
    yield carrera.destroy();
    res.json(carrera);
});
exports.deleteCarrera = deleteCarrera;
const deleteCarreraState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const carrera = yield carrera_1.default.findByPk(id);
    if (!carrera) {
        return res.status(404).json({
            msg: `No existe un carrera con el id : ${id}`
        });
    }
    // actualizamos el estado..
    yield carrera.update({ estado: false });
    res.json(carrera);
});
exports.deleteCarreraState = deleteCarreraState;
//# sourceMappingURL=carrera.js.map