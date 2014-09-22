# HTTP Resource [![Build Status](https://secure.travis-ci.org/areusjs/http-resource.png)](http://travis-ci.org/areusjs/http-resource) [![NPM version](https://badge.fury.io/js/areus-http-resource.svg)](http://badge.fury.io/js/areus-http-resource)

This is a helper library used to set-up routing in an `areus-di` `express` app.


## Usage

`server.js`
```javascript
var express = require('express'),
  di = require('areus-di')(__dirname),
  resource = require('areus-http-resource')(di, express.Router),
  app = express();

app.use('/api/users', resource('users'));
app.use('/api/articles', resource('articles'));

app.listen(3000);
```

`resources/users.js`
```javascript
module.exports = UsersResource;

function UsersResource() {
}

UsersResource.prototype.route = function (router) {
  router.get('/', this.getAll.bind(this));
};

UsersResource.prototype.getAll = function (req, res, next) {
  res.json([
    {id: 1},
    {id: 2}
  ]);
};
```

`route()` is the only special method. It takes an `express.Router` as the first and only argument.
Use it to delegate handling of different types of requests to the appropriate methods of the class.


## License
[MIT](LICENSE)
