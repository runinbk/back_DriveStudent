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
exports.deleteCarac_EsState = exports.deleteCarac_Es = exports.putCarac_Es = exports.postCarac_Es = exports.getCarac_Es = exports.getCarac_Ess = void 0;
const carac_espe_1 = __importDefault(require("../models/carac_espe"));
const getCarac_Ess = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carac_es = yield carac_espe_1.default.findAll();
    res.json({ carac_es });
});
exports.getCarac_Ess = getCarac_Ess;
const getCarac_Es = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const carac_es = yield carac_espe_1.default.findByPk(id);
    if (carac_es) {
        res.json({ carac_es });
    }
    else {
        res.status(404).json({
            msg: `No existe un carac_es con el id : ${id}`
        });
    }
});
exports.getCarac_Es = getCarac_Es;
const postCarac_Es = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const carac_es = new carac_espe_1.default(body);
        yield carac_es.save();
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
exports.postCarac_Es = postCarac_Es;
const putCarac_Es = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const carac_es = yield carac_espe_1.default.findByPk(id);
        if (!carac_es) {
            return res.status(404).json({
                msg: `No existe un carac_es con el id : ${id}`
            });
        }
        yield carac_es.update(body);
        res.json({ carac_es });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putCarac_Es = putCarac_Es;
const deleteCarac_Es = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const carac_es = yield carac_espe_1.default.findByPk(id);
    if (!carac_es) {
        return res.status(404).json({
            msg: `No existe un carac_es con el id : ${id}`
        });
    }
    // eliminamos el usuario
    yield carac_es.destroy();
    res.json(carac_es);
});
exports.deleteCarac_Es = deleteCarac_Es;
const deleteCarac_EsState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const carac_es = yield carac_espe_1.default.findByPk(id);
    if (!carac_es) {
        return res.status(404).json({
            msg: `No existe un carac_es con el id : ${id}`
        });
    }
    // actualizamos el estado..
    yield carac_es.update({ estado: false });
    res.json(carac_es);
});
exports.deleteCarac_EsState = deleteCarac_EsState;
//# sourceMappingURL=carac_espe.js.map