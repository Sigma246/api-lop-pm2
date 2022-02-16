import mongoose from 'mongoose';

const Chats_roomsDB = new mongoose.Schema({
   
    user: {type: String},
    room: {type: String},
    filter: {type: String},
    message:{type: String},
    state:{type: String},

},{timestamps: true });

    /* 
        ** NOTA AZURE: CREAR INDIXES DE createdAt -1 PARA MOSTRAR EL HISTORIAL DE MENSAJES 
    */

const Chats_rooms = mongoose.model('Chats_rooms', Chats_roomsDB);

export { Chats_roomsDB, Chats_rooms as default };