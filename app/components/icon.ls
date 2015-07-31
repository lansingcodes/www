module.exports = class Icon extends React.Component

  render: ->
    $i do
      class-name: "fa #{@props.type}"
      style: @props.style
