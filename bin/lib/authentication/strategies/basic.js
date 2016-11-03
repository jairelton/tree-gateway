"use strict";
var passport = require('passport');
var passport_http_1 = require('passport-http');
var pathUtil = require("path");
module.exports = function (apiKey, authConfig, settings) {
    var p = pathUtil.join(settings.middlewarePath, 'authentication', 'verify', authConfig.verify);
    var verifyFunction = require(p);
    passport.use(apiKey, new passport_http_1.BasicStrategy(verifyFunction));
};

//# sourceMappingURL=basic.js.map