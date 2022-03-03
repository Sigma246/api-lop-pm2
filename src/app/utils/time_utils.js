'use strict';

export const time = () => new Promise((resolve, reject) => resolve(new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" })));

export const msToTime = duration => new Promise((resolve, reject) => {

    let seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    resolve(hours + ":" + minutes + ":" + seconds)
});