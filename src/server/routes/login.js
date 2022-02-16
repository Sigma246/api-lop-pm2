import express from 'express';
const router = express.Router();


import { add, find_or_add, find } from '../handlers/login_handler.js';

router
    .route(`/login_create`)
        // save new user
        .post( add );

router
    .route(`/loginandcreate`)
        // find and save new user
        .post( find_or_add );
    

router
    .route(`/login_user`)
        // save new user
        .post( find );


export default router;