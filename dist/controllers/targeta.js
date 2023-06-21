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
exports.deleteTargetaState = exports.deleteTargeta = exports.putTargeta = exports.postTargeta = exports.getTargeta = exports.getTargetas = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const targeta_1 = __importDefault(require("../models/targeta"));
const getTargetas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const targeta = yield targeta_1.default.findAll();
    res.json({ targeta });
});
exports.getTargetas = getTargetas;
const getTargeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const targeta = yield targeta_1.default.findByPk(id);
    if (targeta) {
        res.json({ targeta });
    }
    else {
        res.status(404).json({
            msg: `No existe un targeta con el id : ${id}`
        });
    }
});
exports.getTargeta = getTargeta;
const postTargeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const targeta = new targeta_1.default(body);
        // Encriptar la contraseña
        const salt = bcrypt_1.default.genSaltSync();
        targeta.csv = bcrypt_1.default.hashSync(targeta.csv, salt);
        yield targeta.save();
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
exports.postTargeta = postTargeta;
const putTargeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const targeta = yield targeta_1.default.findByPk(id);
        if (!targeta) {
            return res.status(404).json({
                msg: `No existe un targeta con el id : ${id}`
            });
        }
        if (body.csv) {
            // Encriptar la contraseña
            const salt = bcrypt_1.default.genSaltSync();
            body.csv = bcrypt_1.default.hashSync(body.csv, salt);
        }
        yield targeta.update(body);
        res.json({ targeta });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTargeta = putTargeta;
const deleteTargeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const targeta = yield targeta_1.default.findByPk(id);
    if (!targeta) {
        return res.status(404).json({
            msg: `No existe un targeta con el id : ${id}`
        });
    }
    // eliminamos el targeta
    yield targeta.destroy();
    res.json(targeta);
});
exports.deleteTargeta = deleteTargeta;
const deleteTargetaState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const targeta = yield targeta_1.default.findByPk(id);
    if (!targeta) {
        return res.status(404).json({
            msg: `No existe un usuario con el id : ${id}`
        });
    }
    // actualizamos el estado..
    yield targeta.update({ estado: false });
    res.json(targeta);
});
exports.deleteTargetaState = deleteTargetaState;
//# sourceMappingURL=targeta.js.map