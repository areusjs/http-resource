/**
 * Create an HTTP resource
 *
 * @param {AreusDI} di
 * @param {express.Router} Router
 */

module.exports = function (di, Router) {
  return function resource(name) {
    return handle.bind(null, di, Router, name);
  };
};

function handle(di, Router, name, req, res, next) {
  var router = new Router(), resource;

  try {
    resource = di.create('./resources/' + name);
    resource.route(router);
  } catch (err) {
    return next(err);
  }

  router.handle(req, res, next);
}
