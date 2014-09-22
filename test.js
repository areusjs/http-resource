var ahr = require('./'),
  stub = require('sinon').stub;

describe('Areus HTTP Resource', function () {
  var unit, di, Router, resource;

  beforeEach(function () {
    function noop() {}
    di = stub({create: noop});
    resource = stub({route: noop});
    Router = function () {};
    Router.prototype.handle = stub();
    unit = ahr(di, Router);
  });

  it('should create a resource', function () {
    di.create.returns(resource);
    unit('hello')();
    resource.route.calledOnce.should.be.ok;
  });
});
