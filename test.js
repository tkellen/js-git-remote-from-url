const gitRemoteFromUrl = require('./');
const expect = require('chai').expect;

describe('gitRemoteFromUrl', function () {

  it('should find the remote in a git url', function () {
    expect(gitRemoteFromUrl('git://github.com/user/project.git')).to.equal('git@github.com:user/project.git');
    expect(gitRemoteFromUrl('git+ssh://git@github.com:project.git')).to.equal('git@github.com:project.git');
    expect(gitRemoteFromUrl('git+ssh://git@github.com/project.git')).to.equal('git@github.com:project.git');
    expect(gitRemoteFromUrl('git+http://git@github.com/project/blah.git')).to.equal('git@github.com:project/blah.git');
    expect(gitRemoteFromUrl('git+https://git@github.com/project/blah.git')).to.equal('git@github.com:project/blah.git');
  });

});
