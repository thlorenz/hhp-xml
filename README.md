# hhp-xml [![build status](https://secure.travis-ci.org/thlorenz/hhp-xml.svg?branch=master)](http://travis-ci.org/thlorenz/hhp-xml)

Poker HandHistory Parser for XML formatted histories.

```js
const fs = require('fs')
const { parseHands } = require('hhp-xml')
const xml = fs.readFileSync('iPokerHistory.xml', 'utf8')
const { parsedHands, errors, count } = parseHands(xml)
```

## Installation

    npm install hhp-xml

## [API](https://thlorenz.github.io/hhp-xml)

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### canParse

Determines if any of the parsers can parse the passed XML hand.

**Parameters**

-   `xml` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to parse

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `true` if it knows how to parse this xml

### parseHands

Parses hands for Poker rooms that save them in xml format.
Currently only iPoker is supported.

The structure of the returned hand objects is the same as for
[hhp](https://github.com/thlorenz/hhp).

**Parameters**

-   `xml` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** to parse

Returns **[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** parsed hands and errors encountered: `{ parsedHands: Array, errors: Array, count: Number }`

## License

MIT
