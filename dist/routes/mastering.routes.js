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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mastering_model_1 = require("../models/mastering.model");
const masteringRoutes = (0, express_1.Router)();
masteringRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mastering = yield mastering_model_1.Mastering.find();
    return res.json({
        ok: true,
        mastering,
    });
}));
masteringRoutes.get("/paging", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 10;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const mastering = yield mastering_model_1.Mastering.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        mastering
    });
}));
masteringRoutes.post("/", (req, res) => {
    const body = req.body;
    const mastering = {
        artista: body.artista,
        nombreLanzamiento: body.nombreLanzamiento,
        discoTipo: body.discoTipo,
        fechaLanzamiento: body.fechaLanzamiento,
        portada: body.portada,
    };
    mastering_model_1.Mastering.create(mastering)
        .then((masteringDb) => {
        return res.json({
            ok: true,
            masteringDb,
        });
    })
        .catch((err) => {
        return res.json({
            ok: false,
            err,
        });
    });
});
masteringRoutes.put("/:id", (req, res) => {
    const masteringId = req.params.id;
    const body = req.body;
    const mastering = {
        artista: body.artista,
        nombreLanzamiento: body.nombreLanzamiento,
        discoTipo: body.discoTipo,
        fechaLanzamiento: body.fechaLanzamiento,
        portada: body.portada,
    };
    mastering_model_1.Mastering.findByIdAndUpdate(masteringId, mastering).then((masteringDb) => {
        return res.json({
            ok: true,
            masteringDb,
        });
    });
});
masteringRoutes.delete("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const masteringId = req.query.id;
    if (!masteringId) {
        return res.json({
            ok: false,
            msj: "Registro no existe",
        });
    }
    yield mastering_model_1.Mastering.findByIdAndDelete(masteringId)
        .then((mastering) => {
        return res.json({
            ok: true,
            msj: "Eliminado correctamente",
        });
    })
        .catch((err) => {
        return res.json({
            ok: false,
            msj: "Registro no existe",
        });
    });
}));
exports.default = masteringRoutes;
