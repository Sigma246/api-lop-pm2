'use strict';

import Sessions from '../model/sessions.js';

// add user login
export const add_sessions = data =>{ 
return Sessions.findOneAndUpdate({ email: data.email, location: data.location, date_in: data.date_in },{$set:data},{upsert:true} )
.then(res=> res )
.catch(e=>{ throw {code: 403,message: "Sesion add_sessions", error: e} })
}