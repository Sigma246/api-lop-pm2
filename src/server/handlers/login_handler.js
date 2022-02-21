import { find_or_add as findoradd, find as findservice, generate } from '../../app/service/login_service.js';
import jwt from "jsonwebtoken"
import { header, secret, auth } from '../../config/jwt.js';

export const add = (req, res, next) => generate(req.body)
  .then(user => jwt.sign({ user }, secret, auth))
  .then(key => res.status(200).header(header, key).json({ message: 'Login success' }))
  .catch(error => res.status(error.code).json({ error }));


export const find_or_add = (req, res, next) => findoradd(req.body)
  .then(user => {
    let key = jwt.sign({ user }, secret, auth)
    res.header(header, key).io({
      code: 200,
      message: "success.add_user",
      data: { user }
    })
  })
  .catch(error =>
    res.io({
      code: 500,
      message: "error.add_duplicate_key",
      data: { error }
    })
  );

export const find = (req, res, next) => findservice(req.body)
  .then(user => {
    let key = jwt.sign({ user }, secret, auth)
    res.header(header, key).io({
      code: 200,
      message: "success.find_user",
      data: { user }
    })
  })
  .catch(error =>
    res.io({
      code: 500,
      message: "error.find_user",
      data: { error }
    })
  );
