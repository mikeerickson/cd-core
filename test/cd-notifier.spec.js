let TestUtils = require('./test_helpers');
let core      = require('../index');
let path      = require('path');

let should    = TestUtils.should;
let expect    = TestUtils.expect;

let pkgInfo   = require('../package.json');

describe('cd-notifier', () => {
  const PKG_PATH = path.dirname(__dirname);
  const testPad  = '      ';
  beforeEach(() =>{
  });

  it('should display a blank message', () => {
    core.notify();
  });

  it('should display general notification message', () => {
    core.notify(testPad + '==> myMsg');
    core.notify(testPad + '==> myMsg (Console Disabled)', {showConsole: false});
  });

  it('should display passing notification message', () => {
    core.notifyPass(testPad + '==> myPassingMessage');
    core.notifyPass(testPad + '==> myPassingMessage (Console Disabled)', {showConsole: false});
  });

  it('should display failing notification message', () => {
    core.notifyFail(testPad + '==> myFailingMessage');
    core.notifyFail(testPad + '==> myFailingMessage (Console Disabled)', {showConsole: false});
  });

});
