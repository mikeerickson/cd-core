const core     = require('./cd-core');
const chalk    = require('chalk');
const notifier = require('node-notifier');
const path     = require('path');
const _        = require('lodash');

const cd_notifier = {
  notifyOptions: function (status, override) {
    let taskName = override.taskName || 'Task';
    var options = {
      title:    override.title   || (status === 'pass') ? 'Passed' : 'Failed',
      message:  override.message || (status === 'pass') ? `${taskName} Completed Successfully` : `${taskName} Failed`,
      icon:     override.icon    || path.join(__dirname, '../', 'assets/test-' + status + '.png')
    };

    if ((status !== 'pass') && (status !== 'fail')) {
      options.icon = core.getModuleIcon();
    }

    if (typeof override.message !== 'undefined') {
      if (override.message.length > 0) {
        options.message = override.message;
      }
    }

    return options;

  },
  notify: (msg = '', options = {}) => {
    (options.showConsole) ? console.log(chalk.bold(msg)) : null;
    return notifier.notify((cd_notifier.notifyOptions('', options = {message: msg})));
  },
  notifyPass: (msg, options = {}) => {
    (options.showConsole) ? console.log(chalk.green.bold(msg)) : null;
    return notifier.notify((cd_notifier.notifyOptions('pass', options)));
  },
  notifyFail: (msg, options = {}) => {
    (options.showConsole) ? console.log(chalk.red.bold(msg)) : null;
    return notifier.notify((cd_notifier.notifyOptions('fail', options)));
  }
};

module.exports = cd_notifier;
