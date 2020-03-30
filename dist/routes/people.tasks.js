"use strict";

module.exports = function (app) {
  var People = app.db.models.People;
  app.route('/people').get(function (req, res) {
    People.findAll({}).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(404).json({
        msg: error.message
      });
    });
  }).post(function (req, res) {
    console.log(req);
    People.create(req.body).then(function (result) {
      return res.status(201).json(result);
    })["catch"](function (error) {
      res.status(400).json({
        msg: error.message
      });
    });
  });
  app.route('/people/:id').get(function (req, res) {
    People.findOne({
      where: req.params
    }).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(404).json({
        msg: error.message
      });
    });
  }).put(function (req, res) {
    People.update(req.body, {
      where: req.params
    }).then(function (result) {
      return res.sendStatus(204);
    })["catch"](function (error) {
      res.status(412).json({
        msg: error.message
      });
    });
  })["delete"](function (req, res) {
    People.destroy({
      where: req.params
    }).then(function (result) {
      return res.sendStatus(200);
    })["catch"](function (error) {
      res.status(404).json({
        msg: error.message
      });
    });
  });
};