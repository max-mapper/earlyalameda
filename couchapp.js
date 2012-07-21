var couchapp = require('couchapp')
  , path = require('path')
  ;

var ddoc =
  { "_id":"_design/app" }

ddoc.spatial = {
  cities: function(doc) {
    if(doc.name && doc.geometry && doc.type == "city") {
      emit(doc.geometry, doc);
    }
  }
};

ddoc.validate_doc_update = function (newDoc, oldDoc, userCtx) {
  if (oldDoc && userCtx.roles.indexOf('_admin') === -1) {
    throw "Only admin can modify documents on this database.";
  }
};

couchapp.loadAttachments(ddoc, path.join(__dirname, 'attachments'));

module.exports = ddoc;