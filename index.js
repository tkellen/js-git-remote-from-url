const url = require('url');

module.exports = function (request) {
  var parsed = url.parse(request);
  var path = parsed.path;
  if (path.indexOf(':') === -1) {
    path = ':'+path.substring(1);
  } else {
    path = parsed.path.replace('/:',':');
  }
  return [
    parsed.auth||'git',
    '@',
    parsed.host,
    path
  ].join('');
};
