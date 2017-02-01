# cd-core

Common utility and resources (assets)

### API

```javascript
const core = require('cd-core');
```

### core.name (type: string property)

Param     | Description
----------|--------------
ret ==>   | Module Name

```javascript
const name = core.name; // returns module name
```

### core.version (type: string property)

Param     | Description
----------|--------------
ret ==>   | Version Number

```javascript
const vers = core.version; // returns module version
```

### core.isWindows (type: function)

Param     | Description
----------|--------------
ret ==>   | `true` or `false`

```javascript
const isWindows = core.isWindows(); // returns true if running on windows
```

### core.isOSX (type: function)

Param     | Description
----------|--------------
ret ==>   | `true` or `false`

```javascript
const isOSX = core.isOSX(); // returns true if running on osx
```

### core.isLinux (type: function)

Param     | Description
----------|--------------
ret ==>   | `true` or `false`

```javascript
const isLinux = core.isLinux(); // returns true if running on linux
```

### core.getAssetPath (type: function)

Param     | Description
----------|--------------
ret ==>   | Returns full path to asset path (icons, etc.)

```javascript
const assetPath = core.getAssetPath(); // returns core asset path
```

### core.getModuleIcon (type: function)

Param     | Description
----------|--------------
ret ==>   | Returns path to module icon

```javascript
const moduleIconPath = core.getModuleIcon(); // returns path to module icon
```

### core.getFailIcon (type: function)

Param     | Description
----------|--------------
ret ==>   | Returns path to fail icon

```javascript
const failIconPath = core.getFailIcon(); // returns path to fail icon
```

### core.getPassIcon (type: function)

Param     | Description
----------|--------------
ret ==>   | Returns path to pass icon

```javascript
const passIconPath = core.getPassIcon(); // returns path to pass icon
```

### core.notify (type: function)

Param     | Description
----------|--------------
message   | Notification Messasge
options   | Notification Options
 | `showConsole: true or false`
 | `icon: path to override icon`
 | `title: title override`

```javascript
core.notify('Hello', {showConsole: false});  // display default message and no console output
```

### core.notifyPass (type: function)

Param     | Description
----------|--------------
message   | Notification Message
options   | Notification Options
 | `showConsole: true or false`
 | `icon: path to override icon`
 | `title: title override`

```javascript
core.notifyPass('Process Completed Successfully'); // display default message
```

### core.notifyFail (type: function)

Param     | Description
----------|--------------
message   | Notification Message
options   | Notification Options
 | `showConsole: true or false`
 | `icon: path to override icon`
 | `title: title override`

```javascript
core.notifyFail('Process Failed To Complete'); // display default message
```


***


### License

Copyright &copy; 2017 Mike Erickson
Released under the MIT license


### Credits

cd-core written by Mike Erickson

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Webiste: [codedungeon.org](http://codedungeon.org)

***
