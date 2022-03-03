'use strict';

import { find_or_add as find_or_add_login } from './login_service.js';
import mailing from '../../server/lib/mailing.js';

export const find_or_add = data =>
    find_or_add_login(data)
        .then(mailing.mailing)
        .catch(e => { throw { code: 403, error: e } })
