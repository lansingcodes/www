require! 'LiveScript'
CSON = require 'cson-safe'

strip_trailing_semicolon = (str) ->
  if str[*- 1] == ';'
    return str.slice(0, str.length - 1)
  return str

strip_parentheses = (str) ->
  if str[0] == '(' and str[*-1] == ')'
    return str.slice(1, str.length - 1)
  return str

parse_lson = (str) ->
  compiled = LiveScript.compile str, {header: false, bare: true}
  return CSON.parse strip_parentheses strip_trailing_semicolon compiled

module.exports.parse = (str) ->
  return parse_lson str

module.exports.parseFile = (filename) ->
  return parse_lson require('fs').readFileSync(filename, 'utf8')

module.exports.stringify = (obj) ->
  return JSON.stringify obj, null, 2