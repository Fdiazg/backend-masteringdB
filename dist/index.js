"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./classes/server"));
const defaul_routes_1 = __importDefault(require("./routes/defaul.routes"));
const mastering_routes_1 = __importDefault(require("./routes/mastering.routes"));
const server = new server_1.default();
const cors = require('cors');
server.app.use(cors());
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use('/', defaul_routes_1.default);
server.app.use('/mastering', mastering_routes_1.default);
mongoose_1.default.connect('mongodb+srv://user_mastering:masteringPass2023dB@cluster0.yyvysw0.mongodb.net/?retryWrites=true&w=majority', (error) => {
    if (error) {
        throw error;
    }
    console.log('Bd online');
});
server.Start(() => {
    console.log(`servidor corriendo en puerto ${server.port}`);
});
