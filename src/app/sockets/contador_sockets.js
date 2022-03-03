'use strict';

import { add_sessions } from '../service/sessions_service.js';
import { time, msToTime } from '../utils/time_utils.js'
import { vify_jwt } from '../utils/jwt_utils.js'

export default (io) => {

    const contador = io.of("/contador");

    contador.use((socket, next) =>
        vify_jwt(socket.handshake.auth['x-auth-token'])
            .then(next())
            .catch(err => next(new Error(err))));

    contador.on('connection', socket => {

        socket.on("disconnect", reason => {

            vify_jwt(socket.handshake.auth['x-auth-token'])
                .then(({ user: { email, nombre } }) => time()
                    .then(date_out => {
                        return {
                            nombre,
                            email,
                            location: socket.handshake.query.url,
                            date_in: socket.handshake.query.time,
                            date_out
                        }
                    })
                )
                .then(data => msToTime(new Date(data.date_out) - new Date(data.date_in))
                    .then(date_time => { data.date_time = date_time; return data })
                )
                .then(add_sessions)
                .catch(e => { console.log(e); throw e })

        });

    });
};





