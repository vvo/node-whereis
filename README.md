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

[![Build Status](https://secure.travis-ci.org/vvo/node-whereis.png?branch=master)](http://travis-ci.org/vvo/node-whereis)
