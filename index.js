const core     = require('./src/cd-core');
const notifier = require('./src/cd-notifier');
const pkgInfo  = require('./package.json');

const FAIL_CLI_ICON = '✘';
const PASS_CLI_ICON = '✓';
const WARN_CLI_ICON = '♺';

// module entry points
const CoreModule = {
  name:      pkgInfo.name,
  version:   pkgInfo.version,
  isWindows: core.isWindows,
  isOSX:     core.isOSX,
  isLinux:   core.isLinux,
  cliIconFail: FAIL_CLI_ICON,
  cliIconPass: PASS_CLI_ICON,
  cliIconWarn: WARN_CLI_ICON,

  getAssetPath: () => {
    return core.getAssetPath();
  },
  getModuleIcon: () => {
    return core.getModuleIcon();
  },
  getInfoIcon: () => {
    return core.getInfoIcon();
  },
  getFailIcon: () => {
    return core.getFailIcon();
  },
  getPassIcon: () => {
    return core.getPassIcon();
  },
  notify: (msg = '', options = {showConsole: true}) => {
    return notifier.notify(msg, options);
  },
  notifyPass: (msg = '', options = {showConsole: true}) => {
    return notifier.notifyPass(msg, options);
  },
  notifyFail: (msg = '', options = {showConsole: true}) => {
    return notifier.notifyFail(msg, options);
  }
};

module.exports = CoreModule;
