import express from 'express';
const router = express.Router();

import { find_or_add } from '../handlers/mailing_handler.js';

router
  .route(`/mailing_create`)
  // save new user and send email
  .post(find_or_add);


export default router;