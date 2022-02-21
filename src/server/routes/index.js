'use strict';

/************************************************
 * Routes for the module ping                   *
 *                                              *
  *
 ************************************************/
import login from './login.js'
import mailing from './mailing.js';
//import encuesta from './encuesta';


import { Router } from "express";

const router = Router();

/**
 * Route to map:
 *  get: /welcome/
 */
router.use("/", login);
router.use("/", mailing);
//router.use("/", encuesta);


export default router;
