# connect-params

lightweight wrapper around `qs` to parse parameters for connect.js and depended frameworks like Express.js

## Features

- add `params` to `req` object
- user defined function to add and define defaults

## Installation

[Node.js][] and [NPM][] is required.

    $ npm install connect-params

[Node.js]: https://npmjs.org/
[NPM]: https://npmjs.org/

## Usage

```javascript
var parameters = require('connect-params')

var app = connect()
.use(parameters(function(params) {
  return {
    foo: params.foo,
    bar: params.bar || params.barr, //aliases
    baz: params.baz || null, // defaults
  }
}));
```

## Contribution
  1. Hack away and send PR

Any contributions are more then welcome! :sparkling_heart:
