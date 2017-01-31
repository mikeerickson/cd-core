const core    = require('./src/cd-core');
const pkgInfo = require('./package.json');

// module entry points
const CoreModule = {
  name: pkgInfo.name,
  version: pkgInfo.version,
  getAssetPath: () => {
    return core.getAssetPath();
  },
  getModuleIcon: () => {
    return core.getModuleIcon();
  },
  getFailIcon: () => {
    return core.getFailIcon();
  },
  getPassIcon: () => {
    return core.getPassIcon();
  }
};

module.exports = CoreModule;
