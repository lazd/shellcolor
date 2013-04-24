# shellcolor  [![Build status][travis-image]][travis] [![Code coverage status][coveralls-image]][coveralls]
> ANSI colors to your Node.js app's stdout, stderror, and logs

## Installation

Get shellcolor with npm.

```javascript
npm install shellcolor --save
```

## Usage

Pass a bland string to `shellcolor()`, get a colorful string back.

```javascript
var shellcolor = require('shellcolor');

console.log(shellcolor('<b><green>Success:<green></b> Process started.'));
  
console.warn(shellcolor('<b><yellow>Error:</yellow></b> Something seems wrong....'));

console.error(shellcolor('<b><red>Error:</red></b> Something broke.'));
```

### Tags

The following tags are available:

| Tag               | Affects     | ANSI |
| ------------- --- | ----------- | ----:|
| **`black`**       |        text |   30 |
| **`red`**         |        text |   31 |
| **`green`**       |        text |   32 |
| **`yellow`**      |        text |   33 |
| **`blue`**        |        text |   34 |
| **`magenta`**     |        text |   35 |
| **`cyan`**        |        text |   36 |
| **`white`**       |        text |   37 |
| **`grey`**        |        text |   90 |
| **`bg-black`**    |  background |   40 |
| **`bg-red`**      |  background |   41 |
| **`bg-green`**    |  background |   42 |
| **`bg-yellow`**   |  background |   43 |
| **`bg-blue`**     |  background |   44 |
| **`bg-magenta`**  |  background |   45 |
| **`bg-cyan`**     |  background |   46 |
| **`bg-white`**    |  background |   47 |
| **`bg-grey`**     |  background |  100 |
| **`b`**           |        text |    1 |
| **`i`**           |        text |    3 |
| **`u`**           |        text |    4 |
| **`blink`**       |        both |    5 |


## License

shellcolor is licensed under the permissive BSD license.


[coveralls]: https://coveralls.io/r/lazd/shellcolor
[coveralls-image]: https://coveralls.io/repos/lazd/shellcolor/badge.png?branch=master

[travis]: http://travis-ci.org/lazd/shellcolor
[travis-image]: https://secure.travis-ci.org/lazd/shellcolor.png?branch=master