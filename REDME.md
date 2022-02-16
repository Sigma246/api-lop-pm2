# LOP - backend

## How to start the app ON A LOCAL ENV

Requirements
  - Node 16.13.2
  - install nodemon global
  - Linux/Mac OS

1) Set the ENV Variables

```bash
  
  CONCURRENCY_WEB # Number of workers
  MONGODB_URI # Url mongodb local
  MONGO_DEBUG # default true
  JWT_SECRET # secret token serial
  JWT_AUTH_EXPIRESIN # expires token
  BASE_URL # defaul localhost:3000
  FRONT_END_URL # default localhost:8081
  PORT # default 3000
  HOST # default 0.0.0.0
  
```

2) Run this command:

```bash
npm run start-dev
```

## How to start the app ON A PRODUCTION ENV

Requirements
  - Node 14.18.1
  - Linux/Mac OS

1) Set the ENV Variables

```bash
  
  CONCURRENCY_WEB # Number of workers
  MONGODB_URI # Url mongodb provider
  MONGO_DEBUG
  JWT_SECRET
  JWT_AUTH_EXPIRESIN
  FRONT_END_URL
  
 
```

2) Run this commands:
```bash
npm run start
```
