'use strict';


import Chats_rooms from '../model/chats_rooms.js';


// add message chat
export const add_chat = data => new Chats_rooms(data).save()
.then(res=> res )
.catch(e=>{ throw {code: 403,message: "Mensaje no guardado", error: e} })

// change state chat
export const update_state_chat = (id, state) => Chats_rooms.findByIdAndUpdate(id,{'$set': state} )
.then(res=> res )
.catch(e=>{ throw {code: 403,message: "Mensaje no actualizado", error: e} })

// search message all 
export const search_all_chat = data => Chats_rooms.find(data)
.sort({'createdAt': -1})
.limit(30)
.then(res=> res )
.catch(e=>{ throw {code: 403,message: "Historial no actualizado", error: e} })
