"use strict";

/************************************************
 * Start file, init the app and clusterize pm2+redis  *
 *                                              *
  *
 ************************************************/


import bootstrap from './server/bootstrap.js';
import config from './config/server.js';
import logger from './log/index.js';
import http from 'http';
import { Server } from 'socket.io';
import app from './server/app.js';
import connections from './config/connections.js'
import redisAdapter from 'socket.io-redis';
import { instrument } from '@socket.io/admin-ui';
import contador from './app/sockets/contador_sockets.js';
import chat_room from './app/sockets/chats_rooms_sockets.js';


const httpServer = http.createServer(app);

bootstrap()

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
})

/*  
io.adapter(redisAdapter({ 
  host: connections.redis.host_rds,
  port: connections.redis.port_rds, 
}));
 */
 
io.adapter(redisAdapter(connections.redis.port_rds, connections.redis.host_rds,
  { auth_pass: connections.redis.pass_rds, tls: { servername: connections.redis.host_rds }  }));


httpServer.listen(config.port, () => {
  logger.info(`App server listen on ${config.host}:${config.port}`);
})

instrument(io, { auth: false });
contador(io);chat_room(io);
