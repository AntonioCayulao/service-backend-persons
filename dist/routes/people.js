"use strict";

module.exports = function (app) {
  var People = app.db.models.People;
  app.route('/people').get(function (req, res) {
    People.findAll({}).then(function (result) {
      return res.json(result);
    })["catch"](function (error) {
      res.status(404);
    });
  }).post(function (req, res) {
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
      if (result == null) {
        res.status(404).send('Not found');
      } else {
        res.json(result);
      }
    })["catch"](function (error) {
      res.status(404);
    });
  }).put(function (req, res) {
    People.update(req.body, {
      where: req.params
    }).then(function (result) {
      if (result[0] == 0) {
        res.status(404).send('Not found');
      } else {
        res.sendStatus(200);
      }
    })["catch"](function (error) {
      res.status(404);
    });
  })["delete"](function (req, res) {
    People.destroy({
      where: req.params
    }).then(function (result) {
      if (result == 0) {
        res.status(404).send('Not found');
      } else {
        res.sendStatus(200);
      }
    })["catch"](function (error) {
      res.status(404);
    });
  });
};