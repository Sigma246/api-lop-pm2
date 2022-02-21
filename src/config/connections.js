"use strict";
/*************************************
 * Config file for connections
 *
 
 *************************************/

export default {
    mongo: {
      url: process.env.MONGODB_URI || "mongodb://localhost:27017/lop",  
      debug: process.env.MONGO_DEBUG || true
    },
    
    redis: {
      port_rds: process.env.REDISCLOUD_PORT || "6379",   //"6380"
      host_rds: process.env.REDISCACHEHOSTNAME || "127.0.0.1",
      pass_rds: process.env.REDISCACHEKEY || "",
      url_rds: process.env.REDISCLOUD_URL || "redis://127.0.0.1:6379"
    }
};
