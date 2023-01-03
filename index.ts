import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/defaul.routes";
import masteringRoutes from "./routes/mastering.routes";

const server = new Server();
const cors = require('cors');

server.app.use(cors());
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}));

server.app.use('/', defaultRoutes);
server.app.use('/mastering', masteringRoutes);

mongoose.connect('mongodb+srv://user_mastering:masteringPass2023dB@cluster0.yyvysw0.mongodb.net/?retryWrites=true&w=majority', (error)=>{
    if(error){
        throw error;
    }
    console.log('Bd online');
})

server.Start(()=>{
    console.log(`servidor corriendo en puerto ${server.port}`);
})