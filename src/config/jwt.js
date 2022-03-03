'use strict';
/*************************************************
 * JWT configuration variables                   *
 *                                               *
   *
 *************************************************/


export const header = "x-auth-token";
export const secret = process.env.JWT_SECRET || "tddDjg5zse$kpDndyecykuwc^4i8tprecgzhvn^kwyjxqrwgsXet^YHngjqufka,";
export const auth = {
    expiresIn: parseInt(process.env.JWT_AUTH_EXPIRESIN) || 60 * 60 * 1 // 5 hours in seconds
};


