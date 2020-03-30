"use strict";

module.exports = function (app) {
  app.get('/', function (req, res) {
    var msg = {
      service: 'People API',
      status: 'ok'
    };
    res.json(msg);
  });
};