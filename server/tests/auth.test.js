import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## Authentication APIs', () => {
  let token;
  const user = {
    username: 'pablo',
    password: 'rectius'
  };

  describe('# POST /api/auth/login', () => {
    it('should return a JWT token', (done) => {
      request(app)
        .post('/api/auth/login')
        .send(user)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.have.property('username');
          expect(res.body).to.have.property('token');
          expect(res.body.username).to.equal(user.username);
          token = res.body.token;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/auth/random-number', () => {
    it('should get a random number', (done) => {
      request(app)
        .get('/api/auth/random-number')
        .set('Authorization', `Bearer ${token}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.have.property('user');
          expect(res.body.user.username).to.equal(user.username);
          done();
        })
        .catch(done);
    });
  });
});
