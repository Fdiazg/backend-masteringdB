"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mastering = void 0;
const mongoose_1 = require("mongoose");
const masteringSchema = new mongoose_1.Schema({
    artista: {
        type: String,
    },
    nombreLanzamiento: {
        type: String
    },
    discoTipo: {
        type: String
    },
    fechaLanzamiento: {
        type: String
    },
    portada: {
        type: String
    },
    linkSpotify: {
        type: String
    }
});
exports.Mastering = (0, mongoose_1.model)('Mastering', masteringSchema);
