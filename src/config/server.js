'use strict';
/**************************************************************************
 * Configuration server constants                                         *
 *                                                                        *
                            *
 **************************************************************************/

export default {
  /**
   * Default service configuration
   *
   * @type {Object}
   */
  baseUrl: process.env.BASE_URL || "http://localhost:3000/",
  frontEndUrl: process.env.FRONT_END_URL || "http://localhost:8081/",
  port: process.env.PORT || "3000",
  host: process.env.HOST || "http://localhost/",
};
