import { find_or_add as mailing_service } from '../../app/service/mailing_service.js';

export const find_or_add = (req, res, next) => mailing_service(req.body)
  .then(user => {
    res.io({
      code: 200,
      message: "success.add_user",
      data: { user }
    })
  })
  .catch(error =>
    res.io({
      code: 500,
      message: "error.mailing",
      data: { error }
    })
  );
