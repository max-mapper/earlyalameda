var couchapp = require('couchapp')
  , path = require('path')
  ;

var ddoc =
  { "_id":"_design/app" }

ddoc.spatial = {};

ddoc.views = {
  "categories": {
    map: function(doc) {
      if (!doc.categories) return false;
      if (!doc.type) return false;
      if (doc.type !== "program") return false;
      doc.categories.map(function(category) {
        emit(category, 1)
      })
    }
  },
  "byCategory": {
    map: function(doc) {
      if (!doc.categories) return false;
      if (!doc.type) return false;
      if (doc.type !== "program") return false;
      doc.categories.map(function(category) {
        emit(category, doc)
      })
    }
  }
}

ddoc.validate_doc_update = function (newDoc, oldDoc, userCtx) {
  if (oldDoc && userCtx.roles.indexOf('_admin') === -1) {
    throw "Only admin can modify documents on this database.";
  }
};

module.exports = ddoc;
