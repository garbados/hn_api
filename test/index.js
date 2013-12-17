var hn = require('../app');
var users = require('./users');
var async = require('async');

async.map(users, hn.users, function (err, results) {
  if (err) throw err;
  var karmas = {};
  
  results.forEach(function (result) {
    var res = JSON.parse(result.body);
    karmas[res.username] = res.karma;
  });

  console.log(JSON.stringify(karmas, undefined, 2));
});