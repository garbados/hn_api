var request = require('request');
var url = 'http://api.thriftdb.com/api.hnsearch.com/';

function _request (method, action, id, opts, done) {
  var path = id ? [action, id].join('/') : action;

  if (typeof(opts) === 'function') {
    done = opts;
    opts = {};
  }

  opts.url = url + path;
  opts.method = method;

  request(opts, done);
}

var get = _request.bind(_request, 'GET');
var post = _request.bind(_request, 'POST');
var put = _request.bind(_request, 'PUT');
var del = _request.bind(_request, 'DELETE');

var items = get.bind(get, 'items');
var users = get.bind(get, 'users');

module.exports = {
  get: get,
  post: post,
  put: put,
  del: del,
  items: items,
  users: users
};