"use strict";

/**
 * File to load all the schemas
 *
 * This file loads all the files then add it to a JSON object, if auth_schemas.js is created in this directory, the final
 * config object will be:
 *
 * {
 *  auth: {[auth_schemas.js content]}
 * }
 *
 
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// List files in this directory
let files = fs.readdirSync(__dirname);

console.log('Files', JSON.stringify(files));

// For every file found add a property to config var
let schemas = files.reduce(function(schemas, file) {
  // Prevent load this file

  if (file !== path.basename(__filename)) {
    let name = path.basename(file, path.extname(file)).replace("_schemas", "");
    schemas[name] = import(path.join(__dirname, file));
  }
  return schemas;
}, {});


export default schemas;
