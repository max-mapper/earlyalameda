var logging = require('logref')
logging.stdout()
process.logging = logging

var baseAPI = "http://max.ic.ht/earlyalameda"

var tako = require('tako')
  , http = require('http')
  , path = require('path')
  , Rewriter = require('rewriter')
  , rewrites = [ 
        {"from":"/", "to":"index.html"}
      // , {"from":"/api/search", "to":"../../../_search/social_services/social_services/_search"} // github.com/open211/redirectory/wiki/Installation
      , {"from":"/api/categories", "to": "/_view/categories"}
      , {"from":"/api", "to":"/"}
      , {"from":"/api/*", "to":"/*"}
      , {"from":"/*", "to":'*'}
    ]
  ;

  var t = tako()
  new Rewriter(t, rewrites, {verbose: true, root: baseAPI + "/_design/app", attachments: path.resolve(__dirname, 'attachments')})
  t.httpServer.listen(9999)
  console.log('listening on 9999')