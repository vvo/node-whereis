node-whereis
============

Simply get the first path to a bin on any system

```js
var whereis = require('whereis');
whereis('wget', function(err, path) {
  console.log(path);
});
// /usr/bin/wget
```
