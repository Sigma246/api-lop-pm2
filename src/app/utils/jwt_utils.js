'use strict';

import jwt from 'jsonwebtoken';
import { secret } from '../../config/jwt.js';

export const vify_jwt = token => new Promise((resolve, reject) => jwt.verify(token, secret, (err, decoded) => { decoded == undefined ? reject(err) : resolve(decoded) }))