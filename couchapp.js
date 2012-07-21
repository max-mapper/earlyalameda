var couchapp = require('couchapp')
  , path = require('path')
  ;

var ddoc =
  { "_id":"_design/app" }

ddoc.spatial = {};

ddoc.views = {
  "categories": {
    map: function(doc) {
      if (!doc.catgories || !doc.type || doc.type !== "program") return false;
      doc.categories.forEach(function(category) {
        emit(category)
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
