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
exports.deleteStateBrevet = exports.deleteBrevet = exports.putBrevet = exports.postBrevet = exports.getBrevet = exports.getBrevets = void 0;
const brevet_1 = __importDefault(require("../models/brevet"));
const getBrevets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const brevet = yield brevet_1.default.findAll();
    res.json({ brevet });
});
exports.getBrevets = getBrevets;
const getBrevet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const brevet = yield brevet_1.default.findByPk(id);
    if (brevet) {
        res.json({ brevet });
    }
    else {
        res.status(404).json({
            msg: `No existe un brevet con el id ${id}`
        });
    }
});
exports.getBrevet = getBrevet;
const postBrevet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const brevet = new brevet_1.default(body);
        yield brevet.save();
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
exports.postBrevet = postBrevet;
const putBrevet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const brevet = yield brevet_1.default.findByPk(id);
        if (!brevet) {
            return res.status(404).json({
                msg: 'No existe el brevet con el id ' + id
            });
        }
        yield brevet.update(body);
        res.json(brevet);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putBrevet = putBrevet;
const deleteBrevet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const brevet = yield brevet_1.default.findByPk(id);
    if (!brevet) {
        return res.status(404).json({
            msg: 'No existe el brevet con el id ' + id
        });
    }
    yield brevet.destroy();
    res.json(brevet);
});
exports.deleteBrevet = deleteBrevet;
const deleteStateBrevet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const brevet = yield brevet_1.default.findByPk(id);
    if (!brevet) {
        return res.status(404).json({
            msg: 'No existe el brevet con el id ' + id
        });
    }
    // actualizamos el estado...
    yield brevet.update({ estado: false });
    res.json(brevet);
});
exports.deleteStateBrevet = deleteStateBrevet;
//# sourceMappingURL=brevet.js.map