import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/defaul.routes";
import masteringRoutes from "./routes/mastering.routes";

const server = new Server();

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}));

server.app.use('/', defaultRoutes);
server.app.use('/mastering', masteringRoutes);

mongoose.connect('mongodb://localhost:27017/masteringDb', (error)=>{
    if(error){
        throw error;
    }
    console.log('Bd online');
})

server.Start(()=>{
    console.log(`servidor corriendo en puerto ${server.port}`);
})