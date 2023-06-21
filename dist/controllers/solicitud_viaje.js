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
exports.deleteSoliViajeState = exports.deleteSoliViaje = exports.putSoliViaje = exports.postSoliViaje = exports.getSoliViaje = exports.getSoliViajes = void 0;
const solicitud_viaje_1 = __importDefault(require("../models/solicitud_viaje"));
const getSoliViajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const soliViaje = yield solicitud_viaje_1.default.findAll();
    res.json({ soliViaje });
});
exports.getSoliViajes = getSoliViajes;
const getSoliViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const soliViaje = yield solicitud_viaje_1.default.findByPk(id);
    if (soliViaje) {
        res.json({ soliViaje });
    }
    else {
        res.status(404).json({
            msg: `No existe un soliViaje con el id : ${id}`
        });
    }
});
exports.getSoliViaje = getSoliViaje;
const postSoliViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const soliViaje = new solicitud_viaje_1.default(body);
        yield soliViaje.save();
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
exports.postSoliViaje = postSoliViaje;
const putSoliViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const soliViaje = yield solicitud_viaje_1.default.findByPk(id);
        if (!soliViaje) {
            return res.status(404).json({
                msg: `No existe un usuario con el id : ${id}`
            });
        }
        yield soliViaje.update(body);
        res.json({ soliViaje });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putSoliViaje = putSoliViaje;
const deleteSoliViaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const soliViaje = yield solicitud_viaje_1.default.findByPk(id);
    if (!soliViaje) {
        return res.status(404).json({
            msg: `No existe un soliViaje con el id : ${id}`
        });
    }
    // eliminamos el usuario
    yield soliViaje.destroy();
    res.json(soliViaje);
});
exports.deleteSoliViaje = deleteSoliViaje;
const deleteSoliViajeState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const soliViaje = yield solicitud_viaje_1.default.findByPk(id);
    if (!soliViaje) {
        return res.status(404).json({
            msg: `No existe un soliViaje con el id : ${id}`
        });
    }
    // actualizamos el estado..
    yield soliViaje.update({ estado: false });
    res.json(soliViaje);
});
exports.deleteSoliViajeState = deleteSoliViajeState;
//# sourceMappingURL=solicitud_viaje.js.map