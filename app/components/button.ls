require! {
  './icon': Icon
}

module.exports = class Button extends React.Component

  render: ->
    type = @props.type or \default
    size = @props.size or \xl

    $a do
      class-name: "btn btn-#{type} btn-#{size} #{@props.class-name}"
      href: @props.href
      'data-scroll': @props['data-scroll']
      if @props.icon?
        $(Icon) do
          type: @props.icon
          style: styles.icon.base
      @props.children

styles =

  icon:

    base:
      margin-right: 7
