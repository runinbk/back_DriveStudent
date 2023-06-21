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
exports.deleteUsuarioState = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuario_1.default.findAll();
    res.json({ usuario });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json({ usuario });
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id : ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const usuario = new usuario_1.default(body);
        // Encriptar la contraseña
        const salt = bcrypt_1.default.genSaltSync();
        usuario.password = bcrypt_1.default.hashSync(usuario.password, salt);
        yield usuario.save();
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
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: `No existe un usuario con el id : ${id}`
            });
        }
        if (body.password) {
            // Encriptar la contraseña
            const salt = bcrypt_1.default.genSaltSync();
            body.password = bcrypt_1.default.hashSync(body.password, salt);
        }
        yield usuario.update(body);
        res.json({ usuario });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: `No existe un usuario con el id : ${id}`
        });
    }
    // eliminamos el usuario
    yield usuario.destroy();
    res.json(usuario);
});
exports.deleteUsuario = deleteUsuario;
const deleteUsuarioState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: `No existe un usuario con el id : ${id}`
        });
    }
    // actualizamos el estado..
    yield usuario.update({ estado: false });
    res.json(usuario);
});
exports.deleteUsuarioState = deleteUsuarioState;
//# sourceMappingURL=usuarios.js.map