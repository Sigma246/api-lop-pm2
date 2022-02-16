'use strict';

import Sessions from '../model/sessions.js';

// add user login
export const add_sessions = data => new Sessions(data).save()
.then(res=> res )
.catch(e=>{ throw {code: 403,message: "Sesion add_sessions", error: e} })
