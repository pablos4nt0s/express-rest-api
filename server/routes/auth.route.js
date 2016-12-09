import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import expressBrute from '../../config/express-brute';
import paramValidation from '../../config/param-validation';
import authCtrl from '../controllers/auth.controller';
import config from '../../config/env';

const router = express.Router(); // eslint-disable-line new-cap

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/login')
  .post(expressBrute.loginRateLimit().prevent, validate(paramValidation.login), authCtrl.login);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
router.route('/random-number')
  .get(
    expressJwt({ secret: config.jwtSecret }),
    expressBrute.userRateLimit().getMiddleware({
      key(req, res, next) {
        // prevent too many attempts for the same username
        next(req.user.username);
      }
    }),
    authCtrl.getRandomNumber);

export default router;
