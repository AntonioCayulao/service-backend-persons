"use strict";

module.exports = function (app) {
  app.db.sequelize.sync().done(function () {
    app.listen(app.get('port'), function () {
      console.log('Server on port', app.get('port'));
    });
  });
};