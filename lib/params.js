var qs = require("qs");

module.exports = function(func) {
  return function(req, res, next) {
    req.params = func(qs.parse(req._parsedUrl.query));
    next();
  }
}
