# EarlyAlameda.com

## Early Childhood Resources for Alameda County

This is an instance of the [http://github.com/open211/redirectory](Open211) platform.

Installation
------------

    install couchdb 1.1 or above, node.js and npm
    make sure "secure_rewrites" is set to false and "allow_jsonp" is set to true in your couch config
    then replicate this couch to your couch:
    http://max.ic.ht/earlyalameda
    npm install -g couchapp
    then do:
    couchapp push app.js yourcouch/earlyalameda

    then visit yourcouch/earlyalameda/_design/app/_rewrite

    for full text search we use elasticsearch. you have to run it somewhere and use the couchdb "river" plugin to sync elasticsearch with couchdb

    to set up the full text search proxy we utilize couchdb 1.1's built in proxy.
    add the following tuple to httpd_global_handlers in the couch config:
    _search: {couch_httpd_proxy, handle_proxy_req, <<"YOUR_ELASTICSEARCH_URL_HERE">>}

    an example elasticsearch url is http://www.example.com:9200 (default port for ES is 9200)