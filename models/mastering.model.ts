import { Document, model, Schema } from "mongoose";

const masteringSchema = new Schema({
    artista:{
        type: String,
    },
    nombreLanzamiento:{
        type: String
    },
    discoTipo:{
        type: String
    },
    fechaLanzamiento:{
        type: String
    },
    portada:{
        type: String
    }

});

interface IMastering extends Document{
    artista: string;
    nombreLanzamiento: string;
    discoTipo: string;
    fechaLanzamiento: string;
    portada: string;
}

export const Mastering = model<IMastering>('Mastering', masteringSchema);