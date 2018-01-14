import Products from '../models/products';

exports.all = function (req, res) {
  Products.all(function (err, docs) {
    if (err) {
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

exports.findById = function (req, res) {
  Products.findById(req.params.id, function (err, doc) {
    if (err) {
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

exports.create = function (req, res) {
  const product = {
    name: req.body.name
  };

  Products.create(product, function (err) {
    if (err) {
      return res.sendStatus(500);
    }
    res.send(product);
  });
};

exports.update = function (req, res) {
  const newData = {
    name: req.body.name
  };

  Products.update(req.params.id, newData, function (err) {
    if (err) {
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};

exports.delete = function (req, res) {
  Products.delete(req.params.id, function (err) {
    if (err) {
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  });
};
