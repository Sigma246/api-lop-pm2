"use strict";
/**************************************************************************************************
 * Connect to mongodb using mongoose, it export a promise to handle the connected and error event *
 *                                                                                                *
                                                    *
 **************************************************************************************************/

import mongoose from 'mongoose';
import config from '../config/connections.js';
import logger from '../log/index.js';

 // ============================
 //  Connections mongodb
 // ============================
 
const options = { useNewUrlParser: true, useUnifiedTopology: true}
let connection = null;

export default new Promise((resolve, reject) => {
    
    connection = mongoose.connect(config.mongo.url, options);
    mongoose.set("debug", config.mongo.debug);

    connection
    .then(() =>{
        logger.debug("Mongoose connection... debug:", config.mongo.debug);
        resolve();
    })
    .catch(e =>{
        logger.error('connection error mongoose');
        reject(e);
    });

    return connection;
});

 