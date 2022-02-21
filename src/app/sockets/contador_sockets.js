"use strict";

import jwt from 'jsonwebtoken';
import { Socket } from 'socket.io';
import { secret } from '../../config/jwt.js';
import { add_sessions } from '../service/sessions_service.js';

export default (io) => {

  const contador = io.of("/contador");

  contador.use((socket, next) => { 
    jwt.verify(socket.handshake.auth['x-auth-token'], secret, (err, decoded) =>{ decoded == undefined? next(new Error (err)) : next()  })
  });

  contador.on('connection', socket => {

    console.log("entrooo")
    console.log(socket)

    socket.on("disconnect", reason =>{


      console.log(socket)
/* 
      vify_jwt(socket.handshake.auth['x-auth-token'], secret)
      .then( ({user:{ email, nombre } }) => time() 
        .then(date_out=>{return { 
          nombre,
          email,
          location: socket.handshake.query.url,
          date_in : socket.handshake.query.time,
          date_out
        }})
      )
      .then(data => msToTime(new Date(data.date_out) - new Date(data.date_in)) 
        .then(date_time=>{data.date_time = date_time; return data})
      )
      .then(add_sessions)
      .catch(e=> {console.log(e);throw e})
 */


    });

  });    
};


const time = () => new Promise ((resolve, reject)=> resolve( new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City"}) ) );   
const vify_jwt = (token, secret) => new Promise((resolve, reject ) => jwt.verify(token, secret, (err, decoded) =>{ decoded == undefined? reject(err) : resolve(decoded)  }) ) 
const msToTime = duration => new Promise((resolve, reject)=>{
    
    let seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    resolve( hours + ":" + minutes + ":" + seconds )
})
