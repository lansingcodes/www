# LiveScript standard library
global <<< require \prelude-ls

# Arch
global.arch = require \arch

# DSL for React.DOM and React.create-element
global.$ = arch.dom
for component-name in Object.keys arch.dom
  global."$#{component-name}" = arch.dom[component-name]

global <<< do

  # Radium for inline styles
  Radium: require \radium

  chunk: (size, array) -->
    [].concat.apply do
        []
        array.map (elem, index) ->
          if index % size
            []
          else
            [ array.slice(index, index + size) ]
