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
      port_rds: process.env.REDISCLOUD_PORT || "6380",   //"6380"
      host_rds: process.env.REDISCACHEHOSTNAME || "prueba-contador.redis.cache.windows.net",
      pass_rds: process.env.REDISCACHEKEY || "l4ExQSB1ohzXZujIKo1qQfqOBDK8o2OJoAzCaLRe4Q4=",
      url_rds: process.env.REDISCLOUD_URL || "redis://prueba-contador.redis.cache.windows.net:6380,password=l4ExQSB1ohzXZujIKo1qQfqOBDK8o2OJoAzCaLRe4Q4=,ssl=True,abortConnect=False"
    }
    /* redis: {
      port_rds: process.env.REDISCLOUD_PORT || "6379",   //"6380"
      host_rds: process.env.REDISCACHEHOSTNAME || "127.0.0.1",
      pass_rds: process.env.REDISCACHEKEY || "",
      url_rds: process.env.REDISCLOUD_URL || "redis://127.0.0.1:6379"
    } */
};
