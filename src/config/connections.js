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
      port_rds: process.env.REDISCLOUD_PORT || "6380",   //"6379,"
      host_rds: process.env.REDISCACHEHOSTNAME || 'redis-kickoff.redis.cache.windows.net', //"127.0.0.1",
      pass_rds: process.env.REDISCACHEKEY || "qkVMpb3zilGwCDwzo8snKU3lQGSjjLwNUAzCaCjMZKE=",
      url_rds: process.env.REDISCLOUD_URL || "redis-kickoff.redis.cache.windows.net:6380,password=qkVMpb3zilGwCDwzo8snKU3lQGSjjLwNUAzCaCjMZKE=,ssl=True,abortConnect=False"
    }
};
