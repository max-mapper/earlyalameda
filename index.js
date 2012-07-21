var logging = require('logref')
logging.stdout()
process.logging = logging

var tako = require('tako')
  , http = require('http')
  , path = require('path')
  , Rewriter = require('Rewriter')
  , rewrites = [ 
        {"from":"/", "to":"index.html"}
      // , {"from":"/api/search", "to":"../../../_search/social_services/social_services/_search"} // github.com/open211/redirectory/wiki/Installation
      , {"from":"/api", "to":"/"}
      , {"from":"/api/*", "to":"/*"}
      , {"from":"/*", "to":'*'}
    ]
  ;

  var t = tako()
  new Rewriter(t, rewrites, {verbose: true, root: "http://max.ic.ht/earlyalameda/_design/app", attachments: path.resolve(__dirname, 'attachments')})
  t.httpServer.listen(9999)
  console.log('listening on 9999')