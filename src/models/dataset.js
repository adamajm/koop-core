const Util = require('util')
const Model = require('./')

function Dataset (options) {
  Dataset.super_.call(this, options)
}

Util.inherits(Dataset, Model)

// Data Operations

Dataset.prototype.getFromCache = function (key, options, callback) {
  this.cache.retrieve(key, options, callback)
}

Dataset.prototype.getData = function (req, callback) {
  this.cache.retrieve(req.params.id, req.query, callback)
}

Dataset.prototype.insertIntoCache = function (key, geojson, options, callback) {
  this.cache.insert(key, geojson, options, callback)
}

Dataset.prototype.upsertIntoCache = function (key, geojson, options, callback) {
  this.cache.upsert(key, geojson, options, callback)
}

Dataset.prototype.deleteFromCache = function (key, callback) {
  this.cache.delete(key, callback)
}

// Metadata Operations

Dataset.prototype.getFromCatalog = function (key, options, callback) {
  this.cache.catalog.retrieve(key, options, callback)
}

Dataset.prototype.insertIntoCatalog = function (key, metadata, callback) {
  this.cache.catalog.insert(key, metadata, callback)
}

Dataset.prototype.deleteFromCatalog = function (key, callback) {
  this.cache.catalog.delete(key, callback)
}

module.exports = Dataset
