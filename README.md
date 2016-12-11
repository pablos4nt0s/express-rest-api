# express-rest-api [![travis][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Issue Count][codeclimate-image]][codeclimate-url] [![Commitizen friendly][commitizen-image]][commitizen-url]

[travis-image]: https://img.shields.io/travis/rectius/express-rest-api/master.svg
[travis-url]: https://travis-ci.org/rectius/express-rest-api
[coveralls-image]: https://coveralls.io/repos/github/rectius/express-rest-api/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/rectius/express-rest-api?branch=master
[codeclimate-image]: https://codeclimate.com/github/rectius/express-rest-api/badges/issue_count.svg
[codeclimate-url]: https://codeclimate.com/github/rectius/express-rest-api
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/


### simple, robust, REST API implementation

Node.js implementation of a REST API using express, mongoose and ES6. It uses JWT authentication and brute-force protection by rate limiting income requests. Also helps your team to promote best practices by following simple conventions.

## features

- ES6 via Babel [Babel](https://babeljs.io/).
- Authentication via JsonWebToken [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).
- Code Linting [ESLint](http://eslint.org). [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
- Auto server restart [nodemon](https://github.com/remy/nodemon).
- ES6 Code Coverage via [istanbul](https://www.npmjs.com/package/istanbul).
- Debugging via [debug](https://www.npmjs.com/package/debug).
- Promisified Code via [bluebird](https://github.com/petkaantonov/bluebird), [supertest-as-promised](https://www.npmjs.com/package/supertest-as-promised).
- API parameter validation via [express-validation](https://www.npmjs.com/package/express-validation).
- Secure app via [helmet](https://github.com/helmetjs/helmet).
- Brute-force protection by rate limiting requests [express-brute](https://github.com/AdamPflug/express-brute).
- Uses [yarn](https://yarnpkg.com) over npm.
- CORS support via [cors](https://github.com/expressjs/cors).
- Uses [http-status](https://www.npmjs.com/package/http-status) to set http status code.
- Has `.editorconfig` which helps developers define and maintain consistent coding styles between different editors and IDEs.

## install

Clone the repo:
```sh
git clone https://github.com/rectius/express-rest-api.git
cd express-rest-api
```

Install tools:
```js
npm install -g istanbul coveralls commitizen
```

Install yarn:
```js
npm install -g yarn
```

Install dependencies:
```sh
yarn
```

## start server

Run server:
```sh
# Start server
yarn start

# Selectively set DEBUG env var to get logs
DEBUG=express-rest-api:* yarn start
```
Refer [debug](https://www.npmjs.com/package/debug) to know how to selectively turn on logs.

## tests

Tests:
```sh
# Run tests written in ES6 along with code coverage
yarn test

# Run tests on file change
yarn test:watch

# Run tests enforcing code coverage (configured via .istanbul.yml)
yarn test:check-coverage
```

Lint:
```sh
# Lint code with ESLint
yarn lint

# Run lint on any file change
yarn lint:watch
```

Other gulp tasks:
```sh
# Wipe out dist and coverage directory
gulp clean

# Default task: Wipes out dist and coverage directory. Compiles using babel.
gulp
```

## deployment

```sh
# compile to ES5
1. yarn build

# upload dist/ to your server
2. scp -rp dist/ user@dest:/path

# install production dependencies only
3. yarn --production

# Use any process manager to start your services
4. pm2 start dist/index.js
```

## maintainers

Pablo Souza (Twitter: <a href="https://twitter.com/pablo_souza">@pablo_souza</a>)

## license

MIT. Copyright (c) [Pablo Souza](http://pablosouza.rectius.com.br).
