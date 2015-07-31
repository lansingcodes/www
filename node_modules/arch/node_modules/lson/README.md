# LSON: LiveScript Object Notation Parser

Same API as the JSON module, but for [LiveScript](http://livescript.net/) objects. Also supports CSON and JSON (since LSON is a superset of them).

Uses the LiveScript parser to do the actual parsing. Will not execute code.

## Install

    npm install lson

## API

lson.parse: Given a string, returns an object.

lson.parseFile: Given a filename (extensions .lson and .json.ls are common), reads and parses it synchronously, and returns an object

lson.stringify: Given an object, returns a string (currently outputs pretty-printed JSON).

## LSON format

LSON is a superset of JSON and CSON. Here is an example:

```livescript
an_array: <[ an array of strings ]>
another_array: [
  'another'
  'array'
]
# we can even have comments
a_dict: {
  key: 'value'
}
a_string: 'some string'
another_string: \anotherstring
```

This corresponds to the following JSON:

```javascript
{
  "an_array": [
    "an",
    "array",
    "of",
    "strings"
  ],
  "another_array": [
    "another",
    "array"
  ],
  "a_dict": {
    "key": "value"
  },
  "a_string": "some string",
  "another_string": "anotherstring"
}
```

## Example

```livescript
lson = require('lson')

parsed = lson.parse('''
an_array: <[ an array of strings ]>
another_array: [
  'another'
  'array'
]
# we can even have comments
a_dict: {
  key: 'value'
}
a_string: 'some string'
another_string: \\anotherstring
''')

console.log(lson.stringify(parsed))
```

## Licence

MIT

## Credits

Author: [Geza Kovacs](https://github.com/gkovacs)
