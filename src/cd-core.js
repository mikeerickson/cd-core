const path = require('path');
const fs   = require('fs');

const MODULE_PATH = path.dirname(__dirname);

const core = {
  getAssetPath: () => {
    return path.join(MODULE_PATH,'assets');
  },
  getModuleIcon: () => {
    return path.join(core.getAssetPath(),'cd-logo.png');
  },
  getFailIcon: () => {
    return path.join(core.getAssetPath(),'red.png');
  },
  getPassIcon: () => {
    return path.join(core.getAssetPath(),'green.png');
  }
};

module.exports = core;
