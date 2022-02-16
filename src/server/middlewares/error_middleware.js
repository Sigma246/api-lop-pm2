"use strict";

/**
 * Middleware to handle app errors
 *
 
 */

import logger from "./../../log/index.js";

import http from "http";

/**
 * Function to handle unknow errors
 * @param  {Object} req HttpRequest object
 * @param  {Object} res HttpResponse object
 */
const handleUnknowErrors = (err, req, res) =>
  res.io(err.details || { code: 500, message: "error.internal_error" });

/**
 * Function to handle body request errors
 * @param  {Object} req HttpRequest object
 * @param  {Object} res HttpResponse object
 */
const handleParseBodyError = (req, res) =>
  res.io({ code: 422, message: "error.malformed_body" });

/**
 * Error handler middleare
 */
export default (err, req, res, next) => {
  logger.info("Error handler:", err.details || err);
  switch (true) {
    case err instanceof SyntaxError:
      handleParseBodyError(req, res);
      break;
    default:
      handleUnknowErrors(err, req, res);
      break;
  }
};
