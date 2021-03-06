'use strict';

import { add_chat, update_state_chat, search_all_chat } from '../service/chats_rooms_service.js';
import { vify_jwt } from '../utils/jwt_utils.js';

export default (io) => {

    const chats_rooms = io.of("/chats_rooms");

    chats_rooms.use((socket, next) =>
        vify_jwt(socket.handshake.auth['x-auth-token'])
            .then(next())
            .catch(err => next(new Error(err))));

    chats_rooms.on('connection', socket => {

        // ENTRANDO AL ROOM or FILTER
        socket.on('rooms', room =>
            search_all_chat(room)
                .then(messages => {
                    if (room.room) { socket.join(room.room) };
                    if (room.filter) { socket.join(room.filter) };
                    return messages;
                })
                .then(messages => room.room ?
                    socket.emit('historial', messages) :
                    socket.emit('historial_filter', messages)
                )
                .catch(e => { console.log(e); throw e }) );

        //NEVIANDO NUEVO MENSAJE AL FILTRO
        socket.on('message', menssage =>
            //add_chat({ ...menssage, state: 'pending' })  // para filtro
            add_chat({...menssage, state: 'accepted' })  // sin filtro
            //.then(res => chats_rooms.to(res.filter).emit('message', {  // para filtro
                .then(res=> chats_rooms.to( res.room ).emit('message', {  // sin filtro
                    _id: res.id,
                    user: res.user,
                    message: res.message,
                    createdAt: res.createdAt
                }))
                .catch(e => { console.log(e); throw e }) );

        // ENVIANDO MENSAJE AL ROOM
        socket.on('message_ge', data => 
            update_state_chat(data._id, { state: 'accepted' })
                .then(res => {
                    chats_rooms.to(res.room).emit('message', {
                        _id: res.id,
                        user: res.user,
                        message: res.message,
                        createdAt: res.createdAt
                    });
                    chats_rooms.to(res.filter).emit('delete', { _id: res.id });
                })
                .catch(e => { console.log(e); throw e }) );

        // RECHAZAR MENSAJE POR FILTRO
        socket.on('disabled', data =>
            update_state_chat(data._id, { state: 'disabled' })
                .then(res => chats_rooms.to(res.filter).emit('delete', { _id: res.id }))
                .catch(e => { console.log(e); throw e }) );


        socket.on("disconnect", reason => { });

    });


};

