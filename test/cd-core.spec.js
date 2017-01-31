let TestUtils = require('./test_helpers');
let core      = require('../index');
let path      = require('path');

let should    = TestUtils.should;
let expect    = TestUtils.expect;

let pkgInfo   = require('../package.json');

describe('cd-core', () => {
  const pkgPath = path.dirname(__dirname);

  beforeEach(() =>{
  });

  it('should return module name', () => {
    expect(core.name).to.equal(pkgInfo.name);
  });

  it('should return module version', () => {
    expect(core.version).to.equal(pkgInfo.version);
  });

  it('should return asset path', () => {
    expect(core.getAssetPath()).to.equal(path.join(pkgPath,'assets'));
  });

  it('should return module icon path', () => {
    expect(core.getModuleIcon()).to.equal(path.join(pkgPath,'assets','cd-logo.png'));
  });

  it('should return fail icon path', () => {
    expect(core.getFailIcon()).to.equal(path.join(pkgPath,'assets','red.png'));
  });

  it('should return pass icon path', () => {
    expect(core.getPassIcon()).to.equal(path.join(pkgPath,'assets','green.png'));
  });

});
