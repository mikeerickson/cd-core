const path = require('path');
const fs   = require('fs');

const MODULE_PATH = path.dirname(__dirname);

const cd_core = {
  getAssetPath: () => {
    return path.join(MODULE_PATH,'assets');
  },
  getModuleIcon: () => {
    return path.join(cd_core.getAssetPath(),'cd-logo.png');
  },
  getFailIcon: () => {
    return path.join(cd_core.getAssetPath(),'red.png');
  },
  getPassIcon: () => {
    return path.join(cd_core.getAssetPath(),'green.png');
  }
};

module.exports = cd_core;
