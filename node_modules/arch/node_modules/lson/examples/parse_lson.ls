lson = require('..')

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
