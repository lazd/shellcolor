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

| Tag                | ANSI |
| ------------------ | ----:|
| **`<black>`**      |   30 |
| **`<red>`**        |   31 |
| **`<green>`**      |   32 |
| **`<yellow>`**     |   33 |
| **`<blue>`**       |   34 |
| **`<magenta>`**    |   35 |
| **`<cyan>`**       |   36 |
| **`<white>`**      |   37 |
| **`<grey>`**       |   90 |
| **`<bg-black>`**   |   40 |
| **`<bg-red>`**     |   41 |
| **`<bg-green>`**   |   42 |
| **`<bg-yellow>`**  |   43 |
| **`<bg-blue>`**    |   44 |
| **`<bg-magenta>`** |   45 |
| **`<bg-cyan>`**    |   46 |
| **`<bg-white>`**   |   47 |
| **`<bg-grey>`**    |  100 |
| **`<b>`**          |    1 |
| **`<i>`**          |    3 |
| **`<u>`**          |    4 |
| **`<blink>`**      |    5 |


## License

shellcolor is licensed under the permissive BSD license.


[coveralls]: https://coveralls.io/r/lazd/shellcolor
[coveralls-image]: https://coveralls.io/repos/lazd/shellcolor/badge.png?branch=master

[travis]: http://travis-ci.org/lazd/shellcolor
[travis-image]: https://secure.travis-ci.org/lazd/shellcolor.png?branch=master