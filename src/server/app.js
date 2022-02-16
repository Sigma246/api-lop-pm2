"use strict";

/************************************************
 * Export the express app                       *
 *                                              *
  *
 ************************************************/
import express from 'express';
import cors from 'cors';
import { header } from '../config/jwt.js'

/**
 * Configure passport strategies
 */

const app = express();

/***************
 * CORS config     *
 ***************/
const corsOptions = {
    origin: '*',
    exposedHeaders: header
}
app.use(cors(corsOptions))

/***************
 * Globals     *
 ***************/
import logger from './../log/index.js';
app.set("logger", logger);


/***************
 * Middlewares *
 ***************/
import bodyParser from 'body-parser';
import io from './middlewares/io_middleware.js';
import error from './middlewares/error_middleware.js';
//import { logs_report } from './middlewares/logs_middleware';

app.use(io);
//app.use(logs_report);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**************
 * App routes *
 **************/

import routes from './routes/index.js';

app.use(routes);

// 404 Routes
app.use((req, res, next) => res.io({ code: 404, message: "error.not_found" }));

// THIS MANDATORY NEEED TO BE THE LAST MIDDLEWARE
// DON USE MIDDLEWARES AFTER THIS
app.use(error);
export default app;