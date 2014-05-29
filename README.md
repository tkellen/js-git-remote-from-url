# git-remote-from-url [![Build Status](https://secure.travis-ci.org/tkellen/node-git-remote-from-url.png?branch=master)](http://travis-ci.org/tkellen/node-git-remote-from-url)
> Find the git remote in a git url.

[![NPM](https://nodei.co/npm/git-remote-from-url.png)](https://nodei.co/npm/git-remote-from-url/)

## Example
```js
const gitRemoteFromUrl = require('git-remote-from-url');

gitRemoteFromUrl('git://github.com/user/project.git'); // // git@github.com:user/project.git
gitRemoteFromUrl('git+ssh://git@github.com:project.git')) // git@github.com:project.git
gitRemoteFromUrl('git+ssh://git@github.com/project.git')) // git@github.com:project.git
gitRemoteFromUrl('git+http://git@github.com/project/blah.git')) // git@github.com:project/blah.git
gitRemoteFromUrl('git+https://git@github.com/project/blah.git')) // git@github.com:project/blah.git
```

## Release History

* 2014-05-29 - v0.1.0 - initial release
