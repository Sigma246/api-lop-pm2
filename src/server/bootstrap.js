'use strict';

/*******************************************************************************
 * Bootstrap files to promisify all the things needed before start the server, *
 * like database connections                                                   *
 *                                                                             *
                                 *
 *******************************************************************************/

import mongoose from './../connections/mongoose.js';
import models from './../app/model/index.js';

export default () => Promise.all([
    mongoose,
    models
]);