import db from '../db';
import {ObjectID} from 'mongodb';

exports.all = function (cb) {
  db.get().collection('products')
    .find()
    .toArray(function (err, docs) {
      cb(err, docs);
    });
};

exports.findById = function (id, cb) {
  db.get().collection('products')
    .findOne({_id: ObjectID(id)}, function (err, doc) {
      cb(err, doc);
    });
};

exports.create = function (artist, cb) {
  db.get().collection('products')
    .insert(artist, function (err, result) {
      cb(err, result);
    });
};

exports.delete = function (artist, cb) {
  db.get().collection('products')
    .delete(artist, function (err, result) {
      cb(err, result);
    });
};

exports.update = function (id, newData, cb) {
  db.get().collection('products')
    .updateOne(
      {_id: ObjectID(id)},
      newData,
      function (err, result) {
        cb(err, result);
      }
    );
};
