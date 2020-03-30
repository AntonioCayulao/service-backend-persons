"use strict";

module.exports = function (app) {
  app.get('/', function (req, res) {
    msg = {
      service: 'People API',
      status: 'ok'
    };
    res.json(msg);
  });
};