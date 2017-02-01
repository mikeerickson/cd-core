let TestUtils = require('./test_helpers');
let core      = require('../index');
let path      = require('path');
let chalk     = require('chalk');

let should    = TestUtils.should;
let expect    = TestUtils.expect;

let pkgInfo   = require('../package.json');


describe('cd-core', () => {
  const PKG_PATH = path.dirname(__dirname);
  const testPad  = '      ';

  beforeEach(() =>{
  });

  it('should return module name', () => {
    expect(core.name).to.equal(pkgInfo.name);
  });

  it('should return module version', () => {
    expect(core.version).to.equal(pkgInfo.version);
  });

  it('should return asset path', () => {
    expect(core.getAssetPath()).to.equal(path.join(PKG_PATH,'assets'));
  });

  it('should return module icon path', () => {
    expect(core.getModuleIcon()).to.equal(path.join(PKG_PATH,'assets','cd-logo.png'));
  });

  it('should return fail icon path', () => {
    expect(core.getFailIcon()).to.equal(path.join(PKG_PATH,'assets','red.png'));
  });

  it('should return pass icon path', () => {
    expect(core.getPassIcon()).to.equal(path.join(PKG_PATH,'assets','green.png'));
  });

  it('should correct platform check', () => {
    console.log(chalk.cyan.bold(testPad + '==> isOSX:     ', core.isOSX()));
    console.log(chalk.cyan.bold(testPad + '==> isWindows: ', core.isWindows()));
    console.log(chalk.cyan.bold(testPad + '==> isLinux:   ', core.isLinux()));
  });

});
