"use strict";

/************************************************
 * Start file, init the app and clusterize pm2  *
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
import { createClient } from 'redis';
import { createAdapter } from '@socket.io/redis-adapter';
import { instrument } from '@socket.io/admin-ui';

import contador from './app/sockets/contador_sockets.js';
import chat_room from './app/sockets/chats_rooms_sockets.js';

const pubClient = createClient({
  host: connections.redis.host_rds,
  port: connections.redis.port_rds,
  auth_pass: connections.redis.pass_rds,
  tls: { servername: connections.redis.host_rds }
});

const subClient = pubClient.duplicate();

const httpServer = http.createServer(app);

bootstrap()

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
})

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));
  httpServer.listen(config.port, () => {
    logger.info(`App server listen on ${config.host}:${config.port}`);
  })
});

instrument(io, { auth: false });
contador(io);chat_room(io);
