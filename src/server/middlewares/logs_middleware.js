"use strict";

/**
 * Middleware to handle logs report 
 */

export let logs_report = async(req, res, next)=>{
   

        console.log("***********************")
        console.log(req.method)
        console.log(req.originalUrl)
        console.log("***********************")
        


        console.log("***********************")
        console.log(JSON.stringify(req))
        console.log("***********************")

        
        next();
};

//module.exports = {logs_report};