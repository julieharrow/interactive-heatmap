// CRUD for point

var _ = require('lodash');
var Point = require('./point_model.js');

module.exports = function(app) {

  /* Create */
  app.post('/point', function(req, res) {
    var newPoint = new Point(req.body);
    newPoint.save(function(err) {
      if (err) {
        res.json({info: 'error during point create', error: err});
      };
      res.json({info: 'point created successfully'});
    });
  });

  /* Read */
  app.get('/point', function(req, res) {
    Point.find(function(err, points) {
      if (err) {
        res.json({info: 'error during find points', error: err});
      };
      res.json({info: 'points found successfully', data: points});
    });
  });

  app.get('/point/:id', function(req, res) {
    Point.findById(req.params.id, function(err, point) {
      if (err) {
        res.json({info: 'error during find point', error: err});
      };
      if (point) {
        res.json({info: 'point found successfully', data: point});
      } else {
        res.json({info: 'point not found', data: points});
      }
    });
  });

  /* Update */
  app.get('/point/:id', function(req, res) {
    Point.findById(req.params.id,function(err, point) {
      if (err) {
        res.json({info: 'error during find point', error: err});
      };
      if (point) {
        _.merge(point, req.body);
        point.save(function(err) {
          if (err) {
            res.json({info: 'error during point update', error: err});
          } else {
            res.json({info: 'point updated successfully', data: points});
          };
        });
      } else {
        res.json({info: 'point not found'});
      }
    });
  });

  /* Delete */
  app.delete('/point/:id', function(req, res) {
    Point.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.json({info: 'error during remove point', error: err});
      };
      res.json({info: 'point removed successfully'});
    });
  });
};
