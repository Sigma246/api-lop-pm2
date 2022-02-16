'use strict';

import Usuario from '../model/users.js';


// add user login
export const generate = data => new Usuario({ ...data }).save()
.then(res=> res )
.catch(e=>{ throw {code: 403,message: "¡El usuario ya está registrado!", error: e} })


// find and add login
export const find_or_add = data => Usuario.findOne({email: data.email})
.then(res=> new Promise ((resolve, reject)=> res == null? generate(data).then(res=> resolve(res)) : resolve(res) ) )
.catch(e=>{ throw {code: 403, error: e} })


// find user login
export const find = data => Usuario.findOne({email: data.email})
.then(res=> new Promise ((resolve, reject)=> res == null? reject({data: data, message: "Usuario no registrado / Password incorrecto "}) : resolve(res) ) )
.catch(e=>{ throw {code: 403, error: e} })
